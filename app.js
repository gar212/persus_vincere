var express     = require("express"),
    app         = express();

app.get ("/", function(req,res){
	res.render("index.ejs");
});

// Static folder
app.use(express.static(__dirname + "/public"));

// app.listen(3000, () => {
//   console.log('Persus Vincere listening on port 3000!');
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Persus Vincere Server Has Started!");
});