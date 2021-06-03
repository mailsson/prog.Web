const express = require('express');
const app= express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
       res.render(path.join(__dirname+"/index.ejs"));
})
app.use("/",router);
app.listen(process.env.PORT || 5000, function(){    console.log("Servidor rodando com Express");});
