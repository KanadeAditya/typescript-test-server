import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { string } from "yup";
import { version } from "process";
import log from "../logs";
require('dotenv').config()

interface IUser extends mongoose.Document{
    email : string;
    name : string ; 
    password : string ; 
    createdAt : Date ;
    updatedAt : Date ; 
    // comparePassword(candidatePassword : string) : Promise<boolean> ; 
}

const UserSchema = new mongoose.Schema(
    {
        email : {type : String , required : true , unique : true },
        name : {type : String , required : true},
        password : {type : String , required : true}
    },
    {
        timestamps : true
    }
)


//Used in logging in 
// UserSchema.methods.comparePassword = async function (
//     candidatePassword : string
// ){
//     const user = this as IUser

//     return bcrypt.compare(candidatePassword,user.password).catch((err)=>{
//         log.info('password-bcrypt-error',err)
//         return false
//     })
// }

const UserModel = mongoose.model<IUser>('user',UserSchema);

export default UserModel