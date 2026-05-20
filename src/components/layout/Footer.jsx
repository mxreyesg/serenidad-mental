import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-light text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Gloria Hernández <span className="text-[#E060A8]">| Terapeuta</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Un espacio para reconectar contigo mismo/a, sanar y crecer
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E060A8] mb-4">Servicios</h4>
            <ul className="space-y-2">
              {["Terapia individual", "Terapia de pareja", "Terapia familiar", "Talleres grupales"].map(s => (
                <li key={s}>
                  <a href="#servicios" className="text-white/60 hover:text-white text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E060A8] mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Blog", href: "/Blog" },
                { label: "Preguntas frecuentes", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E060A8] mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Aviso de privacidad", href: "/aviso-privacidad" },
                { label: "Términos de servicio", href: "/terminos-servicio" },

                { label: "Confidencialidad", href: "/confidencialidad" },
              ].map(s => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 hover:text-white text-sm transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-xs text-white/40 leading-relaxed">
                Esta plataforma no ofrece servicios de emergencia. En caso de crisis, contacta a la línea de salud mental local.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Gloria Hernández | Terapeuta. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5 flex-wrap">
            Hecho con <Heart className="w-3.5 h-3.5 text-[#E060A8]" /> para tu bienestar
            <span className="mx-1">|</span>
            <a href="https://techlab.mx/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white/70 transition-colors">
              Desarrollado por <img src="/techLab-logo.png" alt="TechLab" className="w-3.5 h-3.5 object-contain" style={{ mixBlendMode: 'screen' }} />
</a>
          </p>
        </div>
      </div>
    </footer>
  );
}