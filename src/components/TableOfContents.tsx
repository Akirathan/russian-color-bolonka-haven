import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents = ({ items, className }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={cn("hidden lg:block", className)} aria-label="Obsah článku">
      <div className="sticky top-24 space-y-2">
        <h4 className="font-display text-sm font-semibold text-foreground mb-3">
          Obsah
        </h4>
        <ul className="space-y-1 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left w-full px-3 py-1.5 rounded-md transition-colors hover:bg-muted",
                  item.level > 1 && "pl-6",
                  activeId === item.id
                    ? "text-primary bg-primary/5 font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
