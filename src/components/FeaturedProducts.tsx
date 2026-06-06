import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    tag: "Inventory",
    title: "Smart Inventory Manager",
    description: "Real-time stock tracking, automated reorder alerts, multi-warehouse support, and barcode integration — built for Bangladeshi retail and wholesale businesses.",
    features: ["Multi-location sync", "Low-stock alerts", "Barcode scanning", "Sales analytics"],
  },
  {
    tag: "CRM",
    title: "BridgeByte CRM",
    description: "A powerful yet simple CRM designed for local sales teams. Track leads, manage follow-ups, and close more deals with AI-assisted pipeline management.",
    features: ["Lead scoring", "Pipeline automation", "WhatsApp integration", "Custom reports"],
  },
  {
    tag: "Automation",
    title: "Workflow Studio",
    description: "Drag-and-drop workflow builder that connects your existing tools. Automate approvals, notifications, data entry, and repetitive processes without writing code.",
    features: ["Visual flow builder", "100+ integrations", "Conditional logic", "Audit trails"],
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Featured Software</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Products Built to Scale With You
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready-to-deploy platforms with deep customization — or fully bespoke solutions from the ground up.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
              <div className="p-6 space-y-4">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold font-heading text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <ul className="space-y-2 pt-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 gap-1 text-sm font-medium">
                  Learn More <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
