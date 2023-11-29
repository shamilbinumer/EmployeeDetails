import schema from './employi.model.js'
export async function addData(req,res){
    const {Empid,Name,Email,PhNumber,Address,Designation,Sallery,Expirience,Photo}=req.body
    res.status(201).send(schema.create({Empid,Name,Email,PhNumber,Address,Designation,Sallery,Expirience,Photo}));
}

export async function getData(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}
export async function getfullData(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export function delEmployee(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editEmployee(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}