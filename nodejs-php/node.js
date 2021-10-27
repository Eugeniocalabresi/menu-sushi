var express = require('express');
var app = express();

app.listen(5000,function(){
	console.log('Server is running on port 5000.');
});

app.get('',callName);

function callName( req, res ) {

	var spawn = require('child_process').spawn;
	var process = spawn('php',["./index.php"]);
	res.header('Access-Control-Allow-Origin', '*');
	process.stdout.on('data',function(data){
		res.send(data.toString());
	});

}