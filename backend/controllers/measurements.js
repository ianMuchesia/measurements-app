const getAllMeasurements = async(req , res)=>{
    res.send('getAllMeasurements user')
}

const getSingleMeasurement = async(req , res)=>{
    res.send('getSingleMeasurement user')
}



const createMeasurements = async(req , res)=>{
    res.send('createMeasurements user')
}

const deleteMeasurement = async(req , res)=>{
    res.send('deleteMeasurement user')
}

const updateMeasurements = async(req , res)=>{
    res.send('updateMeasurements user')
}




module.exports = {
    getAllMeasurements,
    getSingleMeasurement, createMeasurements, deleteMeasurement,
     updateMeasurements
}