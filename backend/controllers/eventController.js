import { connectDB, disconnectDB, queryDB } from "../models/event";

export default async function getEvents(){
    try{
        //Connect to MySql
        await connectDB();
        //Query db for required results
        //SELECT * FROM Events WHERE verified = True
        const query = `SELECT * FROM Events`
        const results = await queryDB(query);
        //Terminate DB connection
        // if(results)
        //     disconnectDB();
        return results;
    }catch(e){
        throw new Error("Error in querying",e);
    }
}

export async function createEvent(){
    try{
        await connectDB();
        const query = ``;
        await queryDB(query);
        disconnectDB();
        return true;
    }
    catch(e){
        throw new Error("Error in querying",e);
    }
}