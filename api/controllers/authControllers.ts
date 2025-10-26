import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/client';

const JWT_SECRET = process.env.JWT_SECRET ?? 'please-change-me';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, roleId } = req.body;
    if (!email || !password || !roleId) return res.status(400).json({ error: 'email, password, roleId required' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ data: { email, password: hashed, roleId } });
    return res.status(201).json({ id: user.id, email: user.email, roleId: user.roleId });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await prisma.user.findUnique({ where: { email }, include: { role: true } });
    if (!user) return res.status(400).json({ error: 'invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'invalid credentials' });

    const token = jwt.sign({ userId: user.id, role: user.role.name }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, role: user.role.name });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
};
