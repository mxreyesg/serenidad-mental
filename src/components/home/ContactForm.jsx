import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es requerido.";
    if (!form.email.trim()) e.email = "El email es requerido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ingresa un email válido.";
    if (!form.message.trim()) e.message = "El mensaje es requerido.";
    if (!privacy) e.privacy = "Debes aceptar el aviso de privacidad.";
    return e;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) { setErrors(validation); return; }
    setErrors({});
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error("Error al enviar");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setPrivacy(false);
    } catch {
      setError("Hubo un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center rounded-3xl p-10" style={{ backgroundColor: '#F8E8F4' }}>
        <CheckCircle className="w-12 h-12 text-[#C4368C] mb-4" />
        <h3 className="text-2xl font-light text-[#2C2C2C] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          ¡Mensaje enviado!
        </h3>
        <p className="text-[#5C5C5C] text-sm">Te responderé en menos de 24 horas.</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-[#C4368C] text-sm hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl p-8 space-y-5 h-full"
      style={{ backgroundColor: '#F8F4FA' }}
    >
      <h3 className="text-2xl font-semibold text-[#1B2E3C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Envíame un mensaje
      </h3>

      <div>
        <label className="block text-xs uppercase tracking-wide text-[#8C8C8C] mb-1.5">Nombre</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none bg-white text-sm text-[#2C2C2C] placeholder:text-[#C0C0C0] ${errors.name ? 'border-red-400' : 'border-[#F0D0E8] focus:border-[#C4368C]'}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-[#8C8C8C] mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none bg-white text-sm text-[#2C2C2C] placeholder:text-[#C0C0C0] ${errors.email ? 'border-red-400' : 'border-[#F0D0E8] focus:border-[#C4368C]'}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-[#8C8C8C] mb-1.5">Mensaje</label>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="¿En qué puedo ayudarte?"
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none bg-white text-sm text-[#2C2C2C] placeholder:text-[#C0C0C0] resize-none ${errors.message ? 'border-red-400' : 'border-[#F0D0E8] focus:border-[#C4368C]'}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-0.5 accent-[#C4368C] cursor-pointer"
        />
        <label htmlFor="privacy" className="text-xs text-[#5C5C5C] leading-relaxed cursor-pointer">
          He leído y acepto el{" "}
          <Link to="/aviso-privacidad" className="text-[#C4368C] hover:underline" target="_blank">Aviso de Privacidad</Link>.
        </label>
      </div>
      {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy}</p>}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading || !privacy || !form.name.trim() || !form.email.trim() || !form.message.trim()}
        className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-full font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#1B2E3C' }}
      >
        {loading ? "Enviando..." : (<><Send className="w-4 h-4" /> Enviar mensaje</>)}
      </button>
    </form>
  );
}
