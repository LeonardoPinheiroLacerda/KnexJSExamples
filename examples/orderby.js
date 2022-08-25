const database = require('./../database');

function run(){

    const orderByPromise = database
        .select()
        .table('games')
        .orderBy('price', 'desc');

    console.log(orderByPromise.toQuery());

    orderByPromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

}

module.exports = run;