import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// --- CREATE Role ---
router.post('/', async (req, res) => {
  try {
    const { name, description, permissions, organisation_id, user_type_id } = req.body;

    // Ensure organisation exists
    const org = await prisma.organisation.findUnique({ where: { id: organisation_id } });
    if (!org) return res.status(400).json({ error: 'Organisation not found' });

    // Ensure user type exists
    const userType = await prisma.userType.findUnique({ where: { id: user_type_id } });
    if (!userType) return res.status(400).json({ error: 'UserType not found' });

    const role = await prisma.role.create({
      data: {
        name,
        description,
        permissions,
        organisation_id,
        user_type_id,
      },
    });

    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Role' });
  }
});

// --- READ all Roles ---
router.get('/', async (_req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Roles' });
  }
});

// --- READ single Role by id ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const role = await prisma.role.findUnique({ where: { id } });
    if (!role) return res.status(404).json({ error: 'Role not found' });
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Role' });
  }
});

// --- UPDATE Role ---
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, permissions, organisation_id, user_type_id } = req.body;

  try {
    // Optionally validate organisation and user type if provided
    if (organisation_id) {
      const org = await prisma.organisation.findUnique({ where: { id: organisation_id } });
      if (!org) return res.status(400).json({ error: 'Organisation not found' });
    }

    if (user_type_id) {
      const userType = await prisma.userType.findUnique({ where: { id: user_type_id } });
      if (!userType) return res.status(400).json({ error: 'UserType not found' });
    }

    const updated = await prisma.role.update({
      where: { id },
      data: { name, description, permissions, organisation_id, user_type_id },
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update Role' });
  }
});

// --- DELETE Role ---
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.role.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete Role' });
  }
});

export default router;
