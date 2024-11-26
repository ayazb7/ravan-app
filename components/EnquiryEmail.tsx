import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import mylogo from '@/logos/logo_bluebg.png'
  
  interface EnquiryEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const EnquiryEmail = ({
    firstName,
    lastName,
    phone,
    email,
    message,
  }: EnquiryEmailProps) => (
    <Html>
      <Head />
      <Preview>New Enquiry from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="../logos/logo_bluebg.png"
            width="170"
            height="50"
            alt="Company Logo"
            style={logo}
          />
          <Text style={paragraph}>Hello Team,</Text>
          <Text style={paragraph}>
            You have received a new enquiry through the website. Here are the details:
          </Text>
          <Section>
            <Text style={paragraph}><strong>First Name:</strong> {firstName}</Text>
            <Text style={paragraph}><strong>Last Name:</strong> {lastName}</Text>
            <Text style={paragraph}><strong>Email:</strong> {email}</Text>
            <Text style={paragraph}><strong>Phone Number:</strong> {phone}</Text>
            <Text style={paragraph}><strong>Message:</strong></Text>
            <Text style={paragraph}>{message}</Text>
          </Section>
          <Text style={paragraph}>
            Please reach out to the customer as soon as possible to address their enquiry.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Best regards,
            <br />
            High end trading
          </Text>
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
  
  export default EnquiryEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  