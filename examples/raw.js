const database = require('./../database');

function run() {
    const rawPromise = database.raw('SELECT * FROM GAMES ORDER BY id DESC');

    console.log(rawPromise.toQuery());

    rawPromise
        .then(data => {
            console.log(data);      //Objeto contendo informações sobre as colunas e outros metadados
            console.log(data.rows)  //Objeto contendo apenas o resultado da query
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = run;