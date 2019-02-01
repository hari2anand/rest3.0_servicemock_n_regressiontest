/*Can be selected if need to connect to real client and if it uses xml
var fs = require('fs');
var parser = require('xml2json');
const request = require('request');
const parse = require('xml-parser');
const stringify = require('xml-stringify');*/


var mailID="test@gmail"
var omURL = 'https://testmailclient:port/path';



var sendeMail = {
	client1: function(req, res, next) {
	//var clientPayload= fs.readFileSync( './resources/testmail.xml');
	 //clientPayload= clientPayload.toString().replace("sampleReplace", req.body.Mailid );
	 var mailAttributes= {name: req.body.name,
	 Mailid: req.body.Mailid,
	 "Mail Client": omURL}
	 console.log(mailAttributes);
		/*
		var reqOptions = {
			uri: omURL,
			body: clientPayload,
			headers:{
				'X-Client-Id' : ClientID,
           		'X-Client-Secret' : ClinetSecret},
	  		method: 'POST'}
 		request(reqOptions,function (error, response, body){
			 try
			 {
				if (!response)
				{
					res.json({"Error":error});
				}
				else
				{
					console.log("Response Code: "+response.statusCode +" Response: "+ response.body);
					res.json({"Status": "Success", "test": response.body });
				}
			}
			catch(error)
			{res.json(!response.statusCode ? {"Error":error} : {"ErrorCode":response.statusCode, "Error": response.body});}}
		);*/
 	res.json({"Status": "Success from Client1", "Response":mailAttributes });
},
client2: function(req,res){
	var mailAttributes= {name: req.body.name,
		Mailid: req.body.Mailid,
		"Mail Client": omURL}
		console.log(mailAttributes);
		res.json({"Status": "Success from Client2", "Response":mailAttributes });
},
client3: function(req,res){
	console.log({
		name: req.body.name,
		Mailid: req.body.Mailid
	  });
	  res.send('Work in Progress!');
}
};


module.exports = sendeMail;