// Use direct imports so the Prismic slice content is part of the initial server-rendered HTML.
// Lazy loading here causes the content to be deferred until hydration and can break non-JS crawlers.

import AboutSection from "./AboutSection";
import BlogsSection from "./BlogsSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "./ContactSection";
import CountersSection from "./CountersSection";
import CtaSection from "./CtaSection";
import DetailsSection from "./DetailsSection";
import FeaturesSection from "./FeaturesSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import MediaSection from "./MediaSection";
import NavLinks from "./NavLinks";
import PressReleaseSection from "./PressReleaseSection";
import ProductCategoriesSection from "./ProductCategoriesSection";
import ProductsSection from "./ProductsSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyUsSection from "./WhyUsSection";

export const components = {
  about_section: AboutSection,
  blogs_section: BlogsSection,
  clients_section: ClientsSection,
  contact_section: ContactSection,
  counters_section: CountersSection,
  cta_section: CtaSection,
  details_section: DetailsSection,
  features_section: FeaturesSection,
  gallery_section: GallerySection,
  hero_section: HeroSection,
  media_section: MediaSection,
  nav_links: NavLinks,
  press_release_section: PressReleaseSection,
  product_categories_section: ProductCategoriesSection,
  products_section: ProductsSection,
  team_section: TeamSection,
  testimonials_section: TestimonialsSection,
  why_us_section: WhyUsSection,
};
