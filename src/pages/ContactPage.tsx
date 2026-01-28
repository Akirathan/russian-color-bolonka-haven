import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 724 174 659",
    href: "tel:+420724174659",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ipikaro@gmail.com",
    href: "mailto:ipikaro@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "U Černého mostu 131/13, Plzeň",
    href: "https://maps.google.com/?q=U+Černého+mostu+131/13,+Plzeň",
  },
  {
    icon: Clock,
    label: "Návštěvy",
    value: "Po domluvě kdykoliv",
    href: "#",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Chyba",
        description: "Vyplňte prosím všechna povinná pole.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Chyba",
        description: "Zadejte prosím platnou emailovou adresu.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // For now, show success message - backend will be added
    setTimeout(() => {
      toast({
        title: "Zpráva odeslána!",
        description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 gradient-warm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Kontakt
              </span>
              <h1 className="section-heading mb-4">
                Kontaktujte nás
              </h1>
              <p className="section-subheading mx-auto">
                Rádi odpovíme na vaše dotazy o ruských barevných bolonkách 
                a pomůžeme vybrat ideálního společníka pro vaši rodinu.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="card-warm">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    Chovatelská stanice Pikaro
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Chov ruských barevných bolonek s láskou od roku 1988. 
                    Mezinárodně chráněný název stanice od roku 1997.
                  </p>
                </div>

                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

                {/* Map embed placeholder */}
                <div className="card-warm p-0 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.2!2d13.3776!3d49.7384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ0JzE4LjIiTiAxM8KwMjInMzkuNCJF!5e0!3m2!1scs!2scz!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa - Chovatelská stanice Pikaro"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="card-warm space-y-5">
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  Napište nám
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Máte zájem o štěně nebo dotaz? Neváhejte nás kontaktovat.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Vaše jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Jan Novák"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+420 123 456 789"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="vas@email.cz"
                    maxLength={255}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Předmět
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Vyberte předmět...</option>
                    <option value="puppy">Zájem o štěně</option>
                    <option value="waiting-list">Zápis do čekací listiny</option>
                    <option value="visit">Návštěva chovatelské stanice</option>
                    <option value="question">Obecný dotaz</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Napište nám svůj dotaz nebo zájem o štěně..."
                    maxLength={2000}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-hero w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Odesílání..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Odeslat zprávu
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Povinná pole. Vaše údaje zpracováváme pouze za účelem odpovědi na váš dotaz.
                </p>
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
