// The standalone site export referenced an unavailable attached asset. Use the
// project favicon so the deployment remains self-contained.
const mark = '/favicon.png';
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  Cpu,
  Database,
  Globe2,
  Mail,
  Menu,
  Network,
  Server,
  Smartphone,
  Workflow,
  X,
} from 'lucide-react';

const services = [
  { name: 'ERP / Business Software', tag: '01 / OPERATE', icon: Database, title: 'Make the business legible.', copy: 'Bring sales, stock, finance and people into one operating picture—built around how your team actually works.', bullets: ['ERP discovery & implementation', 'POS, inventory and CRM systems', 'Reports your team can trust'] },
  { name: 'Tally ERP & TDL', tag: '02 / EXTEND', icon: BarChart3, title: 'Tally, tuned to your reality.', copy: 'Extend Tally ERP with practical customisation, local workflows and TDL modules that remove the workarounds.', bullets: ['TDL custom reports', 'Voucher and approval workflows', 'Bangladesh-ready support'] },
  { name: 'SaaS Solutions', tag: '03 / SCALE', icon: Network, title: 'A product your process can grow into.', copy: 'From internal tools to customer-facing platforms, we design dependable SaaS around a sharp business case.', bullets: ['Product strategy and UX', 'Multi-tenant architecture', 'Launch, iterate, support'] },
  { name: 'Website Development', tag: '04 / PRESENCE', icon: Globe2, title: 'A website with a job to do.', copy: 'Web experiences that clarify your offer, earn trust and connect cleanly to the systems behind your business.', bullets: ['High-conversion websites', 'CMS and commerce builds', 'Performance and accessibility'] },
  { name: 'Mobile Applications', tag: '05 / REACH', icon: Smartphone, title: 'Useful, wherever work happens.', copy: 'Mobile apps that put the right action in the right person’s hands—from field teams to customers.', bullets: ['iOS and Android apps', 'Field and sales workflows', 'Secure API integrations'] },
  { name: 'AI Solutions & Agents', tag: '06 / AUGMENT', icon: Bot, title: 'AI with a place in the workflow.', copy: 'We turn promising AI ideas into focused agents and copilots that save time without adding another silo.', bullets: ['Document and data agents', 'Human-in-the-loop automation', 'Responsible rollout'] },
  { name: 'Automation', tag: '07 / CONNECT', icon: Workflow, title: 'Let the hand-offs happen.', copy: 'Connect the repetitive moments between systems, teams and decisions so momentum is not lost in a spreadsheet.', bullets: ['Workflow mapping', 'API and platform integrations', 'Alerts, approvals and syncs'] },
  { name: 'IT Infrastructure', tag: '08 / FOUNDATION', icon: Server, title: 'A quieter technology layer.', copy: 'Reliable infrastructure and support that gives your people a stable place to do their best work.', bullets: ['Networks and cloud setup', 'Security and maintenance', 'Long-term technical support'] },
  { name: 'Hardware Supply', tag: '09 / EQUIP', icon: Cpu, title: 'The right kit, in the right place.', copy: 'Source and deploy the hardware your operation needs, with one accountable technology partner behind it.', bullets: ['Business devices and servers', 'POS and networking hardware', 'Deployment and aftercare'] },
];

const workViews = {
  'Retail operations': {
    eyebrow: 'FEATURED SYSTEM / RETAIL',
    title: 'One view of a moving shop floor.',
    copy: 'A connected POS, inventory and reporting system for a growing Bangladesh retail group. We replaced scattered updates with a single, useful rhythm of information.',
    statA: '40%', statALabel: 'faster daily reconciliation', statB: '17', statBLabel: 'locations connected',
    core: 'OPERATIONS / 01',
  },
  'Distribution': {
    eyebrow: 'FEATURED SYSTEM / DISTRIBUTION',
    title: 'From dispatch to decision.',
    copy: 'A workflow layer for a distribution business that needed orders, stock movement and field teams to speak the same language.',
    statA: '3.2×', statALabel: 'faster order visibility', statB: '06', statBLabel: 'systems joined',
    core: 'LOGISTICS / 02',
  },
  'Service business': {
    eyebrow: 'FEATURED SYSTEM / SERVICES',
    title: 'A clearer day for every team.',
    copy: 'A customer and job management platform that turns incoming requests into accountable, trackable work across a growing service operation.',
    statA: '98%', statALabel: 'renewal confidence', statB: '24h', statBLabel: 'to first useful signal',
    core: 'SERVICE FLOW / 03',
  },
};

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeWork, setActiveWork] = useState('Retail operations');
  const service = services[activeService];
  const ServiceIcon = service.icon;
  const work = workViews[activeWork];

  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <nav className="site-nav" aria-label="Main navigation">
          <div className="container nav-inner">
            <button className="brand" onClick={() => go('home')} aria-label="BridgeByte home">
              <img src={mark} alt="" />
              <span>Bridge<span>Byte</span></span>
            </button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#approach" onClick={() => setMenuOpen(false)}>How we think</a>
              <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </div>
            <a className="nav-cta" href="mailto:bridgebyte.bd@gmail.com?subject=Let%27s%20talk%20about%20a%20project">Start a conversation <ArrowUpRight size={14} /></a>
            <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker reveal"><span className="pulse-dot" /> Bangladesh / systems partner / 2024—now</div>
            <h1 className="reveal delay-1">Close the gap<br />between <em>business</em><br />and technology.</h1>
            <p className="hero-intro reveal delay-2">BridgeByte connects the systems, data, people and workflows your business depends on—so technology starts doing the work it promised.</p>
            <div className="hero-actions reveal delay-3">
              <a className="button-primary" href="mailto:bridgebyte.bd@gmail.com?subject=I%27d%20like%20to%20talk">Tell us what is stuck <ArrowUpRight size={15} /></a>
              <button className="text-link" onClick={() => go('services')}>See how we help <ArrowDownRight size={15} /></button>
            </div>
            <div className="hero-note">Built for the way Bangladesh does business</div>
          </div>
          <div className="system-visual" aria-label="Connected business systems illustration">
            <svg viewBox="0 0 700 520" role="img" aria-hidden="true">
              <path className="path-base" d="M154 112 C218 130 264 188 320 225" />
              <path className="path-flow" d="M154 112 C218 130 264 188 320 225" />
              <path className="path-base" d="M546 112 C490 138 442 192 380 225" />
              <path className="path-flow" d="M546 112 C490 138 442 192 380 225" />
              <path className="path-base" d="M154 385 C218 360 264 310 320 274" />
              <path className="path-flow" d="M154 385 C218 360 264 310 320 274" />
              <path className="path-base" d="M546 385 C490 360 442 312 380 274" />
              <path className="path-flow" d="M546 385 C490 360 442 312 380 274" />
            </svg>
            <div className="node one"><strong>Sales & CRM</strong><small>people / signal</small></div>
            <div className="node two"><strong>Finance</strong><small>numbers / trust</small></div>
            <div className="node three"><strong>Inventory</strong><small>movement / control</small></div>
            <div className="node four"><strong>Team workflows</strong><small>action / rhythm</small></div>
            <div className="system-core"><img src={mark} alt="" /></div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container">
            <div className="signal"><strong>17+</strong><span>businesses & projects</span></div>
            <div className="signal"><strong>98%</strong><span>retention / satisfaction</span></div>
            <div className="signal"><strong>40%</strong><span>average efficiency gain</span></div>
            <div className="signal"><strong>Dhaka → beyond</strong><span>Bangladesh-first approach</span></div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="BridgeByte principles">
        <div className="container ticker-track">
          <span className="ticker-item">Business context first</span><span className="ticker-item">Practical digital systems</span><span className="ticker-item">Long-term support</span><span className="ticker-item">Less friction, more signal</span>
        </div>
      </div>

      <section className="section bridge-section" id="approach">
        <div className="container bridge-layout">
          <div className="section-heading">
            <div className="eyebrow">The gap is expensive</div>
            <h2>Good businesses get stuck in the hand-offs.</h2>
            <p>A report in one place. A customer note in another. A team that knows the answer, but cannot see the question. We start by finding the joins that matter.</p>
          </div>
          <div className="bridge-list">
            <div className="bridge-row"><span className="num">01</span><h3>Scattered information</h3><p>Turn isolated data into one shared operating picture.</p><ChevronRight size={18} /></div>
            <div className="bridge-row"><span className="num">02</span><h3>Manual repetition</h3><p>Make routine work move between systems without a nudge.</p><ChevronRight size={18} /></div>
            <div className="bridge-row"><span className="num">03</span><h3>Tools that do not fit</h3><p>Shape technology around your people, not the other way around.</p><ChevronRight size={18} /></div>
            <div className="bridge-row"><span className="num">04</span><h3>Growth without visibility</h3><p>Create clear signals for the next decision, not more noise.</p><ChevronRight size={18} /></div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="services-head">
            <div className="section-heading"><div className="eyebrow">The BridgeByte system</div><h2>Pick the pressure point. We will map the rest.</h2></div>
            <p>One partner across software, infrastructure and the spaces between them. Choose a capability to see where it can take your business.</p>
          </div>
          <div className="service-ecosystem">
            <div className="service-menu" role="tablist" aria-label="Services">
              {services.map((item, index) => {
                const Icon = item.icon;
                return <button key={item.name} role="tab" aria-selected={activeService === index} className={`service-tab ${activeService === index ? 'active' : ''}`} onClick={() => setActiveService(index)}><strong>{item.name}</strong><small>{item.tag}</small><Icon size={15} strokeWidth={1.8} /></button>;
              })}
            </div>
            <div className="service-detail" role="tabpanel">
              <div className="service-index">{service.tag} / BRIDGEBYTE CAPABILITY</div>
              <ServiceIcon size={31} strokeWidth={1.3} color="#5c26d9" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>{service.bullets.map((bullet) => <li key={bullet}><Check size={14} color="#176de5" />{bullet}</li>)}</ul>
              <a className="detail-cta" href={`mailto:bridgebyte.bd@gmail.com?subject=${encodeURIComponent(service.name + ' project enquiry')}`}>Talk through this need <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">Under the surface</div><h2>Architecture should feel like a conversation.</h2><p>We do not drop a tool into your business and walk away. We connect the layers—so an action in one place creates useful context in the next.</p></div>
          <div className="arch-map" aria-label="BridgeByte architecture map">
            <div className="arch-line a" /><div className="arch-line b" /><div className="arch-line c" /><div className="arch-line d" />
            <div className="arch-node a"><span>01 / INPUT</span><strong>People</strong><small>customers, teams, partners</small></div>
            <div className="arch-node b"><span>02 / MEMORY</span><strong>Data</strong><small>clean, shared, available</small></div>
            <div className="arch-node c"><span>03 / MOTION</span><strong>Workflows</strong><small>rules, alerts, action</small></div>
            <div className="arch-node d"><span>04 / OUTPUT</span><strong>Decisions</strong><small>visible, timely, useful</small></div>
            <div className="arch-node core"><span>BRIDGEBYTE / CORE</span><strong>Your business</strong><small>one connected operating layer</small></div>
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="container">
          <div className="work-intro">
            <div className="section-heading"><div className="eyebrow">Selected work</div><h2>Technology that earns its place.</h2></div>
            <div className="work-switch" role="tablist" aria-label="Featured work examples">
              {Object.keys(workViews).map((key) => <button key={key} className={activeWork === key ? 'active' : ''} onClick={() => setActiveWork(key)} role="tab" aria-selected={activeWork === key}>{key}</button>)}
            </div>
          </div>
          <div className="case-study">
            <div className="case-art"><div className="case-core"><img src={mark} alt="" /><span>{work.core}</span></div></div>
            <div className="case-copy"><div><div className="eyebrow">{work.eyebrow}</div><h3>{work.title}</h3><p>{work.copy}</p><a className="text-link" href="mailto:bridgebyte.bd@gmail.com?subject=I%27d%20like%20a%20similar%20system">Discuss a similar system <ArrowUpRight size={15} /></a></div><div className="case-stat"><div><strong>{work.statA}</strong><span>{work.statALabel}</span></div><div><strong>{work.statB}</strong><span>{work.statBLabel}</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-copy"><div className="eyebrow">A partner, not a hand-off</div><h2>We stay close to the work.</h2><p>BridgeByte is a Bangladesh-based technology studio for owners and teams who need practical answers. We listen for the operational truth, build with care, then keep showing up after launch.</p><p>Our best work is not the loudest software. It is the morning that runs more clearly, the decision that arrives sooner, and the team that has fewer things to chase.</p><a className="button-primary" href="mailto:bridgebyte.bd@gmail.com?subject=Meet%20BridgeByte">Meet us over email <Mail size={15} /></a></div>
          <div className="trust-stack"><div className="trust-item"><strong>Bangladesh-first insight</strong><span>context matters</span></div><div className="trust-item"><strong>17+ businesses and projects</strong><span>proof in the work</span></div><div className="trust-item"><strong>98% client retention / satisfaction</strong><span>relationships endure</span></div><div className="trust-item"><strong>Long-term support</strong><span>we do not disappear</span></div></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid"><div><div className="eyebrow">Your next useful connection</div><h2>Let’s make the messy part make sense.</h2><p>Tell us what is slowing the business down. A short note is enough to start. We will come back with questions, not a pitch deck.</p></div><div><a className="contact-link" href="mailto:bridgebyte.bd@gmail.com?subject=Let%27s%20make%20the%20messy%20part%20make%20sense">bridgebyte.bd@gmail.com <ArrowUpRight size={20} /></a><div className="hero-note">Dhaka, Bangladesh / working across the country</div></div></div>
          <footer className="footer"><span>© {new Date().getFullYear()} BridgeByte. Smarter systems. Faster growth.</span><div className="footer-links"><a href="#home" onClick={(event) => { event.preventDefault(); go('home'); }}>Back to top</a><a href="#services" onClick={(event) => { event.preventDefault(); go('services'); }}>Services</a></div></footer>
        </div>
      </section>
    </main>
  );
}

export default App;
