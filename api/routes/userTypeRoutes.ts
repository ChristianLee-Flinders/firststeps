import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// --- CREATE UserType ---
router.post('/', async (req, res) => {
  try {
    const { name, description, portal_access, is_system_defined } = req.body;

    const userType = await prisma.userType.create({
      data: {
        name,
        description,
        portal_access,
        is_system_defined,
      },
    });

    res.status(201).json(userType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create UserType' });
  }
});

// --- READ all UserTypes ---
router.get('/', async (_req, res) => {
  try {
    const types = await prisma.userType.findMany();
    res.json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch UserTypes' });
  }
});

// --- READ single UserType by id ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const type = await prisma.userType.findUnique({ where: { id } });
    if (!type) return res.status(404).json({ error: 'UserType not found' });
    res.json(type);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch UserType' });
  }
});

// --- UPDATE UserType ---
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.userType.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update UserType' });
  }
});

// --- DELETE UserType ---
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.userType.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete UserType' });
  }
});

export default router;
