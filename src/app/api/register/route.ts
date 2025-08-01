import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    
    try {

        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Name, Email Id and Password should be required" },
                {status: 400} 
            );
        }

        const existingUser = await prisma.user.findUnique({
            where:{ email }
        });

        if(existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })

        return NextResponse.json(
            { message: "User created successfully", user: newUser },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            {error: "Intrnal Server Error"},
            { status: 500 }
        )
    }

}