import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const subjectLabels: Record<string, string> = {
  puppy: "Zájem o štěně",
  "waiting-list": "Zápis do čekací listiny",
  visit: "Návštěva chovatelské stanice",
  question: "Obecný dotaz",
  other: "Jiné",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Vyplňte prosím všechna povinná pole." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Neplatná emailová adresa." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs (basic HTML escape)
    const sanitize = (str: string) =>
      str.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
        return entities[char] || char;
      });

    const safeName = sanitize(name.trim().slice(0, 100));
    const safeEmail = sanitize(email.trim().slice(0, 255));
    const safePhone = phone ? sanitize(phone.trim().slice(0, 20)) : "";
    const safeMessage = sanitize(message.trim().slice(0, 2000));
    const subjectLabel = subject ? subjectLabels[subject] || subject : "Kontaktní formulář";

    console.log("Sending contact form email:", { name: safeName, email: safeEmail, subject: subjectLabel });

    const emailResponse = await resend.emails.send({
      from: "Pikaro Web <onboarding@resend.dev>",
      to: ["ipikaro@gmail.com"],
      reply_to: safeEmail,
      subject: `[Pikaro] ${subjectLabel} - ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html lang="cs">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2d5a27 0%, #4a7c43 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nová zpráva z webu Pikaro</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 120px; vertical-align: top;">Předmět:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${subjectLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; vertical-align: top;">Jméno:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <a href="mailto:${safeEmail}" style="color: #2d5a27;">${safeEmail}</a>
                </td>
              </tr>
              ${safePhone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; vertical-align: top;">Telefon:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <a href="tel:${safePhone.replace(/\s/g, '')}" style="color: #2d5a27;">${safePhone}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Zpráva:</td>
                <td style="padding: 10px 0;">
                  <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; white-space: pre-wrap;">${safeMessage}</div>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
              <p>Tato zpráva byla odeslána z kontaktního formuláře na webu Chovatelské stanice Pikaro.</p>
              <p>Pro odpověď stačí odpovědět na tento email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Zpráva byla úspěšně odeslána." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error sending contact form email:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Neznámá chyba";
    
    return new Response(
      JSON.stringify({ error: "Nepodařilo se odeslat zprávu. Zkuste to prosím později.", details: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
