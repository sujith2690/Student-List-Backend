const express= require('express');
const { addStudent, studentsDetails, deleteStudent } = require('../controller/userController');
const router = express.Router()

router.post('/create',addStudent)
router.get('/students',studentsDetails)
router.delete('/delete/:id',deleteStudent)
module.exports=router;
