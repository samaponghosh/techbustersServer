const { app } =require('.');
require('dotenv').config()
const {dbfunc} = require('./database/mongodb');

const PORT=process.env.PORT || 5400;
app.listen(PORT, async()=>{
    await dbfunc();
    console.log("api listenning at: ",PORT);
})
