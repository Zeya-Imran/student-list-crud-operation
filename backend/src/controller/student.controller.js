import Student from "../model/student.schema.js";

//get request
const get = async(req,res) => {
    try {
        const data = await Student.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'data not found'})
    }

}
//post resquest
const post = async (req, res) => {
  try {
    const student = new Student(req.body);
    const ress = await student.save();
    res.status(200).json(ress);
  } catch (error) {
    console.log(error);
  }
};


//put request
const put = async (req,res) => {
 try {
    const ress = await Student.updateOne({_id:req.params.id},req.body);
    res.status(200).json(ress);
 } catch (error) {
    console.log(error);
    res.status(500).json({message:'something went wrong'})
 }
}

const remove = async (req,res) =>{
    try {
        const ress = await Student.deleteOne({_id:req.params.id});
        res.status(200).json(ress);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'something went wrong'})
    }
}

export {
    get,
    post,
    put,
    remove
}