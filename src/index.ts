import express  from "express"

import Cors from 'cors'

import http from 'http'
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Notification } from "./entities/Notification" 
import { Issue } from "./entities/Issue"
import { Counter } from "./entities/Counter"
import { Cuser } from "./entities/CUser"

const app = express()

const server = http.createServer(app)

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "queuedb",
    entities: [User,Notification,Issue,Counter,Cuser],
    synchronize: true,
    logging: false,
})

 //middleware
 app.use(express.json())
 app.use(Cors())



   
//initialize
AppDataSource.initialize()
.then(() => {
  console.log('db connected')
  
})

.catch((error) => console.log(error))


server.listen(8000, ()=>{
      
    console.log('app runing on server 8000')
   })