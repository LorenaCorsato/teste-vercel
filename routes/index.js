const express = require('express'); 
const router = express.Router();


//Mostrar a index.ejs
router .get('/' ,  (req, res) => {
 res.render("base", { 
 title:"Home",
 view: "index" 
 });
});

module.exports = router;