import { queryDB } from "../models/event";
import { formToDBMap } from "@/config/constants";

export default async function getEvents(getAllEvents=false){
    try {
        let query = `SELECT * FROM Events WHERE verified=1`;
        if(getAllEvents)
            query = `SELECT * FROM Events`;
        const results = await queryDB(query);
        return results;
    }catch(e) {
        throw new Error("Oops! Error in querying",e);
    }
}

export async function createEvent(formFields){
    try {
        const constructDBJSON = () => {
            const dbJson = {};
            
            formFields.forEach(field => {
                const key = formToDBMap.get(field.label);
                let value = field.value;
                switch(field.type){
                    case 'FILE_UPLOAD':
                        value = field.value[0].url;
                        break;
                    case 'MULTIPLE_CHOICE':
                        const filteredOption = field.options.filter(item => item.id === field.value[0])
                        value = filteredOption[0].text;
                        break;
                    case 'DROPDOWN':
                        const filteredOption2 = field.options.filter(item => item.id === field.value[0])
                        value = filteredOption2[0].text;
                        break;
                    default:
                        break;
                }
                dbJson[key] = value;
            })

            return dbJson;
        }
        const dbJSON = constructDBJSON();
        const query = `INSERT INTO Events SET ?`;
        await queryDB(query, dbJSON);
        return true;
    }
    catch(e){
        throw new Error("Error in querying",e);
    }
}

export async function changeVerificationStatus(eventId, verify=false){
    try{
        const query = `UPDATE Events SET verified=${verify === "true"? 1:0} WHERE event_id=${eventId}`;
        await queryDB(query);
        return true;
    }catch(e) {
        throw new Error("Oops! Error in querying",e);
    }
}

export async function deleteEvent(eventId){
    try{
        const query = `DELETE FROM Events WHERE event_id=${eventId}`;
        await queryDB(query);
        return true;
    }catch(e) {
        throw new Error("Oops! Error in querying",e);
    }
}

export async function updateEvent(data){
    try{
        
    }
    catch (e){
        throw new Error("Oops! Error in querying",e);
    }
}