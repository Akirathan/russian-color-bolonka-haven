import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Kontakt
          </span>
          <h2 className="section-heading mb-4">
            Kontaktujte nás
          </h2>
          <p className="section-subheading mx-auto">
            Rádi odpovíme na vaše dotazy o plemeni a pomůžeme 
            vybrat ideální štěně pro vaši rodinu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="card-warm flex items-center gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="card-warm space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
            <motion.button 
              type="submit" 
              className="btn-hero w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Odeslat zprávu
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
