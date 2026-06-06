import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-primary-foreground mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Business with Intelligent Software?
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Let's discuss how BridgeByte can build the systems your business needs to grow. No pressure — just a conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="accent" size="lg" className="gap-2">
            Book a Free Consultation <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg">
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
