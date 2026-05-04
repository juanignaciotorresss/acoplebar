'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#a68560]/30">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-serif font-light tracking-widest text-[#f5f1ed] hover:text-[#a68560] transition-colors duration-300">
            ACOPLE
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link hover:text-[#a68560]">About</a>
          <a href="#experience" className="nav-link hover:text-[#a68560]">Experience</a>
          <a href="#gallery" className="nav-link hover:text-[#a68560]">Gallery</a>
          <a href="#events" className="nav-link hover:text-[#a68560]">Events</a>
          <a href="#menu" className="nav-link hover:text-[#a68560]">Menu</a>
          <a href="#reservations" className="nav-link hover:text-[#a68560]">Reservations</a>
          <a href="#contact" className="nav-link hover:text-[#a68560]">Contact</a>
        </div>

        <button className="md:hidden text-[#f5f1ed] hover:text-[#a68560] transition-colors" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      <style jsx>{`
        .nav-link {
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 1px;
          background-color: #a68560;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
