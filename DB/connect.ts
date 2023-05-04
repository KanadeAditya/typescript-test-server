import mongoose from 'mongoose'
import log from '../logs'
require('dotenv').config()

// function connect (){
const dbURL:string = `${process.env.mongo}`
// console.log(dbURL)

const connect =  mongoose.connect(dbURL)
    // .then(()=>{
    //     log.info(`Database is connected ...`)
    // })
    // .catch((err)=>{
    //     log.error('db-error',err)
    //     process.exit(1)
    // })
// }

export default connect