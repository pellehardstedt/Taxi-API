//import { MongoClient } from 'mongodb';
let MongoClient = require('mongodb').MongoClient;

const dataHandler = require('./dataLoader.ts');
const data = require('./data.ts');

async function main() {
    await dataHandler.loadData(data.clientsData, "clients");
    await dataHandler.loadData(data.fleetsData, "fleets");
    await dataHandler.loadData(data.ridesData, "rides");
}

main();
