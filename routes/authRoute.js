import express from "express"
import { forgotPasswordController, registerController, testController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js"

// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || POST
router.post("/login", loginController);

// forgot passowrd || POST
router.post("/forgot-password", forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

// protected user route path
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})

// protected admin route path
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})


export default router