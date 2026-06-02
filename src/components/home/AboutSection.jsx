import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const badges = [
  "5 Años de experiencia",
  "Enfoque Gestalt",
  "Terapia individual y de pareja",
];

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex-shrink-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl"
              style={{ boxShadow: '0 0 0 8px #F0D0E8, 0 20px 60px rgba(0,0,0,0.12)' }}>
              <img
                src="/Gloria_HDZ.jpeg"
                alt="Gloria Hernández"
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs font-medium px-4 py-1.5 rounded-full border border-[#F0D0E8] text-[#5C5C5C] dark:text-[#8AAFC8] dark:border-[#2a4a6a]"
                >
                  {b}
                </span>
              ))}
            </div>

            <p className="text-[#5C5C5C] dark:text-[#8AAFC8] leading-relaxed text-base">
              Soy Gloria Hernández, psicóloga y psicoterapeuta con formación en Gestalt y enfoque humanista. Mi trabajo nace de la convicción de que cada persona tiene en sí misma la capacidad de sanar, crecer y reconectarse con quien realmente es.
            </p>

            <p className="text-[#5C5C5C] dark:text-[#8AAFC8] leading-relaxed text-base">
              Acompaño procesos individuales y de pareja desde un espacio de confianza, respeto y presencia. Mi forma de trabajar integra la experiencia emocional, la conciencia del cuerpo y la exploración de los vínculos, para que puedas comprender lo que vives y habitarte con mayor autenticidad.
            </p>

            <p className="text-[#5C5C5C] dark:text-[#8AAFC8] leading-relaxed text-base">
              Creo en la terapia como un espacio de encuentro genuino, donde el ritmo lo marcas tú y el proceso se construye juntos.
            </p>

            <Link to="/sobre-mi">
              <button className="flex items-center gap-2 text-sm font-medium text-[#1B2E3C] dark:text-[#E8EFF5] hover:gap-3 transition-all duration-300 mt-2">
                Conoce más sobre mí <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
