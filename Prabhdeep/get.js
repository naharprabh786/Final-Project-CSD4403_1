var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/api/mydelivery/:city', (req, res) => {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("JaiHoSales");
	  dbo.collection("Orders").find({}).toArray(function(err, result) {
		if (err) throw err;
		var Delivery = result.find(c => c.city === req.params.city);
		if (!Delivery) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Please try again!!!!</h2>');
		console.log(result);
		res.send(Delivery);
		db.close();
	  });
	});
});

var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));