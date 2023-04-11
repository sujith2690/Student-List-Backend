const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type:String,
  },
  class: {
    type:String,
  },
  studentId: {
    type:String,
  },
  section: {
    type:String,
  },
  rollNo: {
    type:String,
  },
  dob: Date,
});
const studentModel = mongoose.model('students',studentSchema)
module.exports =  studentModel
