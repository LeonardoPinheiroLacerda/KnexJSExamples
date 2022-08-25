const database = require('./../database');

async function run(){

    const selectPromise2 = database
        .select(['id', 'name']) //Se não houver argumentos serão listados todos os campos
        .table('games');
    
    console.log(selectPromise2.toQuery());

    const games = await selectPromise2;
    console.log(games);
}

module.exports = run;