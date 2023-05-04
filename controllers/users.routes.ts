import log from "../logs";
import { Router , Request , Response } from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import UserModel from '../models/user.model'

require('dotenv').config()

const UserRouter = Router();

UserRouter.get('/',(req:Request , res: Response)=>{
    try {
        res.send({msg:'User Routes Working Fine'})
    } catch (error) {
        log.error('User-Route-Error',error)
        res.send({msg:'Something Went Wrong',error})
    }
})

UserRouter.get('/all',async (req:Request , res: Response)=>{
    try {
        let allusers = await UserModel.find()
        res.send({msg:'Sucess',allusers})
    } catch (error) {
        log.error('User-Route-Error',error)
        res.send({msg:'Something Went Wrong',error})
    }
})

// Register User Route 
// POST /user/register

UserRouter.post('/register',async (req : Request , res : Response)=>{
    try {
        let user = new UserModel(req.body)
        await user.save()

        res.send({msg : "User Resgistered",user})
    } catch (error) {
        log.error('User-Route-Error',error)
        res.send({msg:'Something Went Wrong',error})
    }
})





export default UserRouter


