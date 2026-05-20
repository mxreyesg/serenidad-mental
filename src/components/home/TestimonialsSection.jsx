import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Odalys Gaytan",
    role: "Terapia individual",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote: "Encontrar este espacio llegó en el mejor momento. Poco a poco me ha ayudado a recuperar mi confianza, mi valor y volver a enfocarme en mí y en quien realmente soy. Lo más bonito es que todo ha sido a mi ritmo, sin presiones, en un lugar donde me siento libre de expresarme sin ser juzgada. Y cada día me siento mejor conmigo misma.",
    stars: 5
  },
  {
    name: "Rosa Linda Ortíz",
    role: "Terapia individual",
    avatar: "/Rosa_linda_Ortiz.jpeg",
    quote: "Busqué ayuda con urgencia porque no podía con el comportamiento de mi hijo el más pequeño y terminé por descubrir que la que tenía varios temas que trabajar era yo como persona y madre de familia. Estoy muy contenta con el resultado ya que el comportamiento de mi hijo cambió notoriamente, mi matrimonio ha mejorado lo suficiente como para seguir adelante y retomé la maternidad con amor. Sin dudarlo la mejor decisión que he tomado, me ayuda día con día poniendo en práctica lo trabajado en terapia y en la toma de decisiones diarias.",
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
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500 flex-shrink-0 snap-start flex flex-col"
              style={{ width: 'min(85vw, 360px)' }}
            >
              <Quote className="w-8 h-8 text-[#E8A0C8] mb-4" />
              <p className="text-[#5C5C5C] leading-relaxed text-base italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-6">
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