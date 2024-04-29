const app=require('./index');
const dbfunc = require('./database/mongodb');

const PORT=5454;
app.listen(PORT, async()=>{
    await dbfunc();
    console.log("api listenning at: ",PORT);
})