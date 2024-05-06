const mongoose = require("mongoose");

// const mongodbURL = 'mongodb+srv://samaponghosh2002:DbDaA3wtgPQhWfaC@samsoul.9nu48pl.mongodb.net/samkartdb?retryWrites=true&w=majority&appName=SAMsoul'
const mongodbURL = 'mongodb+srv://samaponghosh2002:Abcd1234@samsoul.9nu48pl.mongodb.net/techbusters?retryWrites=true&w=majority&appName=SAMsoul'
const dbfunc=()=>{
    return mongoose.connect(mongodbURL);
}

module.exports={dbfunc}