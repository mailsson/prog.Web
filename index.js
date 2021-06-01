const express = require('express');
const app= express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendfile(path.join(__dirname+"/index.html"));
})
app.use("/",router);
aapp.listen(process.env.PORT || 5000, function()    {console.log("Servidor rodando com Express")});
