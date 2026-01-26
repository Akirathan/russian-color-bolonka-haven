import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bolonka-kennel.ru",
    href: "mailto:info@bolonka-kennel.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Москва, Россия",
    href: "#",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "Пн-Вс: 10:00 - 20:00",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Контакты
          </span>
          <h2 className="section-heading mb-4">
            Свяжитесь с нами
          </h2>
          <p className="section-subheading mx-auto">
            Мы всегда рады ответить на ваши вопросы о породе и помочь 
            выбрать идеального щенка для вашей семьи.
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
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Введите ваше имя"
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
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Расскажите, чем мы можем вам помочь..."
              />
            </div>
            <button type="submit" className="btn-hero w-full">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
