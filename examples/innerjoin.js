const database = require('./../database');

function run(){

    const innerjoinPromise = database
        .select(
            [
                'games.*',
                'studios.name as studio_name'
            ]
        )   
        .table('games')
        .innerJoin(
            'studios',          //table
            'studios.game_id',  //column A
            'games.id'          //column B
        )
        .where(
            {
                'studios.id' : 1
            }
        )

    console.log(innerjoinPromise.toQuery());

    innerjoinPromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

}

module.exports = run;