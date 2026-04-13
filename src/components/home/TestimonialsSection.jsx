import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    role: "Terapia individual",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote: "Llegar aquí fue la mejor decisión de mi vida. Después de meses sintiéndome perdida, finalmente encontré un espacio donde me sentí completamente escuchada y comprendida. Hoy tengo herramientas reales para manejar mi ansiedad.",
    stars: 5
  },
  {
    name: "Carlos y Ana M.",
    role: "Terapia de pareja",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    quote: "Llegamos al borde de la separación. Gracias al proceso terapéutico, no solo salvamos nuestra relación, sino que la fortalecimos. Aprendimos a comunicarnos de una forma que nunca habíamos imaginado.",
    stars: 5
  },
  {
    name: "Laura P.",
    role: "Terapia individual",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    quote: "Nunca creí que la terapia podría cambiar tanto mi vida. El proceso fue a mi ritmo, sin presiones. Me devolvió la confianza en mí misma que tanto necesitaba.",
    stars: 5
  },
  {
    name: "Familia Rodríguez",
    role: "Terapia familiar",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    quote: "La comunicación en nuestra familia estaba completamente rota. Hoy podemos sentarnos a hablar sin que se convierta en conflicto. Es un cambio enorme que nunca pensé posible.",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="testimonios" className="py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">Historias reales</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Lo que dicen quienes<br />ya recorrieron el camino
          </h2>
        </motion.div>

        {/* Scroll buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button onClick={() => scroll(-1)} className="w-9 h-9 rounded-full border border-[#F0D0E8] flex items-center justify-center hover:bg-[#F8E8F4] transition-colors">
            <ChevronLeft className="w-4 h-4 text-[#C4368C]" />
          </button>
          <button onClick={() => scroll(1)} className="w-9 h-9 rounded-full border border-[#F0D0E8] flex items-center justify-center hover:bg-[#F8E8F4] transition-colors">
            <ChevronRight className="w-4 h-4 text-[#C4368C]" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 flex-shrink-0 snap-start"
              style={{ width: 'min(85vw, 360px)' }}
            >
              <Quote className="w-8 h-8 text-[#E8A0C8] mb-4" />
              <p className="text-[#5C5C5C] leading-relaxed text-base mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-[#2C2C2C]">{t.name}</p>
                  <p className="text-xs text-[#C4368C] uppercase tracking-wide">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="text-[#E060A8]">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}