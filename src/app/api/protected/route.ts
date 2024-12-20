import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/auth"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({ content: "This is protected content" })
} 