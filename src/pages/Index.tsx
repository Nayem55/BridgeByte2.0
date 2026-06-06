import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import WhyBridgeByte from "@/components/WhyBridgeByte";
import FeaturedProducts from "@/components/FeaturedProducts";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Solutions />
      <Industries />
      <WhyBridgeByte />
      <FeaturedProducts />
      <Process />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
