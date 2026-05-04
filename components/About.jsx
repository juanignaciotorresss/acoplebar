export default function About() {
  return (
    <section id="about" className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:border-l-2 md:border-[#a68560]/40 md:pl-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
              About ACOPLE
            </h2>
            <div className="w-12 h-1 bg-[#a68560] mb-8"></div>
          </div>

          <div className="space-y-6 text-[#e8e8e8]">
            <p>
              ACOPLE is more than a bar—it's a sanctuary for those who understand that great music, exceptional cocktails, and genuine human connection form the perfect harmony.
            </p>

            <p>
              Our philosophy is rooted in three pillars: the art of cocktail craftsmanship, the soul of carefully selected music, and the cultivation of authentic cultural moments.
            </p>

            <p>
              Whether you're here for a single drink or an entire evening of discovery, ACOPLE invites you to slow down, tune in, and experience the perfect blend of culture, craftsmanship, and community.
            </p>

            <div className="pt-6">
              <a href="#reservations" className="inline-block text-[#a68560] hover:text-[#d4a574] transition-colors text-sm uppercase tracking-widest">
                Reserve Your Table →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
