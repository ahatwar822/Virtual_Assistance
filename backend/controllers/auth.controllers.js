import { genToken } from "../config/gentoken.js";
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'

const registerController = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const userExists = await userModel.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hasshPass = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hasshPass
        })

        const token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "strict",
            secure: false
        })

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user
        })
        
    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false
        })
    }
}

const logincontroller = async (req, res) => {
    try {

        const { email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "strict",
            secure: false
        })

        return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false
        })
    }
}

const logoutController = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            message: "User logged out successfully",
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
            success: false
        })
    }
}

export { registerController, logincontroller, logoutController };