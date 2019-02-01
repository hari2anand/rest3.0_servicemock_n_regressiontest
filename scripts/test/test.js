const app = require('./operations/appTest');
require('newman-reporter-html')
var env= "GCP";

var test={
    test:async function(req, res, next){

        if(req.hostname == "localhost"){env= 'LOC'};
        glb_TestReport='GCP'
        await go(env, '');
        res.send(glb_TestReport);
    }
}

async function go(env, fileLoc) {
    const opts = {
        insecure: true,
        bail: false,
        reporters: 'html',
        reporter: { 'html': {'export': fileLoc} }
    };
    await app.run(env, opts);
}

module.exports=test;