import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-medium text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              AI-Powered Business Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary-foreground font-heading">
              AI-Powered Business Software for Growing Companies in{" "}
              <span className="text-gradient">Bangladesh</span>
            </h1>
            <p className="text-base lg:text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
              BridgeByte builds custom software, workflow systems, and automation tools that help businesses run smarter, move faster, and scale more efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="gap-2">
                Explore Solutions <ArrowRight size={16} />
              </Button>
              <Button variant="hero-outline" size="lg">
                Book a Consultation
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-primary-foreground/60 text-sm">
                <span className="text-accent font-semibold text-lg">150+</span>
                <br />Businesses Served
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-primary-foreground/60 text-sm">
                <span className="text-accent font-semibold text-lg">98%</span>
                <br />Client Retention
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-primary-foreground/60 text-sm">
                <span className="text-accent font-semibold text-lg">5+</span>
                <br />Years in Business
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-float">
            <img
              src={heroDashboard}
              alt="BridgeByte software dashboard showing workflow automation and analytics"
              className="w-full max-w-lg xl:max-w-xl shadow-hero rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
