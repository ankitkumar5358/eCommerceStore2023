import userModel from "../models/userModel.js";
import hashPassword, { comparePassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validation
        if (!name) {
            return res.send({ error: 'Name is required' });
        }
        if (!email) {
            return res.send({ error: 'Email is required' });
        }
        if (!password) {
            return res.send({ error: 'Password is required' });
        }
        if (!phone) {
            return res.send({ error: 'Phone is required' });
        }
        if (!address) {
            return res.send({ error: 'Address is required' });
        }

        // Check user
        const existingUser = await userModel.findOne({ email });

        // Existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Registered. Please Login.',
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);

        // Save user
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        });
        await user.save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user,
        });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error,
        });
    }
};

// POST LOGIN
export const loginController = async (req, res) => {
    try {
        const [email, password] = req.body;
        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({ email });
        // 1:10:00
        const match = await comparePassword(password, user.password)
    }
    catch (error) {
        console.log('Error', error);
        res.send(500).send({
            success: false,
            message: "Error Login",
        })
    }
}
