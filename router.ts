
import { Router, Request, Response, NextFunction } from 'express';
//import { dbConnection } from './db';
const dbConnection = require('./db.ts');

const router = Router();

router.get("/api/clients", async (_req: Request, res: Response, next: NextFunction) => { 
    try {
        const db = await dbConnection.Get();
        let result = await db.collection("clients").find().toArray();
        console.log(result);
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.get("/api/rides", async (_req: Request, res: Response, next: NextFunction) => { 
    try {
        const db = await dbConnection.Get();
        let result = await db.collection("rides").find().toArray();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.get("/api/rides/:id", async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const db = await dbConnection.Get();
        let result = await db.collection("rides").find({ "id": "ride" + req.params.id }).toArray();
        res.status(result.length ? 200 : 204).send(result);
    } catch (error) {
        next(error);
    }
});

router.post("/api/rides/:id/:clientId/:pickup/:dropoff/:price", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let param = req.params;
        console.log(param);
        const db = await dbConnection.Get();

        let rideObj = {
            "id": "ride" + param.id,
            "clientId": "client" + param.clientId,
            "pickupLocation": param.pickup,
            "dropoffLocation": param.dropoff,
            "proposedPrice": param.price,
            "bids": []
        };

        await db.collection("rides").insertOne(rideObj);
        //let result = await db.collection("rides").insertOne(rideObj);
        //res.status(verify("rides", result.insertedId) ? 201 : 500);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
});

router.put("/api/rides/:id/bids/:fleet/:bidAmount", async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const db = await dbConnection.Get();
        let param = req.params;

        let result = await db.collection("rides").findOne({ "id": "ride" + req.params.id });

        let bid = {
            "id": "bid" + (result.bids.length + 1),
            "fleetId": "fleet" + param.fleet,
            "bidAmount": param.bidAmount
        };

        await db.collection("rides").updateOne(
            { "id": "ride" + param.id},
            {$push:{"bids":bid}}
        );

        res.send();
    } catch (error) {
        next(error);
    }
});

router.get("/api/fleets", async (_req: Request, res: Response, next: NextFunction) => { 
    try {
        const db = await dbConnection.Get();
        let result = await db.collection("fleets").find().toArray();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

//import { ObjectId } from 'bson';
// async function verify(col: string, id: string): Promise<boolean> {
//     try {
//         const db = await dbConnection.Get();
//         let o_id = new ObjectId(id); 
//         let verifyResult = await db.collection(col).findOne({"_id": o_id});
//         return !!verifyResult;
//     } catch (error) {
//         console.error("Error verifying:", error);
//         return false;
//     }
// }
