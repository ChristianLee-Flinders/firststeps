import { Client, Teams } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  try {
    const payload =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const event = req.headers["x-appwrite-event"];
    log("Event:", event);
    log("Payload:", payload);

    if (!payload?.$id) {
      log("No document ID found, skipping");
      return res.empty();
    }

    const client = new Client()
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(process.env.APPWRITE_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);

    const teams = new Teams(client);

    const teamId = `org_${payload.$id}`;
    const teamName = payload.name || "Organisation";

    // --------------------
    // DELETE
    // --------------------
    if (event.endsWith(".delete")) {
      try {
        await teams.delete(teamId);
        log(`Team deleted: ${teamId}`);
      } catch (err) {
        log("Team did not exist, skipping delete");
      }

      return res.json({ ok: true, action: "deleted" });
    }

    // --------------------
    // CREATE / UPDATE
    // --------------------
    try {
      await teams.update(teamId, teamName);
      log(`Team updated: ${teamId}`);
      return res.json({ ok: true, action: "updated" });
    } catch {
      await teams.create(teamId, teamName);
      log(`Team created: ${teamId}`);
      return res.json({ ok: true, action: "created" });
    }

  } catch (err) {
    error(err);
    return res.json({ ok: false, error: err.message }, 500);
  }
};
