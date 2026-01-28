import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Heart, Home } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Kontaktujte nás",
    description: "Zavolejte nebo napište – probereme vaše přání a očekávání.",
  },
  {
    icon: FileText,
    title: "Rezervace štěněte",
    description: "Vyberete si konkrétní štěně a složíte zálohu na rezervaci.",
  },
  {
    icon: Heart,
    title: "Příprava",
    description: "Poradíme s výbavou a připravíme vše pro příchod štěněte.",
  },
  {
    icon: Home,
    title: "Nový domov",
    description: "Štěně si odvezete s očkovacím průkazem a PP.",
  },
];

const ReservationStepper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Jak to funguje
          </span>
          <h2 className="section-heading text-3xl md:text-4xl mb-4">
            Rezervace ve 4 krocích
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Od prvního kontaktu po šťastný příchod štěněte do vaší rodiny
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          {/* Progress line */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                {/* Step number and icon */}
                <motion.div
                  className="relative mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationStepper;
