
export const updateChildInfo =(req,res) =>{
    console.log(req.body);
    console.log(req.params);
    res.status(200).json(req.body);
}