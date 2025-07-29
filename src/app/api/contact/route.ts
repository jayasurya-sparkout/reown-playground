import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json (
                { error: 'Please fill rquired fields' },
                { status: 400 }
            );
        }

        console.log('Received contact form data:', { name, email, message });

        return NextResponse.json (
            { success: true, message: "Contact form submitted" },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json (
            { error: "Invalid JSON or server error" },
            { status: 500 }
        )
    }
}