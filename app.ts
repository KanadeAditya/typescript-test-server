import express,{Request,Response} from "express"
import log from './logs'
import connect from './DB/connect'
import UserRouter from './controllers/users.routes'

require('dotenv').config()

const app = express();

//All Middlewares here

app.use(express.json());
app.use(express.urlencoded({extended:false}))


// All Routes are here 
app.use('/users',UserRouter)


app.get('/',(req : Request,res : Response)=>{
    res.send(`<h1>Server is working fine... </h1><h3>PORT :- ${process.env.port}<h3/>`)
})

app.listen(process.env.port,async ()=>{
    try {
        await connect
        console.log(`server is running on ${process.env.port}`)
    } catch (error : any) {
        log.info('DB-error',`${error.message}`)
    }
})