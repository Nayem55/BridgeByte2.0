import { Store, Factory, GraduationCap, HeartPulse, Building2, Truck } from "lucide-react";

const industries = [
  { icon: Store, label: "Retail & E-Commerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics & Trade" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Industries We Serve</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Built for the Industries That Power Bangladesh
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our solutions are tailored for the unique challenges of Bangladeshi businesses across key growth sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-card hover:shadow-card-hover border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <ind.icon className="text-accent" size={26} />
              </div>
              <span className="text-sm font-medium text-foreground">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
