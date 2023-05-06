
import { Router } from "express";
const router = Router();

import UsersController from "../controllers/users_controller";

router.get('/', UsersController.index);
router.get('/:id', UsersController.show);
router.post('/', UsersController.create);

export default router;