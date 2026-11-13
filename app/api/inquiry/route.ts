import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, category, brief, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required' },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // 1. Dispatch lead notification directly to admindevvhubb@gmail.com via FormSubmit
    try {
      const emailPayload = {
        _subject: `⚡ New Dev Hub Lead: ${name} (${category || 'Project Inquiry'})`,
        _template: 'table',
        _captcha: 'false',
        Client_Name: name,
        Phone_WhatsApp: phone,
        Email_Address: email || 'Not provided',
        Selected_Solution: category || 'General Inquiry',
        Project_Notes: brief || 'No specific notes provided',
        Origin_Page: source || 'Dev Hub Web Portal',
        Submitted_At_IST: submissionTime,
      };

      await fetch('https://formsubmit.co/ajax/admindevvhubb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://devhub.agency',
          Referer: 'https://devhub.agency/',
        },
        body: JSON.stringify(emailPayload),
      });
    } catch (emailErr) {
      console.error('Email dispatch error (non-fatal):', emailErr);
    }

    // 2. Generate WhatsApp pre-filled chat link for instant admin communication
    const whatsappText = `Hi Dev Hub! My name is ${name}. I just submitted an inquiry on your website:
• Phone: ${phone}
• Email: ${email || 'N/A'}
• Looking to build: ${category || 'Custom Project'}
• Project Notes: ${brief || 'Discussing scope'}

Looking forward to connecting with the team!`;

    const whatsappUrl = `https://wa.me/916395092413?text=${encodeURIComponent(whatsappText)}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry successfully processed and dispatched to admin',
      whatsappUrl,
    });
  } catch (error) {
    console.error('Error in /api/inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
