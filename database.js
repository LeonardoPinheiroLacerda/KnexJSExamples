const knex = require('knex').knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'knex',
        password: 'knex@passwd',
        database: 'knex'
    }
});

module.exports = knex;