import nodemailer from "nodemailer";
import { NextResponse } from 'next/server'

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
        // Access the incoming request's body and extract the file
        const { email, name, phone, subject, message } = await request.json();

        // Ensure the file exists in the request body
        // if (!file) {
        //     return NextResponse.json({ error: "No file attached." });
        // }

        // Extract file details
        // const { filename, content, contentType } = file;

        // Send the email with the attachment
        await trasnport.sendMail({
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: `Contact Form Submission ${name}`,
            html: `
                <html>
                    <head>
                        <style>
                            /* Define your CSS styles here */
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f0f0f0;
                            }
                            .container {
                                max-width: 900px;
                                margin: 0 auto;
                                padding: 20px;
                                background-color: #ffffff;
                                border-radius: 5px;
                                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                            }
                            h1 {
                                color: #333333;
                            }
                            ul {
                                list-style: none;
                                padding: 0;
                                margin: 0;
                            }
                            li {
                                margin-bottom: 10px;
                            }
                            .message {
                                padding: 10px;
                                background-color: #f5f5f5;
                                border-radius: 5px;
                            }
                            .message p{
                                padding-inline:8px
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Contact Form Submission</h1>
                            <ul>
                                <li><strong>Subject:</strong> ${subject}</li>
                                <li><strong>Name:</strong> ${name}</li>
                                <li><strong>Phone:</strong> ${phone}</li>
                                <li><strong>Email:</strong> ${email}</li>
                            </ul>
                            <div class="message">
                                <strong>Message:</strong>
                                <p>${message}</p>
                            </div>
                        </div>
                    </body>
                </html>
            `,
            // attachments: [
            //     {
            //         filename,
            //         content,
            //         contentType,
            //     },
            // ],
        });

        const data = {
            message: "File sent successfully",
            status: "ok",
        };
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email with attachment." });
    }
}
