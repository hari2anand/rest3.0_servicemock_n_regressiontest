const path = require('path');
const newman = require('../../newman/index');
const environments = ['LOC', 'GCP'];

 module.exports.run = (env, opts) => {
    if (environments.indexOf(env) === -1) throw new Error('Could not find environment', env);
    if (opts === undefined || typeof opts !== 'object') opts = {};

    opts.collection = path.join(__dirname, '../../resources/postman/CheckoutAPIs.postman_collection.json');
    //opts.globals = path.join(__dirname, '../Data/Global/PayOrder.postman_globals.json');

    if (env === 'LOC') {
        opts.environment = path.join(__dirname, '../../resources/postman/Env/Local.postman_environment.json');        
    } else if (env === 'GCP') {
        opts.environment = path.join(__dirname, '../../resources/postman/Env/GCP.postman_environment.json');    
    } else {
        throw new Error('No configuration set for environment', env);
    }

    return new Promise((resolve, reject) => {
       newman.run(opts, (err, summary) => {
            if (err) reject(err);
            resolve(summary);
        });
    });
};