import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect("https://discord.gg/rnD8HQDDz3", { status: 307 });
}
