import {
    Schema,
    modelExport
} from "../constants/models_enum"

const BootCampsSchema = new Schema( {
    name : {
        type : String,
        required : true,
        unique : true,
        maxlength  : [50 , "Name cannot exceed more than 50 characters."]
    },
    Slug : {
        type : String
    },
    description : {
        type : String,
        required : true,
        maxlength : [500, "Description Cannor more than 500 Characters"]
    },
    website : {
        type : String,
    },
    phone : {
        type : String,
        maxlength : [20, "Please provide a valid phone number."]
    },
    email : {
        type : String,
        match : [/\S+@\S+\.\S+/,"Please provide a valid email Id."]
    },
    address : {
        type : String,
        required : true
    },
    location : {
        type : {
            type : String,
            enum : ['Point'],
        },
        coordinates : {
           type : [Number],
           index: "2dSpere" 
        },
        formattedAdress : String,
        street:String,
        city: String,
        state : String,
        zipCode : String,
        country : String
    },
    career : {
        type : [String],
        required : true,
        enum : [
            'Web Development',
            'App Development',
            'Ui/Ux Designer',
            'Data Scientist',
            'IoT Developer'
        ]
    },
    ratings : {
        type : Number,
        max : [10, "Please enter Value below 10"],
        min : [1, "Please Enter a minimum value of 1"]
    },
    photo : {
        type : String,
        default : 'no-photo.jpg'
    },
    averageCost : {
        type : Number
    },
    housing : {
        type : Boolean,
        default : false
    },
    jobAssistance : {
        type : Boolean,
        default : false
    },
    jobGurantee : {
        type : Boolean,
        default : false
    },
    date : {
        type : Date,
        default  :  Date.now()
    }
} )

export default modelExport('BootCamp', BootCampsSchema)