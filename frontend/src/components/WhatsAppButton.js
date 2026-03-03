import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_MAIN =
  "https://wa.me/6282331565165?text=Halo%20PT%20ALTERN%20DIGITAL%20TECHNOLOGIES%2C%20saya%20ingin%20konsultasi.";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_MAIN}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-white text-black px-5 py-3 hover:bg-[#EEEEEE] transition-colors duration-200"
      style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
    >
      <MessageCircle className="w-4 h-4 flex-shrink-0" />
      <span className="text-xs font-bold uppercase tracking-wider">Chat WhatsApp</span>
      <ArrowRight className="w-3 h-3 flex-shrink-0" />
    </a>
  );
}
