const database = require('./../database');

async function run() {

    const transaction = database.transaction(async trans => {
        await database
            .insert({name: 'Ubisoft'})
            .into('studios')
            .transacting(trans);

        await database
            .insert({name: 'Come2us'})
            .into('studios')
            .transacting(trans);

        await database
            .insert({name: 'CD Projekt RED'})
            .into('studios')
            .transacting(trans);     
    });
   
    await transaction;

}

module.exports = run;