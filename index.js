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
    await resetdatabase();

    await insert();
    //select();
    //where();
    //raw();
    //del();
    //update();
    //orderby();
    //innerjoin();
    await transactions();
    await transactions2();
}

main();