import { Monitor, Workflow, BarChart3, ShoppingCart, Bot } from "lucide-react";

const solutions = [
  {
    icon: ShoppingCart,
    title: "POS & Inventory Systems",
    description: "Streamline sales, track stock in real time, and manage multi-location retail with intelligent point-of-sale software.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate manual bottlenecks with automated task flows, approvals, notifications, and integrations across your tools.",
  },
  {
    icon: BarChart3,
    title: "CRM & Sales Dashboards",
    description: "Track leads, close deals faster, and gain 360° visibility into your pipeline with custom dashboards and analytics.",
  },
  {
    icon: Monitor,
    title: "Custom Web & Mobile Apps",
    description: "Purpose-built applications tailored to your business — from internal tools to customer-facing platforms.",
  },
  {
    icon: Bot,
    title: "AI & Automation Tools",
    description: "Leverage AI-powered insights, chatbots, document processing, and predictive analytics to work smarter.",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Build</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Solutions That Drive Real Business Results
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From inventory to AI — we build the systems your business needs to operate, compete, and grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
