export const GetBootCamps = (req, res, next) => {
    res.status(200).json({message : "Get Request Executed Successfully"})
}

export const PostBootCamps = (req, res, next) => {
    res.status(200).json({message : "Post Request Executed Successfully"})
}

export const UpdateBootCamps = (req, res, next) => {
    res.status(200).json({message : `Put Request Executed Successfully on Id ${req.params.id}`})
}

export const DeleteBootCamps = (req, res, next) => {
    res.status(200).json({message : `Delete Request Executed Successfully on Id ${req.params.id}`})
}