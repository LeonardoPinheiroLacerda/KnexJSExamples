const database = require('./../database');

function run(){
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

    insertPromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });    
}

module.exports = run;