import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TerminosServicio() {
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

      <article className="max-w-3xl mx-auto px-6 py-14 space-y-8 text-[#5C5C5C] text-sm leading-relaxed">
        <div>
          <h1 className="text-4xl font-light text-[#2C2C2C] mb-2">
            Términos de Servicio
          </h1>
          <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">Última actualización: abril 2026</p>
        </div>

        <p>
          Al agendar una sesión con <strong className="text-[#2C2C2C]">Gloria Hernández, terapeuta</strong>, usted acepta los siguientes términos. Le pedimos leerlos con atención, ya que forman parte del acuerdo entre terapeuta y consultante.
        </p>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">1. Pago anticipado</h2>
          <p>
            El pago de cada sesión deberá realizarse con un mínimo de <strong className="text-[#2C2C2C]">24 horas de anticipación</strong> a la hora de inicio acordada. Esto nos permite proteger el espacio terapéutico y garantizar la continuidad del proceso.
          </p>
          <p className="mt-2">
            Una sesión cuyo pago no se haya confirmado dentro de ese plazo podrá ser liberada y asignada a otro consultante, sin que ello genere responsabilidad para la terapeuta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">2. Cancelaciones por parte del consultante</h2>
          <p>
            Si necesita cancelar o reprogramar su sesión, le solicitamos notificarlo con al menos <strong className="text-[#2C2C2C]">24 horas de anticipación</strong> a través de WhatsApp o correo electrónico.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Cancelaciones con 24 h o más de anticipación: se podrá reagendar la sesión sin cargo adicional, sujeto a disponibilidad.</li>
            <li>Cancelaciones con menos de 24 h o inasistencia sin aviso: la sesión se considerará realizada y <strong className="text-[#2C2C2C]">no habrá lugar a reembolso ni reagendamiento sin costo</strong>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">3. Cancelaciones por parte de la terapeuta</h2>
          <p>
            En el caso excepcional de que la terapeuta deba cancelar una sesión ya confirmada y pagada, el consultante tendrá derecho a <strong className="text-[#2C2C2C]">reagendar sin costo alguno</strong> en la fecha y horario de su preferencia, conforme a la disponibilidad de agenda.
          </p>
          <p className="mt-2">
            La terapeuta se compromete a comunicar dicha cancelación con la mayor anticipación posible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">4. Política de no reembolso</h2>
          <p>
            Dado que cada sesión reserva un espacio exclusivo en la agenda, <strong className="text-[#2C2C2C]">no se realizan reembolsos</strong> por sesiones pagadas a las que el consultante no asista, cancele con menos de 24 h de anticipación o abandone voluntariamente una vez iniciada.
          </p>
          <p className="mt-2">
            Esta política busca reconocer el valor del tiempo terapéutico y el compromiso mutuo que exige el proceso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">5. Modalidad y confidencialidad</h2>
          <p>
            Las sesiones pueden realizarse de forma presencial (Juárez, N.L.) o en línea mediante videollamada. Toda la información compartida durante el proceso terapéutico es estrictamente confidencial, conforme a los principios éticos de la práctica psicológica, salvo en situaciones de riesgo vital que obliguen a actuar en favor de la seguridad del consultante o de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">6. Servicios de emergencia</h2>
          <p>
            Este servicio <strong className="text-[#2C2C2C]">no constituye atención de urgencias</strong>. Si usted o alguien más se encuentra en una situación de crisis o riesgo inmediato, comuníquese de inmediato a los servicios de emergencia locales (911) o a la Línea de la Vida: <strong className="text-[#2C2C2C]">800 911 2000</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-3">7. Modificaciones</h2>
          <p>
            Estos términos pueden actualizarse en cualquier momento. La versión vigente estará siempre disponible en este sitio web. El uso continuado de los servicios implica la aceptación de los términos vigentes.
          </p>
        </section>

        <div className="mt-10 p-6 rounded-2xl border border-[#F0D0E8] bg-[#FDF5FA] text-center">
          <p className="text-[#5C5C5C] text-sm">¿Tienes dudas sobre estos términos? Escríbeme a{" "}
            <a href="mailto:contacto@gloriahernandez.mx" className="text-[#C4368C] hover:underline">contacto@gloriahernandez.mx</a>
          </p>
        </div>
      </article>
    </div>
  );
}