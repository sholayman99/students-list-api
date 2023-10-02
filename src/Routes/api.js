const express = require('express');
const { createStudents, readStudents, readStudentById } = require('../Controllers/studentController');

const router = express.Router();



router.post("/insertStudent" , createStudents);
router.get("/findStudent", readStudents)
router.get("/findStudent/:id" , readStudentById)




module.exports= router;