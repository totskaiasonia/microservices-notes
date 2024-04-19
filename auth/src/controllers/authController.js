import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

function generateToken(user) {
    const payload = {
        role: user.role,
    };

    const secretKey = process.env.JWT_PHRASE;

    return jwt.sign(
        payload,
        secretKey || "secret phrase",
        {
            expiresIn: '30d',
        }
    );
}
async function generateHash(password) {
    console.log(password);
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
}

export const register = async (req, res) => {
    try {
        const {password, email, role} = req.body;

        const hash = await generateHash(password);

        const userDoc = await UserModel.create({email, passwordHash: hash, role});

        const token = generateToken(userDoc);

        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to register"});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userDoc = await UserModel.findOne({email});
        if (!userDoc || !(await bcrypt.compare(password, userDoc.passwordHash)))
            return res.status(404).json({msg: "Auth failed"});

        const token = generateToken(userDoc);

        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to register"});
    }
}