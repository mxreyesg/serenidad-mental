export default function Layout({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Fondo rosa fijo a lo largo de todo el sitio */}
      <div className="site-bg-overlay" style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'rgba(248,232,244,0.15)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body {
            font-family: 'DM Sans', sans-serif;
            background: linear-gradient(135deg, #ffffff 0%, rgba(248,232,244,0.18) 50%, #ffffff 100%);
            background-attachment: fixed;
            transition: background-color 0.4s ease, color 0.4s ease;
          }
          html.dark body {
            background: #0d1520 !important;
            color: #E8EFF5 !important;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #FDF5FA; }
          html.dark ::-webkit-scrollbar-track { background: #0d1520; }
          ::-webkit-scrollbar-thumb { background: #E060A8; border-radius: 10px; }
        `}</style>
        {children}
      </div>
    </div>
  );
}
