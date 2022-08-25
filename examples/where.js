const database = require('./../database');

async function run() {
    const wherePromise2 = database
        .select()
        .table('games')
        .where({name: 'Valorant'})
        .andWhere({id: 3});

    console.log(wherePromise2.toQuery());

    const games = await wherePromise2
    console.log(games);
}

module.exports = run;