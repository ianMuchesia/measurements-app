const {mongoose } = require("mongoose")


const Schema = mongoose.Schema


const measurementSchema = new Schema ({
    title:{
        type: String,
        required:[true, 'title is required']

    },
    radius:{
        type: Number,
        required: [true ,'radius is required']
    },
    coneHeight:{
        type: Number,
        required: [true ,'cone height is required']
    },
    cylinderHeight:{
        type: Number,
        required: [true ,'cylinder height is required']
    },
    numberOfCylinders:{
        type: Number,
        required: [true ,'number of cylinders is required']
    },
    surfaceArea:{
        type: Number,
        required: [true ,'surfaceArea is required']
    },
    volume:{
        type: Number,
        required: [true ,'volume is required'] 
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
},{timestamps:true})


const Measurement = mongoose.model("Measurement", measurementSchema)


module.exports = Measurement