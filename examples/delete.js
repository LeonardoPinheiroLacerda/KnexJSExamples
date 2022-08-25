const database = require('./../database');

async function run(){

    const deletePromise = database
        .delete()
        .table('games')
        .where({id: 1});

    console.log(deletePromise.toQuery());

    const deletedRecords = await deletePromise;
    console.log('Foi deletado ' + deletedRecords + ' game.');

}

module.exports = run;