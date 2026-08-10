import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact, contactType, source } = body;

    if (!contact || !contactType) {
      return NextResponse.json(
        { error: 'Contact information and type are required' },
        { status: 400 }
      );
    }

    const contactLabel = contactType === 'email' ? 'Email' : 'Teléfono';
    const emailContent = `
🚀 NUEVO LEAD RÁPIDO desde brai.dev

**Información de contacto:**
- ${contactLabel}: ${contact}
- Fuente: ${source || 'Popup flotante'}
- Timestamp: ${new Date().toLocaleString('es-CO')}

**Acción recomendada:**
Este es un lead de alta intención que interactuó con el popup flotante.
Contactar dentro de las próximas 2 horas para máxima conversión.

---
Este lead fue capturado desde el popup de contacto rápido de brai.dev
    `;

    const data = await resend.emails.send({
      from: 'noreply@mail.papeleo.co',
      to: ['jorge@brai.dev', 'santiago@brai.dev'],
      subject: `🔥 LEAD CALIENTE - ${contactLabel}: ${contact}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending quick contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}