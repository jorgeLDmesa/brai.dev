import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, consultationType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailContent = `
Nueva ${consultationType === 'audit' ? 'solicitud de auditoría' : 'consulta general'} desde brai.dev

**Información del contacto:**
- Nombre: ${name}
- Email: ${email}
- Empresa: ${company || 'No especificada'}
- Teléfono: ${phone || 'No especificado'}
- Tipo: ${consultationType === 'audit' ? 'Auditoría Gratuita' : 'Consulta General'}

**Mensaje:**
${message}

---
Este email fue enviado desde el formulario de contacto de brai.dev
    `;

    const data = await resend.emails.send({
      from: 'noreply@mail.papeleo.co',
      to: ['jorge@brai.dev', 'santiago@brai.dev'],
      subject: `${consultationType === 'audit' ? '🚀 Nueva Auditoría' : '💬 Nueva Consulta'} - ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}