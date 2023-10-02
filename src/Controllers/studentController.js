/**
 * Author:MD Sholayman
 * Description:This is the file that contains the functions for the Student List Api.
 * Date:02 October 2023
 */
const StudentModel = require("../Models/studentModel")

exports.createStudents= async(req,res)=>{
    try {
       const data = req.body;
       const result = await StudentModel.create(data);
       res.status(201).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}

exports.readStudents= async(req,res)=>{
    try {
       const result = await StudentModel.find({});
       res.status(200).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}
exports.readStudentById= async(req,res)=>{
    try {
       const id = req.params.id; 
       const result = await StudentModel.find({_id:id});
       res.status(200).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}