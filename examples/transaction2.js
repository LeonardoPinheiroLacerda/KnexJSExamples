const database = require('../database');

async function run() {

    const trans = await database.transaction();

    try {
        await database
            .insert({ name: 'Ubisoft' })
            .into('studios')
            .transacting(trans);

        await database
            .insert({ name: 'Come2us' })
            .into('studios')
            .transacting(trans);

        await database
            .insert({ name: 'CD Projekt RED' })
            .into('studios')
            .transacting(trans);

        trans.commit();
    } catch (err) {
        trans.rollback();
    }

}

module.exports = run;