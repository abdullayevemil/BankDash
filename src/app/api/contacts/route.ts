import { contacts } from "@/data/contacts";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(contacts);
}