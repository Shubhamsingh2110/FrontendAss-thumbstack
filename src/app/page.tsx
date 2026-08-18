import LatestBlogs from "@/landing/blog";
import ClimateProjects from "@/landing/climate";
import ContactSection from "@/landing/contactsection";
import FAQSection from "@/landing/faq";
import Footer from "@/landing/footer";
import { GlobalImpact } from "@/landing/global-impact";
import { Hero } from "@/landing/hero";
import { HowItWorks } from "@/landing/how-it-works";
import { PromoBanners } from "@/landing/promo-banners";
import { StoreDirectory } from "@/landing/store-directory";
import TestimonialsSection from "@/landing/testimonial";
import VouchersSection from "@/landing/voucher";
import { WhoWeAre } from "@/landing/who-we-are";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhoWeAre />
      <GlobalImpact />
      <StoreDirectory />
      <PromoBanners />
      <VouchersSection />
      <ClimateProjects />
      <LatestBlogs />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}
