import { addTransaction,getAllTransaction} from "../controllers/transactionController.js";
import express from 'express';

export const router = express.Router();
// const { addTransaction } = require('../controllers/transactionController');
// const { getAllTransaction } =require('../controllers/transactionController')
 router.post('/add-transaction',addTransaction)

 router.get("/get-transaction",getAllTransaction)


