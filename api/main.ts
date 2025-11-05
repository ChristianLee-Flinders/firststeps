import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import organisationRoutes from './routes/organisationRoutes';
import userTypeRoutes from './routes/userTypeRoutes';
import roleRoutes from './routes/roleRoutes';
import nurseryRoutes from './routes/nurseryRoutes';
import userRoutes from './routes/userRoutes';
import { authenticateSupabase, authorisedRoles } from './middleware/auth';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get('/api/health', authenticateSupabase, (_req, res) => res.json({ ok: true }));

// Temp Auth Test Route
app.use('/api/auth', authRoutes)

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
