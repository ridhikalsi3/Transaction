// Requiring module
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose';
import { router } from './Routes/transactionRoutes.js';
// Creating express object
const app = express();

// app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/",router);
// Connect to MongoDB
mongoose.connect('mongodb+srv://ganeevkc05:xyced100g@cluster0.zoa0jli.mongodb.net/bucksDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = 2335;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})