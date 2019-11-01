const Express = require('express')
const Router = Express.Router()

import {
    GetBootCamps,
    PostBootCamps,
    UpdateBootCamps,
    DeleteBootCamps
} from "../controllers/bootcamps"

Router
    .route('/')
    .get(GetBootCamps)
    .post(PostBootCamps)

Router
    .route('/:id')
    .put(UpdateBootCamps)
    .delete(DeleteBootCamps)

module.exports = Router;