import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Fragment } from "react";

const routeNames: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "products": "Products & Services",
  "projects": "Our Projects",
  "clients": "Our Clients",
  "contact": "Contact Us",
  "sitemap": "Sitemap",
  "services": "Services",
  "ss-sheets": "SS 304 Sheets",
  "panels": "Car Operative Panels",
  "spare-parts": "Spare Parts",
  "displays": "Multimedia Displays",
  "safety": "Safety Equipment",
  "entrances": "Entrances & Architraves",
  "tools": "Tools & Equipment",
  "installation": "Installation Services",
  "building-systems": "Building & Cladding",
  "vertical-gardens": "Vertical Gardens",
  "scientific-agriculture": "Scientific & Agriculture",
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Don't show breadcrumbs on home page
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;
    const name = routeNames[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

    return { path, name, isLast };
  });

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item.path}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.path}>{item.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
