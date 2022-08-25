const database = require('./../database');

async function run() {
    const rawPromise = database.raw('SELECT * FROM GAMES ORDER BY id DESC');

    console.log(rawPromise.toQuery());

    const games = await rawPromise;
    console.log(games.rows);        
}

module.exports = run;