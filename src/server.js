const { app } =require('.');
const {dbfunc} = require('./database/mongodb');

const PORT=5400;
app.listen(PORT, async()=>{
    await dbfunc();
    console.log("api listenning at: ",PORT);
})
