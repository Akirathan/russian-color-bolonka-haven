import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 123 456 789",
    href: "tel:+420123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bolonka-chov.cz",
    href: "mailto:info@bolonka-chov.cz",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Praha, Česká republika",
    href: "#",
  },
  {
    icon: Clock,
    label: "Provozní doba",
    value: "Po-Ne: 10:00 - 20:00",
    href: "#",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Kontakt
              </span>
              <h1 className="section-heading mb-4">
                Kontaktujte nás
              </h1>
              <p className="section-subheading mx-auto">
                Rádi odpovíme na vaše dotazy o plemeni a pomůžeme 
                vybrat ideální štěně pro vaši rodinu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="card-warm flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Contact Form */}
              <form className="card-warm space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Vaše jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Zadejte vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Řekněte nám, jak vám můžeme pomoci..."
                  />
                </div>
                <button type="submit" className="btn-hero w-full">
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
