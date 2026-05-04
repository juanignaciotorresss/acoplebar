export default function Hero({
  heroImageUrl = 'https://cdn.b12.io/client_media/WZpd9oog/45126748-47d8-11f1-87c1-0242ac110002-ChatGPT_Image_May_4_2026_12_58_21_PM.png',
  headline = 'MUSIC / DRINKS / CULTURE',
  subheadline = 'Córdoba 123, Buenos Aires, Argentina'
}) {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 15, 15, 0.5) 0%, rgba(26, 26, 26, 0.6) 100%), url('${heroImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-6 animate-fade-in whitespace-nowrap">
          {headline}
        </h1>

        <p className="text-lg md:text-xl text-[#e8e8e8] mb-12 font-sans tracking-wide max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subheadline}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#menu" className="btn-primary">
            View Menu
          </a>
          <a href="#reservations" className="btn-primary">
            Reservations
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-[#a68560] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
