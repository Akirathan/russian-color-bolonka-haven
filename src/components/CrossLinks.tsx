import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CrossLinkItem {
  to: string;
  label: string;
  description: string;
}

const allLinks: CrossLinkItem[] = [
  { to: "/o-plemeni", label: "O plemeni", description: "Povaha, péče o srst, standard FCI" },
  { to: "/stenata", label: "Štěňata", description: "Informace pro zájemce o štěně" },
  { to: "/aktualni-vrhy", label: "Aktuální vrhy", description: "Novinky z probíhajících vrhů" },
  { to: "/planovane-vrhy", label: "Plánované vrhy", description: "Připravovaná spojení" },
  { to: "/nase-odchovy", label: "Naše odchovy", description: "Archiv předchozích vrhů" },
  { to: "/nasi-psi", label: "Naši psi", description: "Chovní jedinci s testy a tituly" },
  { to: "/kontakt", label: "Kontakt", description: "Napište nám ohledně štěňat" },
  { to: "/clanky", label: "Články", description: "Rady k výchově a péči" },
];

interface CrossLinksProps {
  exclude?: string[];
  maxLinks?: number;
  title?: string;
}

const CrossLinks = ({ exclude = [], maxLinks = 5, title = "Mohlo by vás zajímat" }: CrossLinksProps) => {
  const links = allLinks.filter((link) => !exclude.includes(link.to)).slice(0, maxLinks);

  return (
    <section className="py-12 gradient-warm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-display text-xl font-semibold text-foreground mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="card-warm group hover:border-primary/30 transition-colors p-4 block"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                    {link.label}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossLinks;
