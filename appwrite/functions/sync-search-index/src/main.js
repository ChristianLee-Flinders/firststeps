import { Client, Databases } from "node-appwrite";

const ENTITY_CONFIG = {
  staff_profiles: {
    entityType: "staff",
    title: (d) => `${d.firstName} ${d.lastName}`,
    subtitle: (d) => d.position,
    searchFields: (d) => [
      d.firstName,
      d.lastName,
      d.email,
      d.position,
    ],
  },

  parents: {
    entityType: "parent",
    title: (d) => `${d.firstName} ${d.lastName}`,
    subtitle: (d) => d.email,
    searchFields: (d) => [
      d.firstName,
      d.lastName,
      d.email,
      d.phone,
    ],
  },

  children: {
    entityType: "child",
    title: (d) => `${d.firstName} ${d.lastName}`,
    subtitle: (d) => d.roomName,
    searchFields: (d) => [
      d.firstName,
      d.lastName,
      d.roomName,
      d.keyWorkerName,
    ],
  },
};

function getCollectionIdFromEvent(event) {
  const parts = event.split(".");
  const index = parts.indexOf("collections") + 1;
  return parts[index];
}

export default async ({ req, res, log, error }) => {
  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const event = req.headers["x-appwrite-event"];
    const collectionId = getCollectionIdFromEvent(event);

    log("Event:", event);
    log("Collection:", collectionId);

    const config = ENTITY_CONFIG[collectionId];

    // Ignore collections we don't care about
    if (!config) {
      log("No search config for this collection, skipping");
      return res.empty();
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(process.env.APPWRITE_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const databases = new Databases(client);

    const searchDocId = `${config.entityType}_${payload.$id}`;

    // --------------------
    // DELETE
    // --------------------
    if (event.endsWith(".delete")) {
      try {
        await databases.deleteDocument(
          process.env.DATABASE_ID,
          process.env.SEARCH_INDEX_COLLECTION_ID,
          searchDocId
        );
      } catch {
        log("Search doc already deleted");
      }

      return res.json({ ok: true, action: "deleted" });
    }

    // --------------------
    // CREATE / UPDATE
    // --------------------
    const searchText = config
      .searchFields(payload)
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const data = {
      entityId: payload.$id,
      entityType: config.entityType,
      title: config.title(payload),
      subtitle: config.subtitle(payload),
      searchText,
    };

    try {
      await databases.updateDocument(
        process.env.DATABASE_ID,
        process.env.SEARCH_INDEX_COLLECTION_ID,
        searchDocId,
        data
      );
    } catch {
      await databases.createDocument(
        process.env.DATABASE_ID,
        process.env.SEARCH_INDEX_COLLECTION_ID,
        searchDocId,
        data
      );
    }

    return res.json({
      ok: true,
      action: event.endsWith(".create") ? "created" : "updated",
    });
  } catch (err) {
    error(err);
    return res.json({ ok: false, message: err.message });
  }
};
