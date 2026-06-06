import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/bridgebyte-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="BridgeByte logo" className="h-10 w-10 object-contain" />
              <span className="font-heading text-xl font-bold">
                Bridge<span className="text-accent">Byte</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              AI-powered business software for growing companies in Bangladesh. We build systems that help you work smarter.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">POS & Inventory</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CRM & Dashboards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AI Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><Mail size={14} className="text-accent" /> hello@bridgebyte.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +880 1814-201601</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="text-accent mt-0.5" /> Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">© 2026 BridgeByte. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
