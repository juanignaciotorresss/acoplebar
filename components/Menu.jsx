export default function Menu() {
  return (
    <section id="menu" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
            Menu
          </h2>
          <div className="w-12 h-1 bg-[#a68560] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: 'Signature Cocktails',
              items: ['Buenos Aires Nocturne', 'Amber Hours', 'Listening Room']
            },
            {
              title: 'Classics & Spirits',
              items: ['Manhattan', 'Margarita', 'Old Fashioned']
            }
          ].map(section => (
            <div key={section.title}>
              <h3 className="text-2xl font-serif text-[#f5f1ed] mb-8">
                {section.title}
              </h3>

              <div className="space-y-4">
                {section.items.map(item => (
                  <div key={item} className="bg-[#252525] p-4 rounded">
                    <p className="text-[#f5f1ed]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
