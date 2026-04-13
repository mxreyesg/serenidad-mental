import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "senales-de-que-necesitas-terapia",
    title: "5 señales de que podrías beneficiarte de la terapia",
    excerpt: "Muchas veces ignoramos las señales que nuestro bienestar mental nos envía. Explorar esas señales puede ser el primer paso hacia una vida más plena.",
    category: "general",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80",
    date: "15 Feb 2026",
    content: `
Vivimos en una sociedad que nos enseña a "aguantar" y seguir adelante, minimizando muchas veces lo que sentimos por dentro. Sin embargo, hay momentos en que nuestra mente y nuestro cuerpo nos envían señales de que algo necesita atención. Reconocerlas es el primer paso hacia el bienestar.

**1. Te sientes desbordado/a con frecuencia**

Si el estrés del día a día te supera constantemente, si las pequeñas situaciones te generan una reacción emocional intensa o te cuesta recuperarte de los contratiempos, tu sistema nervioso puede estar agotado. Un espacio terapéutico te ayuda a entender qué hay detrás de esa sensación y a desarrollar recursos para manejarla.

**2. Tus relaciones se están viendo afectadas**

Cuando el malestar interno empieza a impactar cómo te relacionas con los demás —ya sea con tu pareja, familia, amigos o compañeros de trabajo— es una señal importante. Los conflictos frecuentes, el aislamiento o la dificultad para comunicarte son indicadores de que algo merece ser explorado.

**3. Hay pensamientos que no puedes silenciar**

Los pensamientos intrusivos, la rumiación constante, la autocrítica extrema o el miedo persistente son señales de que tu mente necesita apoyo. No tienes que cargar con eso solo/a.

**4. Tu cuerpo lo está expresando**

El malestar emocional a menudo se manifiesta físicamente: dolores de cabeza frecuentes, tensión muscular, problemas para dormir, fatiga inexplicable o cambios en el apetito. El cuerpo habla cuando no encontramos palabras.

**5. Sientes que estás "atascado/a"**

Si tienes la sensación de dar vueltas en círculos, de repetir patrones que no te hacen bien, o de no poder avanzar en ciertas áreas de tu vida, la terapia puede ofrecerte una perspectiva nueva y herramientas concretas para romper ese ciclo.

**No necesitas estar en crisis para pedir ayuda**

Uno de los mayores mitos en torno a la salud mental es que la terapia es solo para "casos graves". La realidad es que todos podemos beneficiarnos de un espacio de reflexión y acompañamiento profesional. Pedir ayuda no es debilidad: es uno de los actos más valientes que puedes hacer por ti mismo/a.

Si te has identificado con alguna de estas señales, te invito a dar ese primer paso. Estoy aquí para acompañarte.
    `
  },
  {
    slug: "mindfulness-para-principiantes",
    title: "Mindfulness para principiantes: empieza hoy",
    excerpt: "La atención plena no requiere horas de práctica. Aprende técnicas simples para incorporar el mindfulness en tu rutina diaria.",
    category: "mindfulness",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    date: "28 Ene 2026",
    content: `
El mindfulness, o atención plena, es la práctica de enfocar tu conciencia en el momento presente de manera intencional y sin juzgar. Aunque tiene raíces en las tradiciones budistas, hoy en día es ampliamente utilizado en psicología y medicina como herramienta para reducir el estrés, la ansiedad y mejorar el bienestar general.

**¿Por qué practicar mindfulness?**

Nuestra mente tiende a vagar constantemente entre el pasado (recuerdos, arrepentimientos) y el futuro (preocupaciones, planes). Esta tendencia, aunque natural, nos desconecta del único momento en que realmente vivimos: el ahora. El mindfulness entrena la mente para volver al presente una y otra vez.

**Técnica 1: Respiración consciente (5 minutos)**

Siéntate en un lugar cómodo. Cierra los ojos o baja la mirada. Lleva tu atención a tu respiración: siente cómo el aire entra por la nariz, llena tus pulmones y sale. Cuando notes que tu mente se dispersa —y lo hará— simplemente vuelve a la respiración sin juzgarte. Eso es todo. No hay que "vaciar la mente", solo volver.

**Técnica 2: Body scan o escaneo corporal**

Acuéstate o siéntate cómodamente. Lleva tu atención lentamente desde la cabeza hasta los pies, observando las sensaciones en cada parte del cuerpo sin intentar cambiarlas. ¿Hay tensión? ¿Calor? ¿Pesadez? Solo observa. Esta práctica es especialmente útil antes de dormir.

**Técnica 3: Mindfulness en actividades cotidianas**

No necesitas meditar formalmente para practicar mindfulness. Puedes lavarte los dientes prestando atención a cada sensación, comer sin pantallas ni distracciones, o caminar notando cada paso. El mindfulness informal es igualmente poderoso.

**Consejos para empezar**

- Empieza con solo 5 minutos al día. La constancia vale más que la duración.
- Usa una aplicación de meditación guiada si te ayuda (Insight Timer, Headspace).
- No te juzgues cuando la mente se disperse. Eso es parte del proceso.
- Encuentra un momento fijo del día: al despertar, antes de dormir o durante el almuerzo.

La práctica del mindfulness es como un músculo: se fortalece con el tiempo y la repetición. Los beneficios —mayor calma, mejor concentración, más autocompasión— llegan gradualmente pero de manera profunda.
    `
  },
  {
    slug: "como-hablar-salud-mental-con-pareja",
    title: "Cómo hablar sobre salud mental con tu pareja",
    excerpt: "La comunicación emocional en la pareja es fundamental. Aprende estrategias para abrir conversaciones difíciles con empatía.",
    category: "relaciones",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80",
    date: "10 Ene 2026",
    content: `
Hablar de salud mental con tu pareja puede sentirse vulnerable e incluso intimidante. Muchas personas temen ser incomprendidas, juzgadas o convertirse en una "carga". Sin embargo, compartir lo que sientes internamente es uno de los pilares de una relación íntima y saludable.

**Por qué es importante hablar de ello**

Cuando callamos nuestro malestar emocional dentro de la pareja, ese silencio crea distancia. La otra persona puede notar que algo no está bien pero no saber cómo ayudar, generando frustración en ambos lados. Abrir la conversación, aunque sea difícil, construye puentes.

**Elige el momento adecuado**

No inicies una conversación importante cuando ambos están cansados, irritados o distraídos. Busca un momento de calma, privacidad y disposición mutua. Puedes incluso pedir espacio: "¿Podemos hablar de algo importante esta noche?"

**Habla desde el "yo", no desde el "tú"**

En lugar de "es que nunca me apoyas", prueba con "últimamente me he sentido solo/a y necesito más conexión contigo". El lenguaje en primera persona reduce la defensividad y facilita la escucha.

**Sé específico/a sobre lo que necesitas**

Tu pareja no puede leerte la mente. Después de compartir cómo te sientes, intenta expresar qué necesitas: ¿que te escuche sin dar consejos? ¿un abrazo? ¿ayuda práctica con algo? Esto evita malentendidos y hace más fácil para el otro responder de manera útil.

**Crea un espacio de reciprocidad**

La conversación sobre salud mental no debe ser unidireccional. Invita también a tu pareja a compartir cómo se siente. Esto construye una cultura de apertura emocional dentro de la relación.

**Si la conversación se complica**

Es normal que algunas conversaciones generen tensión o que no salgan como esperabas. En esos casos, la terapia de pareja puede ser un espacio muy valioso para aprender a comunicarse con la guía de un profesional. No es señal de fracaso; es una herramienta de crecimiento.

Recuerda: la vulnerabilidad compartida es la base de la intimidad real.
    `
  },
  {
    slug: "el-duelo-y-sus-etapas",
    title: "El duelo y sus etapas: un proceso natural",
    excerpt: "Perder a alguien o algo importante es doloroso. Entender el duelo como proceso puede ayudarte a atravesarlo de manera más compasiva.",
    category: "general",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    date: "5 Ene 2026",
    content: `
El duelo es una de las experiencias más universales y al mismo tiempo más solitarias que existen. Lo atravesamos no solo cuando perdemos a alguien que amamos, sino también ante la pérdida de una relación, un empleo, una etapa de vida, una identidad o incluso una versión de nosotros mismos que ya no es.

**El modelo de las 5 etapas**

Elisabeth Kübler-Ross identificó cinco etapas del duelo que, aunque no son lineales ni universales, ofrecen un mapa útil para entender el proceso:

1. **Negación**: "Esto no puede estar pasando." Es una respuesta inicial de protección ante el impacto de la pérdida.
2. **Ira**: La negación da paso a la rabia. "¿Por qué a mí?" La ira puede dirigirse hacia otros, hacia uno mismo o hacia la situación.
3. **Negociación**: Aparecen los "y si..." y los "hubiera...". La mente busca formas de recuperar el control.
4. **Depresión**: Una tristeza profunda cuando la realidad de la pérdida se asienta plenamente.
5. **Aceptación**: No significa estar bien, sino integrar la pérdida como parte de la realidad y encontrar una nueva forma de vivir con ella.

**El duelo no es lineal**

Estas etapas no siguen un orden fijo. Puedes pasar de la aceptación a la ira en un día, o sentir varias etapas al mismo tiempo. No hay un "correcto" para vivir el duelo.

**¿Cuánto tiempo dura?**

No existe un tiempo estándar. El duelo tiene su propio ritmo para cada persona y cada pérdida. Lo que sí es cierto es que ignorarlo o reprimirlo tiende a prolongarlo o a que se manifieste de otras formas.

**Cuándo buscar ayuda profesional**

Si el duelo interfiere significativamente con tu vida cotidiana durante un período prolongado, si hay pensamientos de hacerte daño o una sensación persistente de no poder seguir, es importante buscar apoyo terapéutico. No tienes que atravesarlo solo/a.

Permitirte llorar, recordar, enojarte y sanar es un acto de amor hacia ti mismo/a.
    `
  },
  {
    slug: "ansiedad-que-es-y-como-gestionarla",
    title: "Ansiedad: qué es y cómo gestionarla",
    excerpt: "La ansiedad es una de las experiencias más comunes pero menos entendidas. Descubre qué sucede en tu mente y cuerpo cuando aparece.",
    category: "ansiedad",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=80",
    date: "20 Dic 2025",
    content: `
La ansiedad es la respuesta natural de nuestro organismo ante situaciones percibidas como amenazantes o inciertas. En su justa medida, es una emoción funcional que nos ayuda a prepararnos y a actuar. El problema surge cuando se vuelve crónica, desproporcionada o cuando interfiere con la vida cotidiana.

**¿Qué ocurre en el cuerpo cuando hay ansiedad?**

Cuando el cerebro percibe una amenaza, activa el sistema nervioso simpático: se libera adrenalina y cortisol, el corazón late más rápido, la respiración se acelera, los músculos se tensan. Todo esto forma parte de la respuesta de "lucha o huida". El problema es que este sistema no distingue entre una amenaza real (un peligro físico) y una percibida (una preocupación abstracta).

**Tipos de ansiedad**

- **Ansiedad generalizada**: preocupación persistente y difícil de controlar sobre múltiples áreas de la vida.
- **Ansiedad social**: miedo intenso a situaciones sociales y a la evaluación negativa de los demás.
- **Ataques de pánico**: episodios intensos y súbitos de miedo con síntomas físicos intensos.
- **Fobias específicas**: miedo irracional e intenso ante objetos o situaciones concretas.

**Estrategias para gestionar la ansiedad**

**Respiración diafragmática**: Inhala lentamente por la nariz durante 4 segundos, mantén 2 segundos, exhala por la boca durante 6 segundos. Activar la respiración lenta envía una señal de seguridad al sistema nervioso.

**Técnica 5-4-3-2-1**: Nombra 5 cosas que ves, 4 que puedes tocar, 3 que escuchas, 2 que hueles y 1 que puedes saborear. Ancla tu atención en el presente.

**Movimiento físico**: El ejercicio regular es uno de los reguladores más efectivos de la ansiedad, ya que metaboliza el cortisol y libera endorfinas.

**Cuestiona el pensamiento ansioso**: ¿Qué evidencia tengo de que esto va a ocurrir? ¿Cuántas veces me he preocupado por algo que al final no pasó?

**Cuándo buscar ayuda**

Si la ansiedad te impide hacer tu vida con normalidad, si evitas situaciones importantes por miedo, o si los síntomas físicos son frecuentes e intensos, es momento de buscar apoyo profesional. La terapia cognitivo-conductual (TCC) ha demostrado ser muy efectiva para el tratamiento de los trastornos de ansiedad.

La ansiedad no define quién eres. Es una respuesta aprendida que, con las herramientas adecuadas, puede transformarse.
    `
  },
  {
    slug: "rituales-de-autocuidado",
    title: "5 rituales de autocuidado para tu salud mental",
    excerpt: "El autocuidado no es un lujo, es una necesidad. Descubre prácticas sencillas que puedes incorporar en tu día a día para cuidar tu bienestar emocional.",
    category: "autocuidado",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
    date: "5 Nov 2025",
    content: `
En un mundo que nos exige estar siempre disponibles, productivos y "bien", el autocuidado se convierte en un acto casi radical. Pero cuidarte no es egoísmo; es la base desde la que puedes relacionarte con los demás, trabajar, crear y vivir de manera plena.

**¿Qué es realmente el autocuidado?**

El autocuidado va mucho más allá de los baños de espuma o los días de spa (aunque eso también vale). Se trata de las decisiones y prácticas cotidianas que nutren tu bienestar físico, emocional, mental y social.

**1. Una mañana intencional**

Los primeros minutos del día marcan el tono de todo lo que sigue. Antes de revisar el teléfono, dedica aunque sea 10 minutos a algo que te centre: respirar conscientemente, escribir en un diario, estirarte o simplemente tomar tu café o té en silencio.

**2. Movimiento que disfrutes**

No se trata de castigarte con ejercicio, sino de encontrar formas de moverte que te hagan sentir bien: bailar, caminar, yoga, nadar, lo que sea. El movimiento regular reduce el cortisol y mejora el estado de ánimo de manera consistente.

**3. Límites saludables**

Aprender a decir "no" es uno de los actos de autocuidado más poderosos. Cada vez que dices sí a algo que no quieres hacer, le estás diciendo no a algo que sí necesitas. Revisar tus compromisos y proteger tu tiempo y energía es fundamental.

**4. Desconexión digital consciente**

El flujo constante de información y notificaciones mantiene al sistema nervioso en un estado de alerta permanente. Establece momentos del día sin pantallas: durante las comidas, la primera hora de la mañana o la última hora antes de dormir.

**5. Conexión social significativa**

Los seres humanos somos sociales por naturaleza. Invertir tiempo en relaciones que te nutren —conversaciones profundas, momentos de risa, sentirte visto/a— es una necesidad básica, no un lujo.

**El autocuidado no es perfección**

No se trata de hacer todo a la vez ni de tener una rutina perfecta. Se trata de pequeñas decisiones cotidianas que acumuladas hacen una gran diferencia. ¿Por cuál empiezas hoy?
    `
  },
  {
    slug: "criar-con-amor-y-limites",
    title: "Criar con amor y límites: guía para padres",
    excerpt: "Los límites no están reñidos con el amor. Una crianza consciente implica tanto el cuidado emocional como la estructura.",
    category: "familia",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80",
    date: "8 Dic 2025",
    content: `
Una de las preguntas más frecuentes en la consulta de terapia familiar es: "¿Cómo puedo ponerle límites a mi hijo sin dañar nuestra relación?" Esta pregunta revela un malentendido muy extendido: la idea de que los límites se oponen al amor. En realidad, los límites son una expresión del amor.

**¿Qué son los límites en la crianza?**

Los límites son las reglas, expectativas y consecuencias que guían el comportamiento del niño o adolescente. No son castigos ni formas de control; son estructuras que ofrecen seguridad, predecibilidad y un marco para aprender a relacionarse con el mundo.

**Por qué los niños necesitan límites**

Los niños que crecen sin estructura no se sienten más libres; se sienten más ansiosos. La estructura les dice: "Aquí estás seguro/a, sé lo que se espera de mí." El caos, paradójicamente, genera más angustia que contención.

**Crianza consciente: los tres pilares**

**1. Conexión antes de corrección**: Antes de poner un límite o corregir un comportamiento, asegúrate de que tu hijo se sienta visto y comprendido. "Entiendo que estás enojado porque no puedes quedarte más tiempo en el parque. Y aun así, es hora de irnos."

**2. Límites firmes con calidez**: El tono importa tanto como el contenido. Un límite puede ser claro y consistente sin ser frío ni punitivo. "En esta casa no nos gritamos" dicho con calma transmite autoridad sin violencia.

**3. Consecuencias lógicas y naturales**: En lugar de castigos arbitrarios, cuando sea posible usa consecuencias que tengan sentido con la situación. Si un niño no recoge sus juguetes, los juguetes no están disponibles al día siguiente.

**El papel de tus propias emociones**

La crianza consciente empieza por ti. Cuando estás en un estado de estrés o activación emocional alta, es casi imposible responder a tu hijo de manera calmada y reflexiva. Cuidar tu propia salud mental es parte de cuidar a tus hijos.

**Cuándo buscar apoyo**

Si sientes que los conflictos en casa son frecuentes e intensos, si no sabes cómo manejar el comportamiento de tu hijo/a, o si la dinámica familiar está generando sufrimiento, la terapia familiar puede ser una herramienta extraordinariamente útil.

Criar con amor y límites no es perfecto. Es un proceso, un aprendizaje constante. Y eso también está bien.
    `
  }
];

export { posts as blogPosts };

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#5C5C5C] text-lg mb-4">Artículo no encontrado.</p>
          <Link to="/Blog">
            <button className="text-[#C4368C] hover:underline">← Volver al blog</button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split("\n\n");

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="bg-white border-b border-[#F0E9DC] sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link to="/Blog">
            <button className="flex items-center gap-2 text-[#5C5C5C] hover:text-[#2C2C2C] transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </button>
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="w-full h-72 md:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <span className="inline-block bg-[#F8E8F4] text-[#C4368C] text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-light text-[#2C2C2C] leading-tight mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-[#8C8C8C] mb-10 pb-8 border-b border-[#F0E9DC]">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime} min de lectura</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
        </div>

        <div className="prose-content space-y-5 text-[#5C5C5C] leading-relaxed">
          {paragraphs.map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**") && para.split("**").length === 3) {
              return <h3 key={i} className="text-xl font-medium text-[#2C2C2C] mt-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{para.replace(/\*\*/g, "")}</h3>;
            }
            // Replace inline **bold** with <strong>
            const parts = para.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i} className="text-base leading-relaxed">
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-[#2C2C2C] font-semibold">{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-3xl text-center" style={{ background: 'linear-gradient(135deg, #F8E8F4, #EEF4EE)' }}>
          <p className="text-[#2C2C2C] font-light text-xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            ¿Este artículo resonó contigo?
          </p>
          <p className="text-[#5C5C5C] text-sm mb-6">Da el primer paso y agenda una sesión de diagnóstico gratuita.</p>
          <a href="https://confirmafy.com/gloria-hernandez" target="_blank" rel="noreferrer">
            <button className="text-white px-8 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90" style={{ backgroundColor: '#1B2E3C' }}>
              Agenda sesión gratis
            </button>
          </a>
        </div>
      </motion.article>
    </div>
  );
}