import express from "express"
import { registerController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"

// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || POST
router.post("/login", loginController);



export default router