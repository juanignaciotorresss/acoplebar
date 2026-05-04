export default function Events() {
  return (
    <section id="events" className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
            Events & Vinyl Nights
          </h2>
          <div className="w-12 h-1 bg-[#a68560] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 border-l-2 border-[#a68560]/40 pl-8">
            <p className="text-xs uppercase tracking-widest text-[#a68560] mb-2">Featured Event</p>
            <h3 className="text-4xl font-serif font-light text-[#f5f1ed] mb-2">
              Vinyl & Soul Night
            </h3>
            <p className="text-2xl font-light text-[#d4a574] mb-8">May 24, 2026</p>

            <p className="text-[#e8e8e8] leading-relaxed mb-8">
              Join us for an evening of soul, jazz, and funk vinyl selections.
            </p>

            <a href="#reservations" className="btn-primary inline-block">
              Reserve a Table
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#a68560] mb-6">Upcoming Events</p>

            <div className="space-y-6">
              {[
                ['May 31, 2026', 'Late Night Jazz Session'],
                ['June 7, 2026', 'Funk & Disco Vinyl Party'],
                ['June 14, 2026', 'Listening Sessions & Masterclass'],
                ['June 21, 2026', 'Summer Cocktail Experience']
              ].map(([date, title]) => (
                <div key={title} className="border-b border-[#a68560]/20 pb-4">
                  <p className="text-sm text-[#d4a574]">{date}</p>
                  <h4 className="text-lg font-serif text-[#f5f1ed] mt-2">{title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
