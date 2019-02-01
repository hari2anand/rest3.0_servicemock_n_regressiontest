module.exports = function(req){
    var reqDetails={
    baseURL: req.baseUrl,
    Path:req.path,
    hostname: req.hostname,
    method: req.method,
    Orgurl: req.originalUrl,
    ID:req.params.Id,
    protocol:req.protocol,
    port:req.PORT,    
    reqPrefix:req.protocol+"://"+req.hostname+(!req.PORT?"":":"+req.PORT),
    requrl: req.protocol+"://"+req.hostname+(!req.PORT?"":":"+req.PORT)+req.path,
    reqSelfurl:req.protocol+"://"+req.hostname+(!req.PORT?"":":"+req.PORT)+req.path,
    url:req.url
    }
return reqDetails;
};