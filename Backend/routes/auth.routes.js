import express from 'express';
import { Login, logout, signUp } from '../controllers/auth.controller.js';

const authRouter=express.Router()

// For Signup
authRouter.post("/signup",signUp)

// For Login
authRouter.post("/login",Login)

// For Logout
authRouter.get("/logout",logout)
export default authRouter