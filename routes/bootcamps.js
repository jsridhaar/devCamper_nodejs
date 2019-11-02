import Express from "express"
const Router = Express.Router()

import {
    GetBootCamps,
    PostBootCamps,
    UpdateBootCamps,
    DeleteBootCamps,
    GetBootCampsById
} from "../controllers/bootcamps"

Router
    .route('/')
    .get(GetBootCamps)
    .post(PostBootCamps)

Router
    .route('/:id')
    .get(GetBootCampsById)
    .put(UpdateBootCamps)
    .delete(DeleteBootCamps)

module.exports = Router;