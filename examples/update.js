const database = require('../database');

function run(){

    const updatePromise = database
        .update({price: 10})
        .table('games')
        .where({id: 19});

    console.log(updatePromise.toQuery());

    updatePromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

}

module.exports = run;