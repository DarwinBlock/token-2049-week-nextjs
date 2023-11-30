import getEvents, { createEvent, changeVerificationStatus, deleteEvent, updateEvent } from "@/backend/controllers/eventController";
import { NextResponse } from "next/server";

export async function GET(request){
    try{
        const { searchParams } = new URL(request.url);
        const getAllEvents = searchParams.get('allEvents');
        const eventId = searchParams.get('eventId');
        const data = await getEvents(getAllEvents, eventId);
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

export async function PATCH(request) {
    try{
        const { searchParams } = new URL(request.url);
        const eventId = searchParams.get('eventId');
        //true marks the event verified else marks it unverified
        const verify = searchParams.get('verify');
        await changeVerificationStatus(eventId, verify);
        return NextResponse.json({ message: "Event Updated Successfully" }, { status: 200 })
    }
    catch(e){
        return NextResponse.json({ message: e }, { status: 400 });
    }
}

export async function DELETE(request){
    try{
        const { searchParams } = new URL(request.url);
        const eventId = searchParams.get('eventId');
        await deleteEvent(eventId);
        return NextResponse.json({ message: "Event Deleted Successfully" }, { status: 200 })
    }
    catch(e){
        return NextResponse.json({ message: e }, { status: 400 });
    }
}

export async function PUT(request) {
    try{
        const formDataJSON = await request.json();
        await updateEvent(formDataJSON.data);
        return NextResponse.json({ message: "Event Edited Successfully" }, { status: 200 })
    } catch(e) {
        return NextResponse.json({ message: e }, { status: 400 });
    }
}