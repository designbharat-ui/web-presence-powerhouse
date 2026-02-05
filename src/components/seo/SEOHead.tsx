 import { Helmet } from "react-helmet-async";
 
 // Schema types for structured data
 interface OrganizationSchema {
   "@context": "https://schema.org";
   "@type": "Organization";
   name: string;
   url: string;
   logo: string;
   contactPoint: {
     "@type": "ContactPoint";
     telephone: string;
     contactType: string;
     areaServed: string;
     availableLanguage: string[];
   };
   address: {
     "@type": "PostalAddress";
     streetAddress: string;
     addressLocality: string;
     addressRegion: string;
     addressCountry: string;
   };
   sameAs: string[];
 }
 
 interface WebPageSchema {
   "@context": "https://schema.org";
   "@type": "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
   name: string;
   description: string;
   url: string;
   isPartOf: {
     "@type": "WebSite";
     name: string;
     url: string;
   };
 }
 
 interface BreadcrumbSchema {
   "@context": "https://schema.org";
   "@type": "BreadcrumbList";
   itemListElement: {
     "@type": "ListItem";
     position: number;
     name: string;
     item: string;
   }[];
 }

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
   pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
   breadcrumbs?: { name: string; url: string }[];
}

const SITE_NAME = "One Touch Industrial Solutions";
const BASE_URL = "https://www.onetouchindustrialsolutions.com";
const DEFAULT_DESCRIPTION = "One Touch Industrial Solutions - Premium elevator and escalator solutions in Delhi, India. 21 years of expertise in designer SS sheets, car operating panels, spare parts, and complete installation services.";
const DEFAULT_KEYWORDS = "elevator solutions, escalator solutions, lift installation, SS 304 sheets, car operating panels, spare parts, Delhi, India, industrial solutions";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo.jpg`;

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
   ogType = "website",
   pageType = "WebPage",
   breadcrumbs,
 }: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;
 
   // Organization Schema (global)
   const organizationSchema: OrganizationSchema = {
     "@context": "https://schema.org",
     "@type": "Organization",
     name: SITE_NAME,
     url: BASE_URL,
     logo: DEFAULT_OG_IMAGE,
     contactPoint: {
       "@type": "ContactPoint",
       telephone: "+91-9711312081",
       contactType: "sales",
       areaServed: "IN",
       availableLanguage: ["English", "Hindi"],
     },
     address: {
       "@type": "PostalAddress",
       streetAddress: "Delhi",
       addressLocality: "Delhi",
       addressRegion: "DL",
       addressCountry: "IN",
     },
     sameAs: [
       "https://www.facebook.com/onetouchindustrialsolutions",
       "https://www.linkedin.com/company/onetouchindustrialsolutions",
     ],
   };
 
   // WebPage Schema
   const webPageSchema: WebPageSchema = {
     "@context": "https://schema.org",
     "@type": pageType,
     name: fullTitle,
     description: description,
     url: canonical,
     isPartOf: {
       "@type": "WebSite",
       name: SITE_NAME,
       url: BASE_URL,
     },
   };
 
   // Breadcrumb Schema
   const breadcrumbSchema: BreadcrumbSchema | null = breadcrumbs
     ? {
         "@context": "https://schema.org",
         "@type": "BreadcrumbList",
         itemListElement: [
           { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/index.html` },
           ...breadcrumbs.map((crumb, index) => ({
             "@type": "ListItem" as const,
             position: index + 2,
             name: crumb.name,
             item: `${BASE_URL}${crumb.url}`,
           })),
         ],
       }
     : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="One Touch Industrial Solutions" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
       
       {/* Structured Data - Organization */}
       <script type="application/ld+json">
         {JSON.stringify(organizationSchema)}
       </script>
       
       {/* Structured Data - WebPage */}
       <script type="application/ld+json">
         {JSON.stringify(webPageSchema)}
       </script>
       
       {/* Structured Data - Breadcrumbs */}
       {breadcrumbSchema && (
         <script type="application/ld+json">
           {JSON.stringify(breadcrumbSchema)}
         </script>
       )}
    </Helmet>
  );
}
