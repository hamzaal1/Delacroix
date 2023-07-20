import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

const trasnport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMPT_PASSWORD
    }
});

export async function config() {
    return {
        api: {
            bodyParser: false // Disable built-in bodyParser
        }
    };
}

export async function POST(request) {
    try {
        let formData = await request.json()
        return NextResponse.json({ formData })
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email with attachment." });
    }
}
