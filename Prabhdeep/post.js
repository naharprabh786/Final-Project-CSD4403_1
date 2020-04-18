var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.post('/api/insertcustomers', (req, res) => {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("JaiHoSales");
	  var myobj={Customer_id:16100,First_name:"Shivam",Last_name:"Ahlawat"};
	  dbo.collection("Customers").insertOne(myobj, function(err, result) {
		if (err) throw err;
		
		console.log("1 document inserted");
		res.send(result);
		db.close();
	  });
	});
});


var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));