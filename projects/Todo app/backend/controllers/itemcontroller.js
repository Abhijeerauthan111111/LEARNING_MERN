const Todoitem = require("../models/todoitem");

exports.posttodoitem =  async (req,res,next)=>{
    try {
        console.log(req.body)
        const todoitem = new Todoitem(req.body)  
        const item = await todoitem.save();
        res.json(item); 
    } 
    
    catch (error) {
       res.status(500).json({message: error})
    }
}

exports.gettodoitem = async(req,res,next)=>{
    
    try {
      const items =  await Todoitem.find();
      res.json(items);

    } catch (error) {
        res.status(500).json({message: error})
    }

}

exports.deletetodoitem = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const deleteditem = await Todoitem.findByIdAndDelete(id);
        res.json(deleteditem);

    } catch (error) {
        res.status(500).json({message: error})
    }

}

exports.updatetodoitem = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const updateditem = await Todoitem.findByIdAndUpdate(id,req.body,{new : true})
        res.json(updateditem);

    } catch (error) {
        res.status(500).json({message: error})
    }

} 