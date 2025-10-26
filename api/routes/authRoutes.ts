import { Router } from "express";
import { login, register } from "../controllers/authControllers";
import { authenticateJWT, autherisedRoles } from "../middleware/auithMiddleware";

const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get('/test', authenticateJWT ,(_req, res) => {
    res.json({ message: 'Auth route is working' });
});

export default router;