// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // --- 1️⃣ Create Organisation ---
  const ORG_ID = "11111111-1111-1111-1111-111111111111"; // fixed UUID
  const organisation = await prisma.organisation.upsert({
    where: { id: ORG_ID },
    update: {},
    create: {
      id: ORG_ID,
      name: "Alphabet House Day Nursery",
      registration_number: "12345678",
      address: "42-44 Attenborough Lane, Chilwell, Nottingham",
    },
  });
  console.log("✅ Organisation:", organisation.id, organisation.name);

  // --- 2️⃣ Create User Types ---
  const USER_TYPES = [
    { id: "22222222-2222-2222-2222-222222222222", name: "super_admin" },
    { id: "33333333-3333-3333-3333-333333333333", name: "organisation_admin" },
    { id: "44444444-4444-4444-4444-444444444444", name: "staff" },
    { id: "55555555-5555-5555-5555-555555555555", name: "parent" },
  ];

  for (const ut of USER_TYPES) {
    await prisma.userType.upsert({
      where: { id: ut.id },
      update: {},
      create: {
        id: ut.id,
        name: ut.name,
        description: `${ut.name} user type`,
        portal_access: [],
        is_system_defined: true,
      },
    });
    console.log("↩️ User type ensured:", ut.name);
  }

  // --- 3️⃣ Create Nursery ---
  const NURSERY_ID = "66666666-6666-6666-6666-666666666666";
  const nursery = await prisma.nursery.upsert({
    where: { id: NURSERY_ID },
    update: {},
    create: {
      id: NURSERY_ID,
      organisation_id: ORG_ID,
      name: "Alphabet House Chilwell",
      address: "42-44 Attenborough Lane, Chilwell, Nottingham",
      phone: "0115 1234567",
      email: "chilwell@alphabet-house.co.uk",
      capacity: 50,
      opening_hours: {
        monday: "08:00-18:00",
        tuesday: "08:00-18:00",
        wednesday: "08:00-18:00",
        thursday: "08:00-18:00",
        friday: "08:00-18:00",
      },
    },
  });
  console.log("✅ Nursery:", nursery.id, nursery.name);

  // --- 4️⃣ Create Roles ---
  const ROLES = [
    { name: "Super Admin", userTypeId: "22222222-2222-2222-2222-222222222222" },
    { name: "Organisation Admin", userTypeId: "33333333-3333-3333-3333-333333333333" },
    { name: "Staff", userTypeId: "44444444-4444-4444-4444-444444444444" },
    { name: "Parent", userTypeId: "55555555-5555-5555-5555-555555555555" },
  ];

  for (const r of ROLES) {
    const existingRole = await prisma.role.findFirst({
      where: { name: r.name, organisation_id: ORG_ID },
    });
    if (!existingRole) {
      await prisma.role.create({
        data: {
          id: randomUUID(),
          name: r.name,
          description: `${r.name} role`,
          permissions: {},
          organisation_id: ORG_ID,
          user_type_id: r.userTypeId,
        },
      });
      console.log("✅ Role created:", r.name);
    } else {
      console.log("↩️ Role exists:", r.name);
    }
  }

  console.log("🌱 Seed finished!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
