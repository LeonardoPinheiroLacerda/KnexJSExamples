const database = require('./../database');

async function run() {

    const innerjoinPromise = database
        .select(
            [
                'games.*',
                'studios.name as studio_name'
            ]
        )
        .table('games')
        .innerJoin(
            'games_studios',            //table
            'games_studios.game_id',    //column A
            'games.id'                  //column B
        )
        .innerJoin(
            'studios',                  //table
            'games_studios.studio_id',  //column A
            'studios.id'                //column B
        )
        .where(
            {
                'games.id': 4
            }
        );

    console.log(innerjoinPromise.toQuery());

    const objs = await innerjoinPromise;
    console.log(objs);

}

module.exports = run;