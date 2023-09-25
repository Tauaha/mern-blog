import { Router } from "express";

import { checkAuth } from "../utils/checkAuth.js";
import { createPosts,  getAll, getById, getOwnPosts, removePost, updatePost} from "../controllers/posts.js";


const router = new Router()

router.post('/', checkAuth, createPosts)

router.get('/', getAll)

router.get('/:id', getById)

router.get('/user/me', checkAuth, getOwnPosts)

router.delete('/:id', checkAuth, removePost)


router.put('/:id',checkAuth,  updatePost)


export default router