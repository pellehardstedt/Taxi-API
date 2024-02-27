// let MongoClient = require('mongodb').MongoClient;
import { MongoClient } from 'mongodb';

export const dbConnection = function () {

    let db = null;
    let instance = 0;

    async function dbConnect() {
        try {
            let dbName :string = "taxi";
            let url :string = 'mongodb://localhost:27017/';
            let _db = await MongoClient.connect(url+dbName);
            
            return _db.db(dbName);
        } catch (e) {
            return e;
        }
    }

    async function Get() {
        try {
            instance++;    
            //console.log('DbConnection called '+ instance + ' times');

            if (db != null) {
                //console.log('DB is already connected');
                return db;
            } else {
                //console.log('Getting DB connection');
                db = await dbConnect();
                return db; 
            }
        } catch (error) {
            return error;
        }
    }

    return {
        Get: Get
    }
}

module.exports = dbConnection();
