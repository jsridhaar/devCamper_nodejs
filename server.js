const express = require("express");
const dotEnv = require("dotenv");

const app = express()

dotEnv.config({ path: "./config/config.env" })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running successfully in ${process.env.NODE_ENV} and on port ${PORT}`)
})