const database = require('./database');
const fs = require('fs');

async function run(){

    const sql = fs.readFileSync('./sql/script.sql', {encoding: 'utf-8'});

    const dropCreatePromise = database.raw(sql);
    
    console.log(dropCreatePromise.toQuery());
    
    return dropCreatePromise;
}

module.exports = run;