import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SYSTEM_PROMPT = `
You are "ScootBot", a highly knowledgeable, friendly, and expert customer support assistant for a premium Scooty & Two-Wheeler Spare Parts e-commerce store.
Your mission is to help riders and workshop mechanics choose the right scooty models (EV and petrol), genuine OEM spare parts, batteries, brake pads, tires, suspensions, and accessories.

Key store policies & capabilities:
1. Product categories: Complete Electric & Petrol Scooties, Swappable 72V Lithium Batteries, Ceramic Brake Pads, CVT Drive Belts, LED Matrix Projector Headlamps, Tubeless Tires, Inverted Fork Suspensions.
2. Models supported: Honda Activa (all generations), TVS Jupiter, Ather 450X, Ola S1 Pro, Suzuki Access 125, Bajaj Chetak, Hero Vida, Yamaha Aerox.
3. Order Process: We do NOT charge through payment gateways. Customers add items to their cart and click "Checkout via WhatsApp" to send an automated, itemized invoice directly to the shop owner, who then confirms inventory, dispatch timeline, and delivery charges.
4. Tone: Clear, professional, authoritative automotive expert. Always respond in fluent, clean English.
5. Always guide the customer to add the relevant part to cart or use the "Direct WhatsApp Buy" button to finalize with the owner.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const groqApiKey = process.env.GROQ_API_KEY;

    // If Groq API Key is configured in environment, call Groq API
    if (groqApiKey && groqApiKey.trim() !== '' && groqApiKey !== 'your_groq_api_key_here') {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqApiKey.trim()}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...messages
            ],
            temperature: 0.7,
            max_tokens: 600
          })
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const reply = data.choices?.[0]?.message?.content || 'ScootBot response error.';
          return NextResponse.json({ reply, source: 'groq' });
        }
      } catch (err) {
        console.warn('Groq API call failed, falling back to local assistant:', err);
      }
    }

    // Smart Fallback Local Response Engine in Clean English
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    let fallbackReply = '';

    if (lastUserMessage.includes('activa') && (lastUserMessage.includes('brake') || lastUserMessage.includes('pad'))) {
      fallbackReply = `For Honda Activa (5G/6G/125), our **Ceramic High-Bite Brake Pad Set (₹899)** is the recommended choice:
• Zero brake squeal with a copper-free carbon-ceramic composite.
• Provides up to 40% longer lifespan compared to standard semi-metallic pads.
• Direct OEM drop-in fitment.
You can add it directly to your cart or click **Direct WhatsApp Buy** to confirm fitment with the shop owner!`;
    } else if (lastUserMessage.includes('battery') || lastUserMessage.includes('range') || lastUserMessage.includes('ev')) {
      fallbackReply = `For electric two-wheelers, we offer the **72V 42Ah Smart Li-Ion Swappable Battery Pack (₹34,500)**:
• Real-world range: 140–160 km per charge.
• Grade-A NMC 21700 cells with integrated Bluetooth BMS app for thermal and voltage monitoring.
• 3-Year comprehensive replacement warranty.
Our flagship **VoltPulse Apex-X (₹84,999)** electric scooter is also available with an 88 km/h top speed.`;
    } else if (lastUserMessage.includes('whatsapp') || lastUserMessage.includes('order') || lastUserMessage.includes('payment') || lastUserMessage.includes('buy') || lastUserMessage.includes('checkout')) {
      fallbackReply = `Ordering through our WhatsApp checkout is straightforward:
1. Add your desired scooter or genuine spare parts to your **Cart**.
2. Open the cart and click **"Checkout via WhatsApp"**.
3. Fill in your name, delivery address, and scooter model.
4. An automated, pre-formatted order summary will open in WhatsApp so you can confirm stock and dispatch directly with the store owner!`;
    } else if (lastUserMessage.includes('tire') || lastUserMessage.includes('tyre') || lastUserMessage.includes('puncture')) {
      fallbackReply = `For optimal wet and dry grip, we recommend the **All-Weather Deep-Tread 90/90-12 Tubeless Tyre (₹1,399)**:
• 4-ply reinforced tread compound engineered with an anti-puncture defense belt.
• Certified OEM fit for Honda Activa 6G (front), TVS Jupiter, Access 125, and Ather 450X.
• Includes a complimentary heavy-duty tubeless air valve.`;
    } else if (lastUserMessage.includes('suspension') || lastUserMessage.includes('shock') || lastUserMessage.includes('pothole')) {
      fallbackReply = `To handle broken roads and potholes with superior comfort:
• **Hydraulic Telescopic Front Fork Struts (₹3,650)**: Absorbs road shocks and eliminates handlebar vibration.
• **Nitrogen Gas-Charged Rear Monoshock (₹2,199)**: Features 5-step adjustable spring preload for solo and pillion riding.`;
    } else {
      fallbackReply = `Hello! I am **ScootBot AI** 🛵. I can assist you with selecting the right scooter model or finding genuine OEM replacement parts (compatible with Honda Activa, TVS Jupiter, Ather, Ola, Access, etc.).
Feel free to ask about lithium battery packs, ceramic brake pads, tubeless tires, or how our WhatsApp checkout works!`;
    }

    return NextResponse.json({
      reply: fallbackReply,
      source: 'local-engine',
      note: 'To activate live Groq LLM responses, set GROQ_API_KEY in .env.local'
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal chat error', reply: 'ScootBot error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
