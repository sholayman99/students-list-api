const express = require('express');
const { createStudents, readStudents, readStudentById, updateStudentById, deleteStudentById } = require('../Controllers/studentController');

const router = express.Router();



router.post("/insertStudent" , createStudents);
router.get("/findStudent", readStudents);
router.get("/findStudent/:id" , readStudentById);
router.put("/updateStudent/:id", updateStudentById);
router.delete("/deleteStudent/:id", deleteStudentById);




module.exports= router;