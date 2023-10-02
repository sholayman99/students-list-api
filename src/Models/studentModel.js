const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    studentName:{type: String},
    Num:{type:String, 
    validate:{
    validator:function(value){
        return /^(?:\+?88|0088)?01[15-9]\d{8}$/.test(value)
    },
    message:` This is not a valid Number`
}
},
    No:{type:String,
    validate:{
       validator:function(value){
        if(value.length === 11){
            return true;
        }else{
            return false;
        }

       },
    message:"Invalid Number"
    }}
    
},
{timestamps:true, versionKey:false}
);

const StudentModel = mongoose.model("students",DataSchema)
module.exports = StudentModel ;