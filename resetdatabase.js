const database = require('./database');
const fs = require('fs');

function run(){

    const sql = fs.readFileSync('./sql/script.sql', {encoding: 'utf-8'});

    const dropCreatePromise = database.raw(sql);
    
    console.log(dropCreatePromise.toQuery());
    
    dropCreatePromise
        .then(data => {})
        .catch(err => {
            console.log('err: ' + err);
        });

}

module.exports = run;