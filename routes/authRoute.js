import express from "express"
import { registerController, testController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js"

// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || POST
router.post("/login", loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router