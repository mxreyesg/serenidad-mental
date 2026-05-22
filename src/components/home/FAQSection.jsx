import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo sé si la terapia es para mí?",
    a: "La terapia es para cualquier persona que desee crecer, entenderse mejor o atravesar momentos difíciles con apoyo. No necesitas estar en crisis para pedir ayuda. Si sientes que algo no está bien o simplemente quieres mejorar tu calidad de vida, eso es suficiente razón."
  },
  {
    q: "¿Qué tipo de sesiones ofrecen?",
    a: "Ofrezco sesiones individuales, de pareja y familiares, tanto de forma presencial como por videollamada. Cada sesión dura 60 minutos."
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "Depende de cada persona y de sus objetivos."
  },
  {
    q: "¿La información de mis sesiones es confidencial?",
    a: "Absolutamente. Todo lo que compartas en sesión es completamente confidencial y está protegido por el secreto profesional. Solo en casos donde haya riesgo para tu vida o la de terceros existe la obligación legal de actuar."
  },
  {
    q: "¿Cómo puedo agendar una sesión?",
    a: "Puedes agendar directamente desde esta web, escribirme por WhatsApp, o llamarme. También ofrezco una llamada introductoria gratuita de 20 minutos para que puedas conocerme antes de comprometerte."
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-14">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">Preguntas frecuentes</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Todo lo que quieres saber
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-[#F0D0E8] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FDF5FA] transition-colors"
              >
                <span className="font-medium text-[#2C2C2C] pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[rgba(27,46,60,0.1)] dark:bg-[#2a4a6a]">
                  {open === idx
                    ? <Minus className="w-3 h-3 text-[#1B2E3C] dark:text-[#8AAFC8]" />
                    : <Plus className="w-3 h-3 text-[#1B2E3C] dark:text-[#8AAFC8]" />
                  }
                </span>
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[#5C5C5C] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}