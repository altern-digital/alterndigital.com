import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      data-testid="footer"
      className="bg-black border-t border-white/10 pt-16 pb-8"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="text-white font-bold text-xl tracking-[0.15em] uppercase">
                ALTERN DIGITAL
              </p>
              <p className="text-[#666666] text-[10px] tracking-wider uppercase mt-1">
                PT ALTERN DIGITAL TECHNOLOGIES
              </p>
            </div>
            <p className="text-[#AAAAAA] text-sm leading-relaxed">
              IT Consulting & Software Agency
              <br />
              Jepara, Jawa Tengah, Indonesia
              <br />
              Est. March 2026
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Kontak / Contact
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/6282331565165"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="flex items-start gap-3 text-[#AAAAAA] text-sm hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 stroke-1" />
                <span>+62 823 3156 5165</span>
              </a>
              <a
                href="mailto:alterndigitaltechnologies5@gmail.com"
                data-testid="footer-email"
                className="flex items-start gap-3 text-[#AAAAAA] text-sm hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 stroke-1" />
                <span>alterndigitaltechnologies5@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#AAAAAA] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 stroke-1" />
                <span>
                  Jl. Beringin Raya, Dermolo RT 001 RW 002,
                  <br />
                  Kembang, Jepara, Jawa Tengah 59453
                </span>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Layanan / Services
            </p>
            <div className="space-y-2">
              {[
                { slug: "custom-software", label: "Custom Software Development" },
                { slug: "web-platform", label: "Web & Platform Digital" },
                { slug: "mobile-app", label: "Mobile Application" },
                { slug: "it-consulting", label: "IT Consulting" },
              ].map((s) => (
                <Link
                  key={s.slug}
                  to={`/layanan/${s.slug}`}
                  data-testid={`footer-link-${s.slug}`}
                  className="block text-[#AAAAAA] text-sm hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#666666] text-xs">
            &copy; 2026 PT ALTERN DIGITAL TECHNOLOGIES. All rights reserved.
          </p>
          <p className="text-[#666666] text-xs">
            IT Consulting &amp; Software Agency — Jepara, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
