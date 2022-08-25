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


    //Mapping all studios in a single array
    const innerjoinPromise2 = database
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
                'games.id' : 1
            }
        )

    console.log(innerjoinPromise2.toQuery());

    innerjoinPromise2
        .then(data => {
            const game = {
                id: data[0].id,
                name: data[0].name,
                price: data[0].price,
                studios: []
            }

            data.forEach(g => {
                game.studios.push({name: g.studio_name})
            });

            console.log(game);
        })
        .catch(err => {
            console.log(err);
        });

}

module.exports = run;