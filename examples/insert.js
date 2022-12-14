const database = require('./../database');

async function run(){

    const data = [
        {
            name: 'Call of duty modern warfare',
            price: 40
        },
        {
            name: 'The last of us part II',
            price: 200
        },
        {
            name: 'Valorant',
            price: 0
        },
        {
            name: 'GTA V',
            price: 40
        }
    ]
    //returning é opcional
    const insertPromise = database
        .insert(data)
        .into('games')
        .returning(
            ['id', 'name', 'price']
        );
    
    console.log(insertPromise.toQuery());

    const games = await insertPromise;   
    console.log(games);
    const studios = await insertStudio();
    console.log(studios);
    const gamesStudios = await insertGameStudio();
    console.log(gamesStudios);

}

function insertStudio() {
    const studioData = [
        {
            name: 'Activision'
        },
        {
            name: 'Riot'
        },
        {
            name: 'Rockstar'
        },
        {
            name: 'Rockstar North'
        },
        {
            name: 'Naughty Dog'
        }
    ];

    const insertStudioPromise = database
        .insert(studioData)
        .into('studios')
        .returning(['id', 'name']);

    console.log(insertStudioPromise.toQuery());

    return insertStudioPromise;
}

function insertGameStudio(){
    const data = [
        {
            game_id: 1,
            studio_id: 1
        },
        {
            game_id: 2,
            studio_id: 5
        },
        {
            game_id: 3,
            studio_id: 2
        },
        {
            game_id: 4,
            studio_id: 3
        },
        {
            game_id: 4,
            studio_id: 4
        }
    ];

    const insertPromise = database
        .insert(data)
        .into('games_studios')
        .returning(['game_id', 'studio_id']);

    console.log(insertPromise.toQuery());

    return insertPromise;

}

module.exports = run;