import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, AlertTriangle, Lock, Users, Scale } from "lucide-react";

export default function Confidencialidad() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="bg-white border-b border-[#F0E9DC] sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link to="/">
            <button className="flex items-center gap-2 text-[#5C5C5C] hover:text-[#2C2C2C] transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </button>
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-[#5C5C5C] text-sm leading-relaxed">

        {/* Title */}
        <div>
          <h1 className="text-4xl font-light text-[#2C2C2C] mb-2">
            Política de Confidencialidad
          </h1>
          <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">Última actualización: abril 2026</p>
        </div>

        <p className="text-base leading-relaxed">
          La confidencialidad es uno de los pilares fundamentales de la relación terapéutica. Como terapeuta Gestalt, Gloria Hernández ejerce bajo un enfoque humanista que considera el vínculo de confianza como base del proceso terapéutico. Todo lo que se comparte dentro del espacio de terapia —pensamientos, emociones, vivencias, historia personal— es tratado con absoluta reserva y discreción. Esta página detalla cómo se aplica ese principio y cuáles son sus límites éticos y legales.
        </p>

        {/* Highlight box */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8E8F4] border border-[#F0D0E8]">
          <ShieldCheck className="w-6 h-6 text-[#C4368C] flex-shrink-0 mt-0.5" />
          <p className="text-[#2C2C2C] text-sm leading-relaxed">
            <strong>Tu privacidad está protegida.</strong> Todo lo que compartes en sesión permanece dentro del espacio terapéutico. Nunca se revela información a familiares, parejas, empleadores ni ninguna tercera parte sin tu consentimiento explícito.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#C4368C]" />
            <h2 className="text-xl font-medium text-[#2C2C2C]">
              1. Alcance de la confidencialidad
            </h2>
          </div>
          <p>
            La relación terapéutica está regida por el principio de confidencialidad y secreto profesional, reconocido en los marcos éticos de la Terapia Gestalt y la psicoterapia humanista, así como en la normativa aplicable en México. Esto implica que:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Ningún contenido de las sesiones será compartido con personas fuera del espacio terapéutico.</li>
            <li>No se confirma ni niega la asistencia de una persona a terapia sin su autorización.</li>
            <li>Los registros clínicos y notas de sesión son documentos privados, custodiados con estrictas medidas de seguridad.</li>
            <li>En casos donde se trabaje con un equipo multidisciplinario (con tu conocimiento y consentimiento previo), la información compartida se limita a lo estrictamente necesario.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#C4368C]" />
            <h2 className="text-xl font-medium text-[#2C2C2C]">
              2. Excepciones a la confidencialidad
            </h2>
          </div>
          <p>
            Existen situaciones específicas en las que el marco ético y legal obliga a romper la confidencialidad para proteger la integridad de la persona o de terceros. Estas situaciones son excepcionales y se manejan siempre con la mayor sensibilidad posible:
          </p>

          <div className="space-y-4 mt-2">
            <div className="p-5 rounded-xl border border-[#F0D0E8] bg-white space-y-1">
              <p className="font-medium text-[#2C2C2C]">Riesgo inminente para la vida propia</p>
              <p>Cuando existe evidencia clara de que la persona puede hacerse daño de forma grave e inmediata, se puede notificar a familiares cercanos o derivar de urgencia a servicios de salud mental o de emergencia.</p>
            </div>
            <div className="p-5 rounded-xl border border-[#F0D0E8] bg-white space-y-1">
              <p className="font-medium text-[#2C2C2C]">Riesgo para terceros</p>
              <p>Si durante la terapia se revela una intención seria de causar daño a otra persona, existe la obligación ética de tomar medidas para proteger a esa persona, que pueden incluir notificación a las autoridades.</p>
            </div>
            <div className="p-5 rounded-xl border border-[#F0D0E8] bg-white space-y-1">
              <p className="font-medium text-[#2C2C2C]">Situaciones de abuso o riesgo hacia menores de edad</p>
              <p>
                De acuerdo con la <strong className="text-[#2C2C2C]">Ley General de los Derechos de Niñas, Niños y Adolescentes</strong> y los principios éticos del ejercicio terapéutico, cuando se tenga conocimiento de que un menor está siendo víctima de abuso físico, sexual, emocional o negligencia grave, existe la <strong className="text-[#2C2C2C]">obligación ética —y en muchos casos legal— de notificar a las autoridades competentes</strong> (DIF, Ministerio Público u otras instituciones de protección a la infancia), independientemente de quién sea el perpetrador.
              </p>
              <p className="mt-2 text-xs text-[#C4368C] font-medium uppercase tracking-wide">Esta excepción aplica siempre que esté en riesgo el bienestar de un menor.</p>
            </div>
            <div className="p-5 rounded-xl border border-[#F0D0E8] bg-white space-y-1">
              <p className="font-medium text-[#2C2C2C]">Mandato judicial</p>
              <p>En los casos en que una autoridad judicial emita una orden legal que requiera la divulgación de información, se actuará conforme a lo que la ley establezca, buscando proteger los derechos del consultante en todo momento.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#C4368C]" />
            <h2 className="text-xl font-medium text-[#2C2C2C]">
              3. Menores de edad en terapia
            </h2>
          </div>
          <p>
            Cuando el proceso terapéutico involucra a niñas, niños o adolescentes, se establecen acuerdos claros desde el inicio sobre qué información puede ser compartida con los padres o tutores y qué permanece en el espacio privado del menor. El objetivo siempre es proteger el vínculo de confianza con el menor, sin comprometer su seguridad.
          </p>
          <p>
            Los padres o tutores serán informados en términos generales sobre el avance del proceso, pero <strong className="text-[#2C2C2C]">el contenido específico de las sesiones</strong> pertenece al espacio del menor y no se comparte de manera rutinaria.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#C4368C]" />
            <h2 className="text-xl font-medium text-[#2C2C2C]">
              4. Fundamento ético y legal
            </h2>
          </div>
          <p>
            Esta política de confidencialidad se basa en los siguientes marcos normativos y éticos:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-[#2C2C2C]">Ley General de los Derechos de Niñas, Niños y Adolescentes</strong></li>
            <li><strong className="text-[#2C2C2C]">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> (LFPDPPP)</li>
          </ul>
        </section>

        {/* CTA box */}
        <div className="mt-10 p-6 rounded-2xl border border-[#F0D0E8] bg-[#FDF5FA] text-center">
          <p className="text-[#5C5C5C] text-sm mb-1">¿Tienes dudas sobre la confidencialidad de tu proceso?</p>
          <p className="text-[#5C5C5C] text-sm">Puedes escribirme directamente a{" "}
            <a href="mailto:contacto@gloriahernandez.mx" className="text-[#C4368C] hover:underline">contacto@gloriahernandez.mx</a>
            {" "}y con gusto lo conversamos antes de iniciar.
          </p>
        </div>

      </article>
    </div>
  );
}