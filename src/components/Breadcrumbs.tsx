import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <BreadcrumbItem key={item.url}>
              {isLast ? (
                <BreadcrumbPage className="text-foreground font-medium">
                  {item.name}
                </BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.url}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {isFirst && <Home className="w-3.5 h-3.5" />}
                      <span>{item.name}</span>
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
                  </BreadcrumbSeparator>
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
