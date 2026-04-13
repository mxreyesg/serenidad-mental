import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { posts } from "../../lib/blogPosts";



const categories = ["todos", "general", "mindfulness", "relaciones", "ansiedad", "autocuidado", "familia"];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const filtered = activeCategory === "todos" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-[#C4368C] text-sm font-medium tracking-widest uppercase">Recursos</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Blog & artículos
            </h2>
          </div>
          <Link to={createPageUrl("Blog")}>
            <button className="flex items-center gap-2 text-[#C4368C] font-medium hover:gap-3 transition-all">
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>

        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${
                activeCategory === cat
                  ? "bg-[#C4368C] text-white"
                  : "bg-white text-[#5C5C5C] border border-[#F0D0E8] hover:border-[#C4368C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((post, idx) => (
            <Link to={`/blog/${post.slug}`} key={idx}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-[#C4368C] text-xs uppercase tracking-wider font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8C8C8C]">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min de lectura</span>
                  <span className="ml-auto">{post.date}</span>
                </div>
                <h3 className="text-xl font-light text-[#2C2C2C] leading-snug group-hover:text-[#C4368C] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {post.title}
                </h3>
                <p className="text-[#5C5C5C] text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-[#C4368C] text-sm font-medium mt-2 group-hover:gap-3 transition-all">
                  Leer más <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}