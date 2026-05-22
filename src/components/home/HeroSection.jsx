import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden pt-20">
      {/* Blob rosa — solo visible en modo claro vía clase dark:hidden de Tailwind */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full rounded-bl-[80px] hidden lg:block dark:hidden"
        style={{ background: 'rgba(248,232,244,0.25)' }}
      />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#E060A8' }} />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#FFE066' }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-16 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8 w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-8xl font-bold text-[#1B2E3C] dark:text-[#E8EFF5] leading-tight"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            <span className="block">Una experiencia de calidez,</span>
            <span className="block">
              empatía y conciencia en
              <span style={{
                background: 'linear-gradient(90deg, #7B3FBE 0%, #9B59C5 25%, #C87DB0 60%, #E8A8B8 85%, #F2C4C4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
              }}> terapia.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#5C5C5C] dark:text-[#8AAFC8] max-w-2xl mx-auto text-base lg:text-lg leading-relaxed mt-6"
          >
            Creo en la terapia como un espacio para volver a ti.<br />
            Desde la Gestalt, te acompaño a comprender lo que sientes, habitarte con mayor autenticidad y construir una vida más consciente y congruente contigo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a href="https://confirmafy.com/gloria-hernandez" target="_blank" rel="noreferrer">
              <button
                className="group flex items-center gap-3 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide uppercase"
                style={{ backgroundColor: '#1B2E3C' }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>
                Agenda tu primera sesión gratis (20 min)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="#servicios">
              <button className="flex items-center gap-2 text-[#5C5C5C] dark:text-[#8AAFC8] px-8 py-4 rounded-full border border-[#1B2E3C]/30 dark:border-[#8AAFC8]/30 hover:border-[#1B2E3C] dark:hover:border-[#8AAFC8] hover:text-[#1B2E3C] dark:hover:text-[#E8EFF5] font-medium transition-all duration-300">
                Ver servicios
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-4 pt-4 justify-center flex-wrap"
          >
            <div className="text-center">
              <p className="text-2xl font-light text-[#2C2C2C] dark:text-[#E8EFF5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5</p>
              <p className="text-[10px] text-[#8C8C8C] dark:text-[#5a7a94] uppercase tracking-wider leading-tight">Años de<br/>experiencia</p>
            </div>
            <div className="w-px h-8 bg-[#1B2E3C]/20 dark:bg-[#E8EFF5]/20 flex-shrink-0" />
            <div className="text-center">
              <p className="text-2xl font-light text-[#2C2C2C] dark:text-[#E8EFF5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>500+</p>
              <p className="text-[10px] text-[#8C8C8C] dark:text-[#5a7a94] uppercase tracking-wider leading-tight">Horas de<br/>acompañamiento</p>
            </div>
            <div className="w-px h-8 bg-[#1B2E3C]/20 dark:bg-[#E8EFF5]/20 flex-shrink-0" />
            <div className="text-center">
              <p className="text-2xl font-light text-[#2C2C2C] dark:text-[#E8EFF5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>100+</p>
              <p className="text-[10px] text-[#8C8C8C] dark:text-[#5a7a94] uppercase tracking-wider leading-tight">Personas<br/>acompañadas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
