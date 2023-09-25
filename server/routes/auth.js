import { Router } from "express";
import { register, login, current } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router()

router.post('/register', register)

router.post('/login', login)

router.post('/current', checkAuth, current)


export default router