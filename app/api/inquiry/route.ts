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

    const targetEmail = 'admindevvhubb@gmail.com';
    const formSubmitToken = process.env.FORMSUBMIT_TOKEN || '5cad712093b2a075287e42a8f95b132e';

    let emailDelivered = false;
    let serviceMessage = '';

    // Method A: Direct Resend API (If RESEND_API_KEY is configured in Vercel environment)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Dev Hub Inquiries <onboarding@resend.dev>',
            to: [targetEmail],
            subject: `⚡ New Dev Hub Lead: ${name} (${category || 'Project Inquiry'})`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0c0c10; color: #f4f4f6; border-radius: 12px; border: 1px solid #27272a;">
                <h2 style="color: #ffffff; margin-bottom: 4px;">New Client Project Inquiry</h2>
                <p style="color: #888899; font-size: 13px; margin-top: 0;">Dev Hub Lead Dispatch</p>
                <hr style="border: 0; border-top: 1px solid #27272a; margin: 16px 0;" />
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa; width: 140px;">Client Name:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa;">Phone / WhatsApp:</td>
                    <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa;">Email Address:</td>
                    <td style="padding: 8px 0; color: #ffffff;">${email || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa;">Selected Solution:</td>
                    <td style="padding: 8px 0; color: #ffffff;">${category || 'General Inquiry'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa; vertical-align: top;">Project Brief:</td>
                    <td style="padding: 8px 0; color: #ffffff; line-height: 1.5;">${brief || 'No notes provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa;">Source Page:</td>
                    <td style="padding: 8px 0; color: #888899;">${source || 'Website Form'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #a1a1aa;">Submitted At:</td>
                    <td style="padding: 8px 0; color: #888899;">${submissionTime}</td>
                  </tr>
                </table>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
          serviceMessage = 'Email delivered via Resend';
        }
      } catch (resendErr: any) {
        console.error('Resend API error:', resendErr);
      }
    }

    // Method B: Activated FormSubmit Token Dispatch with explicit Browser User-Agent & Origin
    if (!emailDelivered) {
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

        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            Origin: 'https://devhub.agency',
            Referer: 'https://devhub.agency/',
          },
          body: JSON.stringify(emailPayload),
        });

        const rawText = await formSubmitRes.text();
        try {
          const fsData = JSON.parse(rawText);
          if (fsData.success === 'true' || fsData.success === true) {
            emailDelivered = true;
            serviceMessage = 'Email delivered via FormSubmit token';
          } else {
            serviceMessage = fsData.message || 'FormSubmit response pending';
          }
        } catch {
          serviceMessage = `FormSubmit non-JSON response (${formSubmitRes.status}): ${rawText.slice(0, 100)}`;
        }
      } catch (fsErr: any) {
        console.error('FormSubmit token error:', fsErr);
        serviceMessage = `FormSubmit exception: ${fsErr?.message || String(fsErr)}`;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry processed',
      emailDelivered,
      serviceMessage,
    });
  } catch (error) {
    console.error('Error in /api/inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
