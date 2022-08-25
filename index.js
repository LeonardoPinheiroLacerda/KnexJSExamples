const resetdatabase = require('./resetdatabase');

const insert = require('./examples/insert');
const select = require('./examples/select');
const where = require('./examples/where');
const raw = require('./examples/raw');
const del = require('./examples/delete');
const update = require('./examples/update');
const orderby = require('./examples/orderby');
const innerjoin = require('./examples/innerjoin');

//apaga todas as tabelas e as recriam.
//resetdatabase();

//insert();
//select();
//where();
//raw();
//del();
//update();
//orderby();
innerjoin();