import { motion } from "framer-motion";
import { ArrowLeft, Heart, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";



export default function Agenda() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="bg-white border-b border-[#F0E9DC] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to={createPageUrl("Home")}>
            <button className="flex items-center gap-2 text-[#5C5C5C] hover:text-[#2C2C2C] transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Volver
            </button>
          </Link>
          <div className="flex items-center gap-3 mx-auto">
            <div>
              <img
                src="/logo.png"
              alt="gh logo"
              className="h-12 w-auto object-contain"
              />
            </div>
            <span className="font-light text-[#2C2C2C] text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Gloria Hernández
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="w-20 h-20 rounded-full bg-[#EEF4EE] flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10 text-[#8FAF8F]" />
          </div>
          <h1 className="text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Agenda tu sesión
          </h1>
          <p className="text-[#5C5C5C] leading-relaxed max-w-sm mx-auto">
            Contáctame directamente para agendar tu cita. Respondo en menos de 24 horas.
          </p>

          <div className="bg-white rounded-3xl p-8 space-y-5 text-left shadow-sm border border-[#F0E9DC]">
            <a href="mailto:hola@terapia-bienestar.com" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#EEF4EE] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#EEF4EE] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#8FAF8F]" />
              </div>
              <div>
                <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">Email</p>
                <p className="text-[#2C2C2C] font-medium">hola@terapia-bienestar.com</p>
              </div>
            </a>
            <a href="tel:+528126217873" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#EEF4EE] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#EEF4EE] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#8FAF8F]" />
              </div>
              <div>
                <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">Teléfono</p>
                <p className="text-[#2C2C2C] font-medium">+52 (812) 621-7873</p>
              </div>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#EEF4EE] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#EEF4EE] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#8FAF8F]" />
              </div>
              <div>
                <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">WhatsApp</p>
                <p className="text-[#2C2C2C] font-medium">Escríbeme por WhatsApp</p>
              </div>
            </a>
          </div>

          <Link to={createPageUrl("Home")}>
            <button className="text-[#5C5C5C] hover:text-[#8FAF8F] transition-colors text-sm">
              ← Volver al inicio
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}