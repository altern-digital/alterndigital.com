import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Code2, Globe, Smartphone, MonitorCog } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

/* ─── Services Detail Data ─── */
const servicesDetail = {
  "custom-software": {
    icon: <Code2 className="w-12 h-12 stroke-1" />,
    title: "Custom Software Development",
    titleID: "Pengembangan Software Custom",
    tagline: "Enterprise systems built precisely for your business",
    taglineID: "Sistem enterprise yang dibangun sesuai kebutuhan bisnis Anda",
    description:
      "Kami mengembangkan perangkat lunak bisnis yang dirancang khusus sesuai kebutuhan operasional perusahaan Anda. Dari sistem ERP, CRM, manajemen gudang, hingga aplikasi internal — kami membangun solusi yang benar-benar bekerja untuk Anda.",
    descEN:
      "We develop business software specifically designed for your company's operational needs. From ERP, CRM, warehouse management to internal applications — we build solutions that truly work for you.",
    features: [
      "Analisis kebutuhan & dokumentasi spesifikasi",
      "Desain arsitektur sistem & database",
      "Pengembangan full-stack (frontend & backend)",
      "Integrasi dengan sistem yang sudah ada",
      "Testing & quality assurance menyeluruh",
      "Deployment & konfigurasi server",
      "Training tim pengguna",
      "Support & maintenance pasca-launch",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Analisis mendalam kebutuhan bisnis dan proses operasional" },
      { step: "02", title: "Design", desc: "Perancangan arsitektur sistem dan antarmuka pengguna" },
      { step: "03", title: "Development", desc: "Coding dan pengembangan fitur secara iteratif" },
      { step: "04", title: "Testing", desc: "Quality assurance dan user acceptance testing" },
      { step: "05", title: "Launch", desc: "Deployment, training, dan go-live" },
      { step: "06", title: "Support", desc: "Maintenance dan dukungan teknis berkelanjutan" },
    ],
    technologies: ["React", "Node.js / Python", "PostgreSQL / MySQL", "REST API", "Docker", "Linux Server"],
    waText: "Paket%20Software%20Custom",
  },

  "web-platform": {
    icon: <Globe className="w-12 h-12 stroke-1" />,
    title: "Web & Platform Digital",
    titleID: "Platform Web & Digital",
    tagline: "Fast, professional websites and digital platforms",
    taglineID: "Website dan platform digital yang cepat dan profesional",
    description:
      "Kami membangun website company profile, portal digital, marketplace, dan platform web komersial yang cepat, responsif, dan dirancang untuk konversi. Dari desain hingga deployment — kami tangani semuanya.",
    descEN:
      "We build company profile websites, digital portals, marketplaces, and commercial web platforms that are fast, responsive, and designed for conversion. From design to deployment — we handle everything.",
    features: [
      "Desain UI/UX custom dan responsif",
      "Website company profile profesional",
      "Marketplace dan platform e-commerce",
      "Portal berita dan CMS (Content Management System)",
      "Optimasi kecepatan & performa (Core Web Vitals)",
      "SEO on-page & technical SEO",
      "Integrasi payment gateway",
      "Analytics dan reporting dashboard",
    ],
    process: [
      { step: "01", title: "Brief", desc: "Pengumpulan kebutuhan dan referensi desain" },
      { step: "02", title: "Wireframe", desc: "Pembuatan wireframe dan prototype interaktif" },
      { step: "03", title: "Design", desc: "Desain visual hi-fidelity final" },
      { step: "04", title: "Development", desc: "Coding frontend dan backend" },
      { step: "05", title: "Testing", desc: "Uji lintas browser dan perangkat" },
      { step: "06", title: "Launch", desc: "Go-live dan optimasi performa" },
    ],
    technologies: ["React / Next.js", "Node.js", "MongoDB / PostgreSQL", "Tailwind CSS", "Nginx", "CDN"],
    waText: "Paket%20Platform%20Digital",
  },

  "mobile-app": {
    icon: <Smartphone className="w-12 h-12 stroke-1" />,
    title: "Mobile Application",
    titleID: "Aplikasi Mobile",
    tagline: "Native and cross-platform apps for Android & iOS",
    taglineID: "Aplikasi Android & iOS native dan cross-platform",
    description:
      "Kami mengembangkan aplikasi mobile Android dan iOS yang intuitif, performa tinggi, dan sesuai standar App Store dan Google Play Store. Dari ide hingga rilis — kami wujudkan aplikasi impian bisnis Anda.",
    descEN:
      "We develop intuitive, high-performance Android and iOS mobile applications that meet App Store and Google Play Store standards. From concept to release — we make your business app a reality.",
    features: [
      "Aplikasi Android & iOS (cross-platform)",
      "UI/UX design custom untuk mobile",
      "Integrasi REST API dan backend",
      "Push notification & in-app messaging",
      "Autentikasi (OTP, biometric, social login)",
      "Offline mode dan local storage",
      "Upload ke App Store & Google Play Store",
      "3 bulan maintenance pasca-rilis",
    ],
    process: [
      { step: "01", title: "Research", desc: "Riset pengguna dan analisis kompetitor" },
      { step: "02", title: "UX Design", desc: "User flow, wireframe, dan prototype" },
      { step: "03", title: "UI Design", desc: "Desain visual komponen dan screen" },
      { step: "04", title: "Development", desc: "Coding aplikasi dan integrasi API" },
      { step: "05", title: "QA Testing", desc: "Testing di berbagai perangkat fisik" },
      { step: "06", title: "Publish", desc: "Submit ke App Store & Play Store" },
    ],
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Firebase", "REST API"],
    waText: "Paket%20Aplikasi%20Mobile",
  },

  "it-consulting": {
    icon: <MonitorCog className="w-12 h-12 stroke-1" />,
    title: "IT Consulting",
    titleID: "Konsultasi IT",
    tagline: "Strategic IT planning and digital transformation",
    taglineID: "Perencanaan IT strategis dan transformasi digital",
    description:
      "Kami membantu bisnis Anda merencanakan dan mengeksekusi strategi IT yang tepat. Dari audit sistem, perencanaan infrastruktur, hingga roadmap transformasi digital — kami adalah mitra IT terpercaya Anda.",
    descEN:
      "We help your business plan and execute the right IT strategy. From system audits, infrastructure planning, to digital transformation roadmaps — we are your trusted IT partner.",
    features: [
      "Audit sistem dan infrastruktur IT saat ini",
      "Perencanaan arsitektur teknologi bisnis",
      "Roadmap transformasi digital",
      "Evaluasi dan pemilihan teknologi yang tepat",
      "Optimasi proses bisnis berbasis IT",
      "Keamanan data dan cybersecurity dasar",
      "Pelatihan tim internal",
      "Pendampingan implementasi sistem baru",
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Audit kondisi IT dan infrastruktur saat ini" },
      { step: "02", title: "Analysis", desc: "Analisis gap dan peluang perbaikan" },
      { step: "03", title: "Strategy", desc: "Penyusunan strategi dan roadmap IT" },
      { step: "04", title: "Proposal", desc: "Presentasi rekomendasi dan estimasi biaya" },
      { step: "05", title: "Implementation", desc: "Pendampingan eksekusi rencana IT" },
      { step: "06", title: "Review", desc: "Evaluasi dan optimasi berkelanjutan" },
    ],
    technologies: [
      "Cloud (AWS / GCP)",
      "Linux Server",
      "Network Infrastructure",
      "Security Audit Tools",
      "Project Management",
      "Technical Documentation",
    ],
    waText: "Konsultasi%20IT",
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesDetail[slug];

  if (!service) {
    return (
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-white">
          <div className="text-center px-6">
            <p className="text-[#666666] text-xs uppercase tracking-[0.3em] mb-4">
              404 Not Found
            </p>
            <h1 className="text-4xl font-bold mb-6">Halaman tidak ditemukan</h1>
            <Link
              to="/"
              className="border border-white text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* ═══ HERO ═══ */}
      <section
        data-testid="service-detail-hero"
        className="pt-40 pb-24 bg-black border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <Link
            to="/"
            data-testid="back-to-home"
            className="inline-flex items-center gap-2 text-[#AAAAAA] text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-3 h-3" />
            Kembali ke Beranda / Back to Home
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="text-white flex-shrink-0">{service.icon}</div>
            <div>
              <p className="text-[#666666] text-xs uppercase tracking-[0.2em] mb-3">
                {service.tagline}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-3">
                {service.title}
              </h1>
              <p className="text-[#AAAAAA] text-lg md:text-xl">{service.titleID}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DESCRIPTION ═══ */}
      <section
        data-testid="service-detail-description"
        className="py-24 border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-[#666666] text-sm leading-relaxed">{service.descEN}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-6">
              Yang Kami Kerjakan / What We Do
            </p>
            <ul className="space-y-3">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[#AAAAAA] text-sm">
                  <span className="text-white mt-0.5 font-bold">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section
        data-testid="service-detail-process"
        className="py-24 border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-3">
            Proses Kerja / Our Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Bagaimana Kami Bekerja
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {service.process.map((step, i) => (
              <div key={i} className="bg-black p-6">
                <p className="text-[#333333] text-3xl font-bold mb-4">{step.step}</p>
                <p className="text-white font-semibold text-sm mb-2">{step.title}</p>
                <p className="text-[#AAAAAA] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section
        data-testid="service-detail-technologies"
        className="py-24 border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-6">
            Teknologi / Technologies
          </p>
          <div className="flex flex-wrap gap-px bg-white/10 w-fit">
            {service.technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-black px-6 py-4 text-[#AAAAAA] text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section data-testid="service-detail-cta-section" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#666666] mb-4">
            Mulai Sekarang / Get Started
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Tertarik dengan Layanan Ini?
          </h2>
          <p className="text-[#AAAAAA] text-base md:text-lg mb-12 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan estimasi biaya
            proyek Anda. Contact us for a free consultation and project
            estimation.
          </p>
          <a
            href={`https://wa.me/6282331565165?text=Halo%2C%20saya%20tertarik%20dengan%20${service.waText}%20PT%20ALTERN%20DIGITAL%20TECHNOLOGIES.`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="service-detail-cta"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#EEEEEE] transition-colors duration-200"
          >
            Konsultasi via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
