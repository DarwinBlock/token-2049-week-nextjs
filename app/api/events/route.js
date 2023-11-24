import getEvents from "@/backend/controllers/eventController";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const data = await getEvents();
        return NextResponse.json({
            events: data,
        })
    }
    catch(e){
        return NextResponse.json({ message: e }, { status: 500 })
    }
}

export async function POST(request){
    const formDataJSON = await request.json();
    console.log("-----------------FORM DATA-----------------------",formDataJSON);
    const formFields = formDataJSON.data.fields;
    console.log("-----------------FORM FIELDS-----------------------",formFields);
    
    formFields?.forEach((item, idx) => {
        console.log(`----------------ITEM ${idx}--------------------`, item);
    })
    return NextResponse.json({
        data: "recved"
    })
}