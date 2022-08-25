const database = require('./../database');

function run(){

    const deletePromise = database
        .delete()
        .table('games')
        .where({id: 20});

    console.log(deletePromise.toQuery());

    deletePromise
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

}

module.exports = run;