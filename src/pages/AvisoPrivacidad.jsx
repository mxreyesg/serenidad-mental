import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AvisoPrivacidad() {
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
            Aviso de Privacidad
          </h1>
          <p className="text-xs text-[#8C8C8C] uppercase tracking-wide">Última actualización: abril 2026</p>
        </div>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">1. Responsable del tratamiento de datos</h2>
          <p>
            <strong className="text-[#2C2C2C]">Gloria Hernández</strong>, terapeuta independiente con domicilio en Juárez, Nuevo León, México, es la responsable del tratamiento de sus datos personales, en términos de lo dispuesto por la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP) y su Reglamento.
          </p>
          <p className="mt-2">Contacto: <a href="mailto:contacto@gloriahernandez.mx" className="text-[#C4368C] hover:underline">contacto@gloriahernandez.mx</a></p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">2. Datos personales que recabamos</h2>
          <p>A través de los siguientes canales recabamos los datos personales que se indican:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-[#2C2C2C]">Formulario de contacto del sitio web:</strong> nombre completo y dirección de correo electrónico.</li>
            <li><strong className="text-[#2C2C2C]">Canal de WhatsApp:</strong> número de teléfono celular y el contenido del mensaje que usted envíe voluntariamente.</li>
          </ul>
          <p className="mt-2">No recabamos datos personales sensibles (p. ej. diagnósticos clínicos) a través de estos canales públicos.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">3. Finalidades del tratamiento</h2>
          <p><strong className="text-[#2C2C2C]">Finalidades primarias</strong> (necesarias para la relación solicitada):</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Atender su solicitud de información sobre los servicios de terapia.</li>
            <li>Agendar, confirmar o cancelar una cita o sesión de orientación.</li>
            <li>Dar seguimiento a la consulta o proceso terapéutico.</li>
          </ul>
          <p className="mt-3"><strong className="text-[#2C2C2C]">Finalidades secundarias</strong> (puede negarse sin afectar la relación principal):</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Envío de información sobre talleres, artículos o recursos de bienestar emocional.</li>
          </ul>
          <p className="mt-2">Si no desea que sus datos sean tratados para finalidades secundarias, escríbanos a <a href="mailto:contacto@gloriahernandez.mx" className="text-[#C4368C] hover:underline">contacto@gloriahernandez.mx</a> indicando su solicitud.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">4. Transferencia de datos</h2>
          <p>Sus datos personales <strong className="text-[#2C2C2C]">no serán transferidos</strong> a terceros sin su consentimiento, salvo en los casos previstos en el artículo 37 de la LFPDPPP (autoridades competentes, obligaciones legales, protección de intereses vitales).</p>
          <p className="mt-2">Para el envío de mensajes por WhatsApp se utiliza la plataforma de <strong className="text-[#2C2C2C]">Meta Platforms, Inc.</strong>, sujeta a sus propios términos y políticas de privacidad.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">5. Tiempo de conservación</h2>
          <p>Sus datos se conservarán únicamente durante el tiempo necesario para cumplir las finalidades descritas y, en su caso, para cumplir con obligaciones legales aplicables. Una vez concluida la relación, los datos serán eliminados o anonimizados.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">6. Derechos ARCO</h2>
          <p>Usted tiene derecho a <strong className="text-[#2C2C2C]">Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales (derechos ARCO). Para ejercerlos, envíe un correo a <a href="mailto:contacto@gloriahernandez.mx" className="text-[#C4368C] hover:underline">contacto@gloriahernandez.mx</a> con:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nombre completo y datos de contacto.</li>
            <li>Descripción clara del derecho que desea ejercer.</li>
            <li>Copia de documento de identidad oficial.</li>
          </ul>
          <p className="mt-2">Responderemos en un plazo máximo de <strong className="text-[#2C2C2C]">20 días hábiles</strong>, conforme a lo establecido en la LFPDPPP.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">7. Revocación del consentimiento</h2>
          <p>En cualquier momento puede revocar su consentimiento para el tratamiento de sus datos personales, siempre que no exista una obligación legal que lo impida. Para ello, envíe su solicitud al correo indicado en el apartado anterior.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">8. Uso de cookies y tecnologías de rastreo</h2>
          <p>Este sitio web puede utilizar cookies técnicas esenciales para su funcionamiento. No se emplean cookies de seguimiento publicitario de terceros. Puede configurar su navegador para rechazar o eliminar cookies; sin embargo, esto podría afectar el correcto funcionamiento del sitio.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">9. Cambios al aviso de privacidad</h2>
          <p>Nos reservamos el derecho de modificar el presente Aviso de Privacidad. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente. Le recomendamos consultarla periódicamente.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#2C2C2C] mb-2">10. Autoridad supervisora</h2>
          <p>Si considera que sus derechos han sido vulnerados, puede presentar una queja ante el <strong className="text-[#2C2C2C]">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>: <a href="https://www.inai.org.mx" target="_blank" rel="noreferrer" className="text-[#C4368C] hover:underline">www.inai.org.mx</a>.</p>
        </section>
      </article>
    </div>
  );
}