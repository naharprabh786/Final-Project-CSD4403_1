var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.delete('/api/deleteemployees', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("JaiHoSales");
  var myquery = { Last_name: "Rhoades" };
  dbo.collection("Employees").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
	res.send("1 document deleted");
    db.close();
  });
});
});


var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));