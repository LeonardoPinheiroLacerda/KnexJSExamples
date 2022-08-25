const database = require('./../database');

async function run(){

    const orderByPromise = database
        .select()
        .table('games')
        .orderBy('price', 'asc');

    console.log(orderByPromise.toQuery());

    const games = await orderByPromise;
    console.log(games);

}

module.exports = run;