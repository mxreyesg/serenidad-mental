import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm"; // 👈 reemplaza con tu clave de web3forms.com

export default function ContactSection() {
  return (
    <section id="contacto" className="py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">Escríbeme</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Da el primer paso hoy
          </h2>
          <p className="mt-4 text-[#5C5C5C] max-w-lg mx-auto">
            No estás solo/a. Estoy aquí para acompañarte. Escríbeme y responderé en menos de 24 horas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-3xl p-8 space-y-6" style={{ backgroundColor: '#F8E8F4' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#2a0a18] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-[#C4368C] dark:text-[#F5A3D0]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#8C8C8C' }}>Email</p>
                  <a href="mailto:contacto@gloriahernandez.mx" className="transition-colors" style={{ color: '#2C2C2C' }}>
                    contacto@gloriahernandez.mx
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#2a0a18] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 text-[#C4368C] dark:text-[#F5A3D0]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#8C8C8C' }}>WhatsApp</p>
                  <a
                    href="https://wa.me/528126217873"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors w-fit"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#2a0a18] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#C4368C] dark:text-[#F5A3D0]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#8C8C8C' }}>Ubicación</p>
                  <p style={{ color: '#2C2C2C' }}>Juárez, N.L.</p>
                  <p className="text-sm text-[#C4368C] mt-1">También disponible online</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-[#8C8C8C] uppercase tracking-wide mb-4">Horario de atención</p>
              <div className="space-y-2">
                {[
                  { day: "Lunes – Viernes", hours: "17:00 – 20:00" },
                  { day: "Sábados", hours: "11:00 – 18:00" },
                  { day: "Domingos", hours: "Cerrado" }
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between py-2 border-b border-[#F0D0E8]">
                    <span className="text-[#5C5C5C]">{day}</span>
                    <span className="font-medium text-[#2C2C2C]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}