const app = require('./operations/appTest');
const path = require('path');

require('newman-reporter-html')
var env= "GCP",
glb_TestReport='GCP';

var test={
    test:async function(req, res, next){

        if(req.hostname == "localhost")
        {env= 'LOC';
        glb_TestReport= (path.join(__dirname, '../../reports/report.html'))
    };
        await go(env,glb_TestReport);
        res.sendFile(glb_TestReport);
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