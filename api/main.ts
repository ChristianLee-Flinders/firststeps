import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
