import Mongoose from "mongoose"
import Chalk from "chalk"

const ConnectDb = async () => {
    console.log("envvvv", process.env.PORT)
    await Mongoose.connect("mongodb://localhost:27017/devcamper_api", {
        useNewUrlParser: true,
        useFindAndModify : false,
        useCreateIndex : true
    }).then(() => {
        console.log(Chalk.black.bgGreen(`mongoDB Connected Successfully`))
    }).catch((error) => {
        console.log(Chalk.black.bgRed(`error occurred, ${error}`))
    })
}

export default ConnectDb