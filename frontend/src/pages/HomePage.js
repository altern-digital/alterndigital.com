import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Globe,
  Smartphone,
  MonitorCog,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const WA_MAIN =
  "https://wa.me/6282331565165?text=Halo%20PT%20ALTERN%20DIGITAL%20TECHNOLOGIES%2C%20saya%20ingin%20konsultasi.";

/* ─── Geometric SVG Background ─── */
const GeometricBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
        <path
          d="M 80 0 L 0 0 0 80"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
          strokeOpacity="0.05"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />

    {/* Nodes */}
    {[
      [12, 22], [28, 42], [50, 18], [68, 52], [85, 28],
      [22, 65], [48, 72], [72, 78], [8, 48], [60, 38],
      [35, 88], [90, 62],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle
          cx={`${x}%`} cy={`${y}%`} r="3"
          fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.18"
        />
        <circle
          cx={`${x}%`} cy={`${y}%`} r="1"
          fill="white" fillOpacity="0.12"
        />
      </g>
    ))}

    {/* Connector Lines */}
    {[
      [12, 22, 28, 42], [28, 42, 50, 18], [50, 18, 68, 52],
      [68, 52, 85, 28], [28, 42, 22, 65], [22, 65, 48, 72],
      [48, 72, 72, 78], [50, 18, 60, 38], [60, 38, 68, 52],
      [8, 48, 22, 65], [72, 78, 90, 62], [35, 88, 48, 72],
    ].map(([x1, y1, x2, y2], i) => (
      <line
        key={i}
        x1={`${x1}%`} y1={`${y1}%`}
        x2={`${x2}%`} y2={`${y2}%`}
        stroke="white" strokeWidth="0.5" strokeOpacity="0.1"
      />
    ))}
  </svg>
);

/* ─── Data ─── */
const servicesData = [
  {
    slug: "custom-software",
    icon: <Code2 className="w-8 h-8 stroke-1" />,
    title: "Custom Software",
    subtitle: "Pengembangan Software",
    description:
      "Sistem ERP, manajemen, dan aplikasi enterprise yang dibangun sesuai kebutuhan bisnis unik Anda.",
  },
  {
    slug: "web-platform",
    icon: <Globe className="w-8 h-8 stroke-1" />,
    title: "Web & Platform Digital",
    subtitle: "Platform Web",
    description:
      "Company profile, marketplace, portal berita, dan platform digital komersial yang cepat dan responsif.",
  },
  {
    slug: "mobile-app",
    icon: <Smartphone className="w-8 h-8 stroke-1" />,
    title: "Mobile Application",
    subtitle: "Aplikasi Mobile",
    description:
      "Aplikasi Android & iOS native dan cross-platform yang intuitif untuk bisnis modern Anda.",
  },
  {
    slug: "it-consulting",
    icon: <MonitorCog className="w-8 h-8 stroke-1" />,
    title: "IT Consulting",
    subtitle: "Konsultasi IT",
    description:
      "Audit sistem, perencanaan infrastruktur IT, dan strategi transformasi digital bisnis Anda.",
  },
];

const pricingData = [
  {
    name: "Paket Website Profesional",
    price: "Rp 7.500.000",
    description: "Website company profile modern & responsif",
    features: [
      "Design custom & responsif",
      "5 halaman konten",
      "SEO dasar",
      "1 tahun domain & hosting",
      "Panel admin sederhana",
    ],
    waText: "Paket%20Website%20Profesional",
  },
  {
    name: "Paket Aplikasi Mobile",
    price: "Rp 18.000.000",
    description: "Aplikasi Android & iOS custom",
    features: [
      "Android & iOS cross-platform",
      "UI/UX design custom",
      "Integrasi API",
      "3 bulan maintenance",
      "Upload ke App Store/Play Store",
    ],
    waText: "Paket%20Aplikasi%20Mobile",
  },
  {
    name: "Paket Software Custom",
    price: "Rp 25.000.000",
    description: "Sistem manajemen enterprise",
    features: [
      "Analisis kebutuhan mendalam",
      "Development full-stack",
      "Database enterprise",
      "Training pengguna",
      "6 bulan support",
    ],
    waText: "Paket%20Software%20Custom",
  },
  {
    name: "Paket Platform Digital",
    price: "Rp 12.000.000",
    description: "Portal web komersial & marketplace",
    features: [
      "Multi-user & multi-role",
      "Payment gateway",
      "Dashboard admin",
      "Sistem notifikasi",
      "3 bulan support",
    ],
    waText: "Paket%20Platform%20Digital",
  },
];

const portfolioData = [
  {
    title: "SIMRS — Rumah Sakit Regional",
    category: "Custom Software",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Batik Jepara E-Commerce",
    category: "Web Platform",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Koperasi Digital Mobile App",
    category: "Mobile Application",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "ERP Pabrik Furniture Jepara",
    category: "Custom Software",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14431b9?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Portal Berita Jepara Online",
    category: "Web Platform",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Sistem Absensi & Penggajian",
    category: "IT Solution",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=60",
  },
];

/* ─── Component ─── */
export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* ═══ HERO ═══ */}
      <section
        id="beranda"
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
      >
        <GeometricBg />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#AAAAAA] mb-6">
            Est. March 2026 &mdash; Jepara, Jawa Tengah, Indonesia
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Solusi Software &amp; Digital
            <br />
            yang Cepat &amp; Profesional
          </h1>
          <p className="text-[#AAAAAA] text-base md:text-lg tracking-wide mb-12 max-w-2xl mx-auto">
            Custom Software &bull; Web &amp; Platform Digital &bull; Pemrograman
            Komputer &bull; Jepara, Indonesia
          </p>
          <a
            href={WA_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-button"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#EEEEEE] transition-colors duration-200"
          >
            Konsultasi Gratis Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ═══ LAYANAN ═══ */}
      <section
        id="layanan"
        data-testid="services-section"
        className="py-32 bg-black border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-3">
              Layanan / Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Apa yang Kami Kerjakan
            </h2>
            <p className="text-[#AAAAAA] mt-3 text-base md:text-lg">What We Do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                to={`/layanan/${service.slug}`}
                data-testid={`service-card-${service.slug}`}
                className="bg-black p-8 group hover:bg-white/5 transition-colors duration-200 flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="text-white mb-6 group-hover:text-[#AAAAAA] transition-colors duration-200">
                    {service.icon}
                  </div>
                  <p className="text-[#666666] text-xs uppercase tracking-widest mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#666666] text-xs uppercase tracking-widest mt-6 group-hover:text-white transition-colors duration-200">
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUK & HARGA ═══ */}
      <section
        id="harga"
        data-testid="pricing-section"
        className="py-32 bg-black border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-3">
              Produk &amp; Harga / Products &amp; Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Paket Layanan Kami
            </h2>
            <p className="text-[#AAAAAA] mt-3 text-base md:text-lg">Our Service Packages</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.map((pkg, i) => (
              <div
                key={i}
                data-testid={`pricing-card-${i}`}
                className="bg-white p-8 flex flex-col hover:bg-[#f5f5f5] transition-colors duration-200"
              >
                <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-black mb-1">{pkg.price}</p>
                <p className="text-[#666666] text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#333333]">
                      <span className="text-black mt-0.5 font-bold">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/6282331565165?text=Halo%2C%20saya%20tertarik%20dengan%20${pkg.waText}%20PT%20ALTERN%20DIGITAL%20TECHNOLOGIES.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`pricing-wa-btn-${i}`}
                  className="flex items-center justify-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-[#333333] transition-colors duration-200"
                >
                  Pesan via WhatsApp
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TENTANG KAMI ═══ */}
      <section
        id="tentang"
        data-testid="about-section"
        className="py-32 bg-black border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-4">
                Tentang Kami / About Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                PT ALTERN DIGITAL
                <br />
                TECHNOLOGIES
              </h2>
              <p className="text-[#AAAAAA] text-base md:text-lg leading-relaxed mb-6">
                Didirikan pada Maret 2026, kami adalah perusahaan IT consulting
                dan software agency berbasis di Jepara, Jawa Tengah. Kami hadir
                untuk membantu bisnis lokal dan nasional bertransformasi secara
                digital dengan solusi perangkat lunak yang presisi dan andal.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed">
                Founded in March 2026, we are an IT consulting and software
                agency based in Jepara, Central Java. We help local and national
                businesses digitally transform with precision-built software
                solutions. Premium quality, professional delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { number: "10+", label: "Proyek Selesai", labelEN: "Projects Completed" },
                { number: "2026", label: "Tahun Berdiri", labelEN: "Year Founded" },
                { number: "4", label: "Layanan Utama", labelEN: "Core Services" },
                { number: "100%", label: "Kepuasan Klien", labelEN: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} data-testid={`stat-${i}`} className="bg-black p-8">
                  <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-[#AAAAAA] text-sm">{stat.label}</p>
                  <p className="text-[#666666] text-xs mt-0.5">{stat.labelEN}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PORTOFOLIO ═══ */}
      <section
        id="portofolio"
        data-testid="portfolio-section"
        className="py-32 bg-black border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-3">
              Portofolio / Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Proyek Pilihan Kami
            </h2>
            <p className="text-[#AAAAAA] mt-3 text-base md:text-lg">Selected Work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {portfolioData.map((project, i) => (
              <div
                key={i}
                data-testid={`portfolio-item-${i}`}
                className="bg-black group overflow-hidden"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(100%) contrast(1.1)" }}
                  />
                </div>
                <div className="p-6 border-t border-white/10">
                  <p className="text-[#666666] text-xs uppercase tracking-widest mb-2">
                    {project.category} &middot; {project.year}
                  </p>
                  <h3 className="text-white font-semibold text-base">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA KONTAK ═══ */}
      <section
        data-testid="contact-cta-section"
        className="py-32 bg-black border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-4">
            Mulai Sekarang / Get Started
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-[#AAAAAA] text-base md:text-lg mb-12 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan estimasi biaya
            proyek. Ready to start your project? Let&apos;s talk.
          </p>
          <a
            href={WA_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-cta-button"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#EEEEEE] transition-colors duration-200"
          >
            Hubungi via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
