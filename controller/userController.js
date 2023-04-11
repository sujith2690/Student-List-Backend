const studentModel = require("../models/students");

exports.addStudent = async(req, res) => {
    console.log(req.body,'------req.body')
  try {
    const newStudent = new studentModel(req.body);
    console.log(newStudent,'------coming')
    const response = await newStudent.save();
    // console.log(response,'response')
    if (response) {
      res.status(201).json({ success: true ,student:response});
    }else{
        res.status(200).json({success:false})
    }
  } catch (err) {
    //handle err
    res.status(500).json(err);
  }
};

exports.studentsDetails = async(req, res) => {
  try {
    const allStudents = await studentModel.find({});
    console.log(allStudents,'----------allStudents')
    res.status(200).json(allStudents);
  } catch (err) {
    //handle err
    res.status(500).json(err);
  }
};
exports.deleteStudent = async(req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const student = await studentModel.findByIdAndDelete(id)
      res.status(200).json({success:true,message:'Deleted'})
    } catch (err) {
      //handle err
      res.status(500).json(err);
    }
  };

