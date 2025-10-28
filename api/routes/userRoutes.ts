import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// --- CREATE User ---
router.post('/', async (req, res) => {
  try {
    const {
      email,
      auth_provider_id,
      first_name,
      last_name,
      organisation_id,
      nursery_id,
      role_id,
      user_type_id,
      is_active,
    } = req.body;

    // Validate required fields
    if (!email || !auth_provider_id || !organisation_id || !user_type_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const user = await prisma.user.create({
      data: {
        email,
        auth_provider_id,
        first_name,
        last_name,
        organisation_id,
        nursery_id,
        role_id,
        user_type_id,
        is_active,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create User' });
  }
});

// --- READ all Users ---
router.get('/', async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        Organisation: true,
        Nursery: true,
        Role: true,
        UserType: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Users' });
  }
});

// --- READ single User ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        Organisation: true,
        Nursery: true,
        Role: true,
        UserType: true,
      },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch User' });
  }
});

// --- UPDATE User ---
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    email,
    first_name,
    last_name,
    organisation_id,
    nursery_id,
    role_id,
    user_type_id,
    is_active,
  } = req.body;

  try {
    const updated = await prisma.user.update({
      where: { id },
      data: {
        email,
        first_name,
        last_name,
        organisation_id,
        nursery_id,
        role_id,
        user_type_id,
        is_active,
      },
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update User' });
  }
});

// --- DELETE User ---
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete User' });
  }
});

export default router;
