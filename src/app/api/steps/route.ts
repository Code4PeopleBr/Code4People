import { NextResponse } from "next/server";
import { STEPS } from "@/lib/data";

export async function GET() {
  return NextResponse.json(STEPS);
}
