import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// --- CREATE Nursery ---
router.post('/', async (req, res) => {
  try {
    const { name, address, phone, email, capacity, opening_hours, organisation_id } = req.body;

    const nursery = await prisma.nursery.create({
      data: {
        name,
        address,
        phone,
        email,
        capacity,
        opening_hours,
        organisation_id,
      },
    });

    res.status(201).json(nursery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create nursery' });
  }
});

// --- READ all nurseries ---
router.get('/', async (_req, res) => {
  try {
    const nurseries = await prisma.nursery.findMany();
    res.json(nurseries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch nurseries' });
  }
});

// --- READ single nursery by id ---
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const nursery = await prisma.nursery.findUnique({ where: { id } });
    if (!nursery) return res.status(404).json({ error: 'Nursery not found' });
    res.json(nursery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch nursery' });
  }
});

// --- UPDATE Nursery ---
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await prisma.nursery.update({
      where: { id },
      data,
    });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update nursery' });
  }
});

// --- DELETE Nursery ---
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.nursery.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete nursery' });
  }
});

export default router;
