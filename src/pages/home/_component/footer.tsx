import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#" },
  { label: "Dashboard", href: "/overview" },
  { label: "Mobile App", href: "#mobile-app" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Community", href: "https://github.com/voiceyBill/voiceyBill-web/discussions" },
  { label: "Changelog", href: "https://github.com/voiceyBill/voiceyBill-web/releases" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-24">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="VoiceyBill" className="w-8 h-8 rounded-full object-cover shrink-0" />
              <span className="font-display font-bold text-2xl">VoiceyBill</span>
            </div>
            <p className="text-zinc-500 mb-8">
              Expense tracking with voice input, receipt scanning, and real-time spend analytics.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => window.open("https://github.com/voiceyBill/voiceyBill-web", "_blank")}
                className="text-zinc-500 hover:text-[#9FFF59] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("https://twitter.com", "_blank")}
                className="text-zinc-500 hover:text-[#9FFF59] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="text-zinc-500 hover:text-[#9FFF59] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-600">
              Product
            </h4>
            <ul className="space-y-4 text-zinc-400">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-600">
              Resources
            </h4>
            <ul className="space-y-4 text-zinc-400">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => window.open(href, "_blank")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-600">
              Legal
            </h4>
            <ul className="space-y-4 text-zinc-400">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <div className="text-zinc-600 text-sm">© 2025 VoiceyBill. All rights reserved.</div>
          <div className="flex items-center gap-2 text-zinc-600 font-bold">
            <span className="text-[#9FFF59] italic">Track smarter.</span> Spend wiser.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
