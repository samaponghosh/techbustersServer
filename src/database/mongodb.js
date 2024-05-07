require('dotenv').config()
const mongoose = require("mongoose");

// const mongodbURL = 'mongodb+srv://samaponghosh2002:DbDaA3wtgPQhWfaC@samsoul.9nu48pl.mongodb.net/samkartdb?retryWrites=true&w=majority&appName=SAMsoul'
const mongodbURL = process.env.MONGODBURL
const dbfunc=()=>{
    return mongoose.connect(mongodbURL);
}

module.exports={dbfunc}