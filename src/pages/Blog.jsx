import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const posts = [
  {
    slug: "senales-de-que-necesitas-terapia",
    title: "5 señales de que podrías beneficiarte de la terapia",
    excerpt: "Muchas veces ignoramos las señales que nuestro bienestar mental nos envía. Explorar esas señales puede ser el primer paso hacia una vida más plena.",
    category: "general",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    date: "15 Feb 2026",
  },
  {
    slug: "mindfulness-para-principiantes",
    title: "Mindfulness para principiantes: empieza hoy",
    excerpt: "La atención plena no requiere horas de práctica. Aprende técnicas simples para incorporar el mindfulness en tu rutina diaria.",
    category: "mindfulness",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    date: "28 Ene 2026",
  },
  {
    slug: "como-hablar-salud-mental-con-pareja",
    title: "Cómo hablar sobre salud mental con tu pareja",
    excerpt: "La comunicación emocional en la pareja es fundamental. Aprende estrategias para abrir conversaciones difíciles con empatía.",
    category: "relaciones",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
    date: "10 Ene 2026",
  },
  {
    slug: "el-duelo-y-sus-etapas",
    title: "El duelo y sus etapas: un proceso natural",
    excerpt: "Perder a alguien o algo importante es doloroso. Entender el duelo como proceso puede ayudarte a atravesarlo de manera más compasiva.",
    category: "general",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    date: "5 Ene 2026",
  },
  {
    slug: "ansiedad-que-es-y-como-gestionarla",
    title: "Ansiedad: qué es y cómo gestionarla",
    excerpt: "La ansiedad es una de las experiencias más comunes pero menos entendidas. Descubre qué sucede en tu mente y cuerpo cuando aparece.",
    category: "ansiedad",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
    date: "20 Dic 2025",
  },
  {
    slug: "rituales-de-autocuidado",
    title: "5 rituales de autocuidado para tu salud mental",
    excerpt: "El autocuidado no es un lujo, es una necesidad. Descubre prácticas sencillas que puedes incorporar en tu día a día.",
    category: "autocuidado",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    date: "5 Nov 2025",
  },
  {
    slug: "criar-con-amor-y-limites",
    title: "Criar con amor y límites: guía para padres",
    excerpt: "Los límites no están reñidos con el amor. Una crianza consciente implica tanto el cuidado emocional como la estructura.",
    category: "familia",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    date: "8 Dic 2025",
  },
];

const categories = ["Todos", "general", "mindfulness", "relaciones", "ansiedad", "autocuidado", "familia"];

export default function Blog() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <Navbar inBlog={true} />
      
      <div className="min-h-screen bg-[#FAF7F2]">
        {/* Hero */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Blog
              </h1>
              <p className="text-[#5C5C5C] text-lg max-w-2xl mx-auto">
                Reflexiones y recursos sobre salud mental, bienestar emocional y desarrollo personal.
              </p>
            </motion.div>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8C8C]" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[#F0D0E8] focus:border-[#C4368C] focus:outline-none bg-white text-[#2C2C2C]"
              />
            </div>
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center mb-16"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1B2E3C] text-white"
                    : "bg-white text-[#5C5C5C] border border-[#F0D0E8] hover:border-[#C4368C]"
                }`}
              >
                {cat === "general" ? "General" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="mb-4 overflow-hidden rounded-2xl h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-[#F8E8F4] text-[#C4368C] text-xs uppercase tracking-widest px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#8C8C8C]">{post.readTime} min</span>
                      </div>
                      <h3 className="text-xl font-light text-[#2C2C2C] group-hover:text-[#C4368C] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {post.title}
                      </h3>
                      <p className="text-[#5C5C5C] text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3">
                        <span className="text-xs text-[#8C8C8C]">{post.date}</span>
                        <ArrowRight className="w-4 h-4 text-[#C4368C] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="max-w-5xl mx-auto text-center py-12">
              <p className="text-[#5C5C5C]">No encontramos artículos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}