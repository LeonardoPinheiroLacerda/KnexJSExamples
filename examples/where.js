const database = require('./../database');

function run() {
    const wherePromise = database
        .select()
        .table('games')
        .where({name: 'Valorant'});

    console.log(wherePromise.toQuery());

    wherePromise
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        });

    const wherePromise2 = database
        .select()
        .table('games')
        .where({name: 'Valorant'})
        .andWhere({id: 15});

    console.log(wherePromise2.toQuery());

    wherePromise2
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = run;