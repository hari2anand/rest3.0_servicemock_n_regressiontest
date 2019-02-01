//'use strict';
//Run commands - node runTest --env Value
const app = require('./appTest');
var argv = require('minimist')(process.argv.slice(2));

if (argv.env) 
{go(argv.env)}
else
{go('LOC')}
;

async function go(env) {
    const opts = {
        insecure: true,
        bail: false,
        reporters: 'cli'
    };
    await app.run(env, opts);
}

module.exports.run = app.run;