const database = require('./../database');

function run(){
    const selectPromise = database
        .select()
        .table('games');
    
    console.log(selectPromise.toQuery());

    selectPromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });


    const selectPromise2 = database
        .select(['id', 'name'])
        .table('games');
    
    console.log(selectPromise2.toQuery());

    selectPromise2
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        })

}

module.exports = run;