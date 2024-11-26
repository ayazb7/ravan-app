import { EnquiryEmail } from '../../../components/EnquiryEmail';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request : Request) {
  try {
      const {firstname , lastname, phone, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'info@highendtrading.ae',
      to: ['info@highendtrading.ae'],
      subject: "Website enquiry",
      react: EnquiryEmail({ firstName: firstname, lastName : lastname , phone: phone, email:email,message:message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}