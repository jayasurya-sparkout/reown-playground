import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email Id and Password should be required" },
                {status: 400} 
            );
        }

        const user = await prisma.user.findUnique({
            where:{ email }
        });

        if(!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        };

        return NextResponse.json(
            { message: "login successfully", userDetails: user, statusCode: 200, status: true },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            {error: "Intrnal Server Error"},
            { status: 500 }
        )
    }

}