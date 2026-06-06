const steps = [
  { step: "01", title: "Discovery", description: "We learn your business, pain points, and goals through a focused consultation session." },
  { step: "02", title: "Strategy & Design", description: "We architect the optimal solution and present wireframes and system designs for your approval." },
  { step: "03", title: "Build & Iterate", description: "Our team develops in agile sprints with regular check-ins so you always know what's coming next." },
  { step: "04", title: "Launch & Support", description: "We deploy, train your team, and provide ongoing support to ensure long-term success." },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">How We Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            From Idea to Impact in 4 Steps
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A proven process designed to minimize risk and maximize value at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <span className="text-4xl font-bold text-accent/20 font-heading group-hover:text-accent/40 transition-colors">{s.step}</span>
                <h3 className="text-lg font-semibold font-heading text-foreground mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
