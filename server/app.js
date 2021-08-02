// import
require('dotenv').config();
const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("uploads"));

// database connection