const express = require('express');
const app= express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendfile(path.join(__dirname+"/index.html"));
})
app.use("/",router);
app.listen(process.env.port ||5000);
console.log("Serve rodando");
