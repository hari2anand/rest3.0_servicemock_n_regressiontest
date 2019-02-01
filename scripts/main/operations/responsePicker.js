const path = require('path');

var mergeRespLink=require('../utilities/mergeRespLink')
const resplnks= require('../utilities/getLinks')


var Resplnk=resplnks.samplelnk;
var RespListlnk=resplnks.samplelnk2;

var responseSample = require('../../../resources/schemas/TestSchema');
var checkoutContext = checkoutContextSample.checkout;

var checkout = {
  postResp: function(req, res, next)
  {
    console.log('Mocking POST');
    if (req.path.match('^\/*..*ErrorTest'))//Sample for diff scenario mocking
    {
      res.status(500);
      res.json({"Error":"Simulated Error- Resetting Cache"});
      console.log("Simulated Error- Resetting Cache");
      ID="";
      reqDetails={};
      sampletCntxt={};
      sampletCntxtRespList=[];
    } 
    else if (req.body.Initalize_Checkout_Payload == "error"||req.body == "error")//Sample for diff scenario mocking
    {
      res.json({"Error":"error"});
     }
     else if (req.body.Test_Payload == '')//Sample for diff scenario mocking
     {
       res.status(400);
       res.json({"Error":"Simulated Error- Resetting Checkout Get Cache"});
       console.log("Simulated Error- Resetting Checkout Get Cache");
     }     
     else 
     {
      !req.body.PostHTMLPayload? Object.assign(glb_sampletCntxt,req.body):glb_sampletCntxt=JSON.parse(req.body.PostHTMLPayload);

      reqDetails= require("./requestDetails")(req);
      reqDetails.ID="56789";
      reqDetails.requrl=reqDetails.requrl+reqDetails.ID;

      glb_sampletCntxt_respLink= Resplnk(reqDetails);

      var resp = mergeRespLink(clone.JSON(sampletCntxt),checkoutlnk(reqDetails));
      glb_sampletCntxtRespList.push(resp);

      res.json(glb_sampletCntxt,glb_sampletCntxt_respLink);
      }
    },
    patchResp: function(req, res, next)
    {
      console.log('Mocking PATCH');
      //!req.body.PostHTMLPayload? Object.assign(glb_sampletCntxt,req.body):glb_sampletCntxt=JSON.parse(req.body.PostHTMLPayload);

      reqDetails= require("./requestDetails")(req);
      reqDetails.ID="12134";
      reqDetails.requrl=reqDetails.requrl+reqDetails.ID;

      glb_sampletCntxt_respLink= Resplnk(reqDetails);

      var resp = mergeRespLink(clone.JSON(sampletCntxt),checkoutlnk(reqDetails));
      glb_sampletCntxtRespList.push(resp);

      res.json(sampletCntxt,glb_sampletCntxt_respLink);
    },
    deleteResp: function(req, res)
    {
      console.log('Mocking DELETE/Full Reset');
      res.status(500);
      res.json({"Error":"Simulated Error- Resetting Cache"});
      console.log("Simulated Error- Resetting Cache");
      ID="";
      reqDetails={};
      sampletCntxt={};
      sampletCntxtRespList=[];
      //if (req.path.match(/^\/*..*Reset*/g))//example for diff scenario mocking
    },

    getResp: function(req, res, next)
    {
      console.log('Mocking GET');
      reqDetails= require("./requestDetails")(req);

      if (typeof(glb_sampletCntxt_respLink) === "object"){
        glb_sampletCntxt_respLink;
      }
      else{
        glb_sampletCntxt_respLink= Resplnk(reqDetails);
      }

      res.json(((typeof(glb_sampletCntxt.Id) == "undefined")?responseSample:glb_sampletCntxt),glb_sampletCntxt_respLink);
    },

    getAllResp: function(req, res, next) {
      console.log('GET All Posted');
      reqDetails= require("./requestDetails")(req);
      res.json((glb_sampletCntxtRespList.length<=0?{_embedded:[{'Sample': responseSample, 'links': Resplnk(reqDetails)}]}:{_embedded:glb_sampletCntxtRespList}), Resplnk(reqDetails));
    }
  };
  module.exports=checkout;