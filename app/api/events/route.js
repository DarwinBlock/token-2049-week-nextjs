import getEvents, { createEvent } from "@/backend/controllers/eventController";
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
    const formFields = formDataJSON.data.fields;
    
    await createEvent(formFields);
    return NextResponse.json({ message: "Event Created Successfully" }, { status: 200 })
}