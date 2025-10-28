import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// --- Create Organisation ---
router.post('/', async (req, res) => {
  try {
    const { name, registration_number, address } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const org = await prisma.organisation.create({
      data: { name, registration_number, address },
    });

    res.status(201).json(org);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create organisation' });
  }
});

// --- Get all Organisations ---
router.get('/', async (_req, res) => {
  try {
    const orgs = await prisma.organisation.findMany();
    res.json(orgs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch organisations' });
  }
});

// --- Get Organisation by ID ---
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const org = await prisma.organisation.findUnique({ where: { id } });
    if (!org) return res.status(404).json({ error: 'Organisation not found' });
    res.json(org);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch organisation' });
  }
});

// --- Update Organisation ---
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, registration_number, address } = req.body;

    const updatedOrg = await prisma.organisation.update({
      where: { id },
      data: { name, registration_number, address },
    });

    res.json(updatedOrg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update organisation' });
  }
});

// --- Delete Organisation ---
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.organisation.delete({ where: { id } });
    res.json({ message: 'Organisation deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete organisation' });
  }
});

export default router;
