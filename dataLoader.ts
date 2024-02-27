// import { MongoClient } from 'mongodb';

const dbConnection = require('./db.ts');

function dataRepo(){
    function loadData(data, collection){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await dbConnection.Get();
                let results = await db.collection(collection).insertMany(data);
                console.log(results.insertedCount)
                resolve(results);
            } catch (error) {
                reject(error)
            }
        })
    }
    return { loadData }
}

module.exports = dataRepo();