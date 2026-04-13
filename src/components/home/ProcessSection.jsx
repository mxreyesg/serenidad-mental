import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Llamada de introducción",
    description: "Comenzamos con una llamada gratuita de 20 minutos para conocernos, entender tus necesidades y resolver tus dudas sin compromiso.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80"
  },
  {
    number: "2",
    title: "Evaluación y planificación",
    description: "En las primeras sesiones, exploramos tu historia, tus objetivos y diseñamos juntos un plan terapéutico personalizado.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
  },
  {
    number: "3",
    title: "Proceso terapéutico",
    description: "Trabajamos a tu ritmo, con sesiones regulares donde construimos herramientas, procesamos emociones y avanzamos hacia tus metas.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&q=80"
  },
  {
    number: "4",
    title: "Seguimiento y consolidación",
    description: "Revisamos tus avances, ajustamos el proceso según sea necesario y preparamos el cierre del proceso de manera gradual y consciente.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&q=80"
  }
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">El camino</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Cómo funciona el proceso
          </h2>
          <p className="mt-4 text-[#5C5C5C] max-w-xl mx-auto leading-relaxed">
            Cada paso está diseñado para que te sientas seguro/a, informado/a y acompañado/a en todo momento.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden h-72">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#C4368C]/10" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <span
                  className="text-8xl font-bold block dark:text-[#D4A5C8]/60"
                  style={{ color: '#D4A5C8' }}
                >
                  {step.number}
                </span>
                <h3 className="text-3xl font-light text-[#2C2C2C] -mt-8">
                  {step.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed text-lg">{step.description}</p>
                <div className="w-12 h-0.5 bg-[#C4368C]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}