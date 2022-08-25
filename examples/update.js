const database = require('../database');

async function run() {

    const updatePromise = database
        .update({ price: 35 })
        .table('games')
        .where({ id: 4 });

    console.log(updatePromise.toQuery());

    const updatedRecords = await updatePromise;
    console.log('Foi atualizado ' + updatedRecords + ' jogo.');

}

module.exports = run;