import { NextResponse } from "next/server";

export async function POST(request: Request){
    const { cart } = await request.json();

    return NextResponse.json({});
}