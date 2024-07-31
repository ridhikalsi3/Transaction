// const mongoose = require('mongoose');
import mongoose from "mongoose";
const possibleValues = ["income", "expense"];
const SchemaTypes = mongoose.SchemaTypes;

const transactionSchema = new mongoose.Schema({
    name: {
        type: SchemaTypes.String,
        required: true,
    },
    type: {
        type: SchemaTypes.String,
        required: true,
        enum: possibleValues,
    },
    amount: {
        type: SchemaTypes.Number,
        required: true,
    },
    date_time: {
        type: SchemaTypes.Date,
        required: true,
    },
    user_id: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'User'  // Assuming you have a User model
    },
    category_id: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'Category'  // Assuming you have a Category model
    },
});

export const Transaction = mongoose.model('Transaction', transactionSchema);
// module.exports = Transaction;
