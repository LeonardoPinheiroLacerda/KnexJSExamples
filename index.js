const resetdatabase = require('./resetdatabase');

const insert = require('./examples/insert');
const select = require('./examples/select');
const where = require('./examples/where');
const raw = require('./examples/raw');
const del = require('./examples/delete');
const update = require('./examples/update');
const orderby = require('./examples/orderby');
const innerjoin = require('./examples/innerjoin');
const transactions = require('./examples/transaction');
const transactions2 = require('./examples/transaction2');

async function main() {
    //apaga todas as tabelas e as recriam.
    
    prinfExampleTitle('create tables');
    await resetdatabase();

    prinfExampleTitle('insert');
    await insert();

    prinfExampleTitle('select');
    await select();

    prinfExampleTitle('where');
    await where();

    prinfExampleTitle('raw');
    await raw();

    prinfExampleTitle('delete');
    await del();

    prinfExampleTitle('update');
    await update();

    prinfExampleTitle('order by');
    await orderby();

    prinfExampleTitle('inner join');
    await innerjoin();

    prinfExampleTitle('transactions');
    await transactions();

    prinfExampleTitle('transactions 2');
    await transactions2();
}

function prinfExampleTitle(title){
    console.log('-----------------------------------------------');
    console.log('--' + title + '--');
    console.log('-----------------------------------------------');
}

main();