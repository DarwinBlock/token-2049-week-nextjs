import getEvents from "@/backend/controllers/eventController";
import { NextResponse } from "next/server";

export async function GET(){
    const data = await getEvents();
    return NextResponse.json({
        events: data,
    })
}

export async function POST(request){
    console.log(request);
    console.log(await request.json());
    return NextResponse.json({
        request
    })
}