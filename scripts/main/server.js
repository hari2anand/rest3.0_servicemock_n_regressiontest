process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require ('./utilities/global');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hateoasLinker = require('express-hateoas-links');

const app = express();

app.use(hateoasLinker);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/test/', (req, res) => {
  res.send('Hello from Service Mocks Generator and Service Test Trigger Tool!');
});

//External app calling POC

app.get('/submit-email', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/form.html'));
});

const sendeMail = require('./operations/emailOprn')

app.route('/submitemail-client1').post(sendeMail.client1);
app.route('/submitemail-client2').post(sendeMail.client2);
app.route('/submit-app').post(sendeMail.client3);

//Mock Routes

app.get('/test/mockapis/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/MockAPI_trigger.html'));
});

//Mock Response Generator
const mockResp= require('./operations/responsePicker');

app.route('/:version/:testParam/getScenario').get(mockResp.getResp);
app.route('/:version/:testParam/getAll').get(mockResp.getAllResp);
app.route('/:version/:testParam/postScenario').post(mockResp.postResp);
app.route('/:version/:testParam/patchScenario').patch(mockResp.patchResp);
app.route('/:version/:testParam/Reset').delete(mockResp.deleteResp);

//API-TestTrigger

const apiTest= require('../test/test');
app.route('/apitest/trigger').get(apiTest.test);

//Error Handlers

app.get('*', function(req, res){
  res.status(404).json({"Error":"Request not found"+req.path});
});
app.post('*', function(req, res){
  res.status(201).header({'X-Powered-By':'Harish Mock app'})
  res.status(404).json({"Error":"Request not found"+req.path});
});
app.put('*', function(req, res){
  res.status(404).json({"Error":"Request not found"+req.path});
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({"Error":"Oops Something Broke!!"})
})


// Listen to the App Engine-specified port, or 8084 otherwise
const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


/*
// For two app servers running on same app listening at two ports

const appConnTest = express();
const PORT2 = 8094;
appConnTest.use(bodyParser.urlencoded({ extended: true }));
appConnTest.use(bodyParser.json());

appConnTest.get('/test/', (req, res) => {
  res.send('Hello from server2');
});

appConnTest.listen(PORT2, () => {
  console.log(`Server2 listening on port ${PORT2}...`);
});

*/