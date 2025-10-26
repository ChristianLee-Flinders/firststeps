import prisma from './prisma/client';

async function main() {
  const roles = [
    { name: 'Owner', description: 'Full access' },
    { name: 'Staff', description: 'Staff user' },
    { name: 'Parent', description: 'Parent user' },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name }, // ensure 'name' is unique in DB
      update: {},
      create: role,
    });
  }

  console.log('Roles seeded successfully');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
