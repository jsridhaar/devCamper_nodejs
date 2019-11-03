import Express from "express"
import DotEnv from "dotenv"
import Morgan from "morgan"
import Chalk from "chalk"

//Config files
import ConnectToDb from "../config/db_config"

//Middlewares Imports
import { 
    Middlewares
 } from "../middleware";

//Routes Imports
import {
    BootCampsRoutes
} from "../routes"


DotEnv.config({ path: "../config/config.env" })

ConnectToDb();
const app = Express()

//middlewares
app.use(Morgan('dev'))
app.use(Express.json())

//Routes
app.use('/api/v1/bootcamps', BootCampsRoutes)
app.use(Middlewares.ErrorHandler)

//Port Used
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(Chalk.black.bgWhite(`Server running successfully in ${process.env.NODE_ENV} and on port ${PORT}`))
})

//Crashing Server if any promise rejections occur
process.on('unhandledRejection', (err, promise) => {
    if(err){
        server.close(() => process.exit(1))
    }
})