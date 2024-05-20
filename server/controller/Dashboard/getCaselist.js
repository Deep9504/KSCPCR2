import {dbGetCaseList} from '../../dbOperation/dbOperation.js';
export const getCaseList =(req,res) =>{
    dbGetCaseList((error,result)=>{
        if(error){
            res.status(500).json("Server Error");
            return;
        }
        res.status(200).json(result.recordset);
    })
}