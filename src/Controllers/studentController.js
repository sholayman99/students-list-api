/**
 * Author:MD Sholayman
 * Description:This is the file that contains the functions for the Student List Api.
 * Date:02 October 2023
 */
const StudentModel = require("../Models/studentModel")

//inserting document in students collection.

exports.createStudents= async(req,res)=>{
    try {
       const data = req.body;
       const result = await StudentModel.create(data);
       res.status(201).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}

//finding all the students from students collection.

exports.readStudents= async(req,res)=>{
    try {
       const result = await StudentModel.find({});
       res.status(200).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}

//finding a single student by id

exports.readStudentById= async(req,res)=>{
    try {
       const id = req.params.id; 
       const result = await StudentModel.find({_id:id});
       res.status(200).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}

//updating a single student by id.

exports.updateStudentById= async(req,res)=>{
    try {
       const id = req.params.id; 
       const data = req.body;
       const result = await StudentModel.updateOne({_id:id},data,{upsert:true});
       res.status(201).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}

//deleting a single student from student collection.

exports.deleteStudentById= async(req,res)=>{
    try {
       const id = req.params.id; 
       const result = await StudentModel.deleteOne({_id:id});
       res.status(200).json({status:"success",data:result}); 
    } catch (error) {
        res.status(400).json({status:"error",data:error})
    }
}