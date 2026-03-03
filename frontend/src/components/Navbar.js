import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WA_MAIN =
  "https://wa.me/6282331565165?text=Halo%20PT%20ALTERN%20DIGITAL%20TECHNOLOGIES%2C%20saya%20ingin%20konsultasi.";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk & Harga", href: "#harga" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "instant" });
      }, 150);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 w-full z-50 bg-black transition-colors duration-200 ${
        scrolled ? "border-b border-white/15" : "border-b border-white/5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" data-testid="navbar-logo" className="flex flex-col leading-none">
          <span className="text-white font-bold text-xl tracking-[0.15em] uppercase">
            ALTERN DIGITAL
          </span>
          <span className="text-[#666666] text-[10px] tracking-[0.1em] uppercase mt-0.5">
            PT ALTERN DIGITAL TECHNOLOGIES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              data-testid={`nav-link-${link.href.replace("#", "")}`}
              className="text-[#AAAAAA] text-xs uppercase tracking-widest hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <a
            href={WA_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-cta-button"
            className="border border-white text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-colors duration-200"
          >
            Mulai Proyek
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[#AAAAAA] text-sm uppercase tracking-widest hover:text-white transition-colors duration-200 text-left"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-xs uppercase tracking-widest px-6 py-3 text-center hover:bg-white hover:text-black transition-colors duration-200 mt-2"
          >
            Mulai Proyek
          </a>
        </div>
      )}
    </nav>
  );
}
