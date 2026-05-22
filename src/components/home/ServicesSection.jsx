import { motion } from "framer-motion";
import { Heart, Users, Home, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description: "Un espacio para hacer conciencia de tu experiencia, reconociendo emociones, patrones y formas de relacionarte contigo mismo y con los demás.",
    price: "$600",
    priceNote: "por sesión",
    duration: "60 min",
    color: "rgba(255,253,231,0.8)",
    accent: "#1B2E3C",
    image: "/Terapia individual.png"
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description: "Un espacio para hacer conciencia de cómo se vive la relación, reconociendo dinámicas, emociones y formas de encuentro entre ustedes.",
    price: "$1,000",
    priceNote: "por sesión",
    duration: "60 min",
    color: "rgba(255,253,231,0.8)",
    accent: "#1B2E3C",
    image: "/Terapia de pareja.png"
  },
  {
    icon: Home,
    title: "Terapia Familiar",
    description: "Abordamos dinámicas familiares complejas para crear un ambiente de comprensión, respeto y amor genuino.",
    price: "$1,500",
    priceNote: "por sesión",
    duration: "60 min",
    color: "rgba(255,253,231,0.8)",
    accent: "#1B2E3C",
    image: "/Terapia familiar.png"
  },
  {
    icon: Sparkles,
    title: "Talleres Grupales",
    description: "Experiencias guiadas de crecimiento personal, manejo del estrés, mindfulness y habilidades relacionales.",
    price: "Bajo cotización",
    priceNote: "",
    duration: "Variable",
    color: "rgba(255,253,231,0.8)",
    accent: "#1B2E3C",
    image: "/Terapia Grupal.png"
  }
];

export default function ServicesSection() {

  return (
    <section id="servicios" className="py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">Cómo puedo acompañarte</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group rounded-3xl overflow-hidden border border-[#F0D0E8] hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.accent }} />
                  </div>
                </div>
                <div className="p-7 bg-[#FFFDF5] dark:bg-[#1a2e42] transition-colors duration-300">
                  <h3 className="text-2xl font-light mb-2 text-[#2C2C2C] dark:text-[#E8EFF5]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 text-[#5C5C5C] dark:text-[#8AAFC8]">{service.description}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif', color: service.accent }}>{service.price}</span>
                    {service.price !== "Bajo cotización" && <span className="text-xs ml-1 text-[#8C8C8C] dark:text-[#5a7a94]">MXN</span>}
                    {service.priceNote && <span className="text-xs text-[#8C8C8C] dark:text-[#5a7a94]">{service.priceNote}</span>}
                  </div>
                  <p className="text-xs text-[#8C8C8C] dark:text-[#5a7a94] mb-6">Duración: {service.duration}</p>
                  <div className="flex gap-3 justify-between">
                    <a href="https://confirmafy.com/gloria-hernandez" target="_blank" rel="noreferrer">
                      <button
                        className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                        style={{ backgroundColor: service.accent }}
                      >
                        Reservar <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </a>
                    <a href="#proceso">
                      <button className="text-sm font-medium px-5 py-2.5 rounded-full border transition-colors text-[#5C5C5C] dark:text-[#E8EFF5] border-[#1B2E3C] dark:border-[#8AAFC8] dark:bg-[#1e3448] hover:bg-[#f0e9dc] dark:hover:bg-[#264560]">
                        Más info
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}