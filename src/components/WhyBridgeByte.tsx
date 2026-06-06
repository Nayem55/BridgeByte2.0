import { Zap, Shield, Users, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Bangladesh-First Approach",
    description: "We understand the local market, regulatory environment, and the real challenges Bangladeshi businesses face daily.",
  },
  {
    icon: Zap,
    title: "AI & Automation Expertise",
    description: "We don't just build apps — we embed intelligence into your workflows so your team can focus on growth, not admin.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Reliability",
    description: "Scalable architecture, robust security, and 99.9% uptime SLAs — even for fast-moving startups and SMEs.",
  },
  {
    icon: Users,
    title: "Dedicated Partnership Model",
    description: "Every client gets a dedicated team. We're not a vendor — we're a long-term technology partner invested in your success.",
  },
];

const WhyBridgeByte = () => {
  return (
    <section id="why" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why BridgeByte</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-5">
              The Technology Partner Your Business Deserves
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine deep local market knowledge with world-class engineering to deliver solutions that actually move the needle for your business.
            </p>
            <div className="grid gap-2">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-secondary/60 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-hero rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-accent font-heading">150+</span>
                  <span className="text-primary-foreground/60 text-sm">projects delivered</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-accent font-heading">98%</span>
                  <span className="text-primary-foreground/60 text-sm">client satisfaction</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-accent font-heading">40%</span>
                  <span className="text-primary-foreground/60 text-sm">avg. efficiency gains</span>
                </div>
                <div className="w-full h-px bg-primary-foreground/10 my-4" />
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  "BridgeByte transformed how we manage our supply chain. Their POS and inventory system saved us 15 hours a week."
                </p>
                <p className="text-accent text-sm font-medium">— Retail Operations Manager, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBridgeByte;
