import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import organisationRoutes from './routes/organisationRoutes';
import userTypeRoutes from './routes/userTypeRoutes';
import roleRoutes from './routes/roleRoutes';
import nurseryRoutes from './routes/nurseryRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// auth
app.use('/api/auth', authRoutes);

// CRUD routes
app.use('/api/organisations', organisationRoutes);
app.use('/api/user-types', userTypeRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/nurseries', nurseryRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
