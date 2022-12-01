import {MongoClient} from 'mongodb';

async function connection() {
    let client: MongoClient;
    let uri = "mongodb+srv://bt-spotify-web:spotify@cluster0.njxfnkr.mongodb.net/?retryWrites=true&w=majority";

    client = new MongoClient(uri);  
    await client.connect();

    return client.db("spotify");
}

const db = {
    async insert(collection: string, data: object) {
        let db = await connection();
        return await db.collection(collection).insertOne(data);
    },
    async list(collection: string) {
        let db = await connection();
        return await db.collection(collection).find().toArray();
    },
    async get(collection: string, id: Number) {
        let db = await connection();
        return await db.collection(collection).findOne({id: id});
    },
    async search(collection: string, query: object) {
        let db = await connection();
        return await db.collection(collection).findOne(query);
    },
    async update(collection: string, id: Number, data: object) {
        let db = await connection();
        return await db.collection(collection).updateOne({id: id}, {$set: data});
    }
}

export default db;
