import {
    BootCamp
} from "../models"


export const GetBootCamps = async (req, res, next) => {
    try{
        const BootCampObj = await BootCamp.find()
        res.status(200).json(BootCampObj)
    }catch(error){
        res.status(400).json({
            message : "Bad Request",
            error
        })
    }
}

export const GetBootCampsById = async (req, res, next) => {
    try {
        const BootCampObj = await BootCamp.findById(req.params.id)
        if(!BootCampObj){
            res.status(400).json({message : `No data Found for Id ${req.params.id}`})
            return
        }
        res.status(200).json(BootCampObj)
    }catch(error){
        res.status(400).json({message : "Bad Request", error})
    }
}


export const PostBootCamps = async (req, res, next) => {
    try{
        const BootCampObj = await BootCamp.create(req.body)
        res.status(200).json(BootCampObj)
    }catch(e){
        console.log(e)
        res.status(200).json({e})
    }
}


export const UpdateBootCamps = async (req, res, next) => {
    try{
        const BootCampObj = await BootCamp.findByIdAndUpdate(req.params.id)
        if(!BootCamp){
            res.status(400).json({message : `No data Found for Id ${req.params.id}`})
        }
        res.status(200).json(BootCampObj)
    }catch(error){
        res.status(400).json({message : "Bad Request", error})
    }
}

export const DeleteBootCamps = async (req, res, next) => {
    try{
        const BootCampObj = await BootCamp.findByIdAndDelete(req.params.id)
        if(!BootCampObj){
            res.status(400).json({message : `No Data Found for Id ${req.params.id}`})
        }
        res.status(400).json({BootCampObj})
    }catch(error){
        res.status(400).json({message : "Bad Request", error})
    }
}


