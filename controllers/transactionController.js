// const { add_transaction } = require("../services/transaction-operations.js");
// const { add_transaction } = require("../services/transaction-operations.js");
import {add_transaction,get_transaction} from "../services/transaction-operations.js";

 export const getAllTransaction = async(req,res)=>{
    try{
        const doc = req.body;
        const newTransaction =await get_transaction(doc);
        if(newTransaction && newTransaction._id){
            res.status(201).send(' get Transaction:'+ newTransaction)
        }
        await newTransaction.save();
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};


export const addTransaction = async(req,res) => {
    try{
        const doc = req.body;
        const newTransaction = await add_transaction(doc);
        if (newTransaction && newTransaction._id) {
            res.status(201).send('Transaction Created:'+ newTransaction)
        }
        await newTransaction.save();
    }catch(error){
       console.log(error)
       res.status(500).json(error);
    }
}
// module.exports={getAllTransaction,addTransaction};