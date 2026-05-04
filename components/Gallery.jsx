export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
            Our Space
          </h2>
          <div className="w-12 h-1 bg-[#a68560] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {[
            "https://cdn.b12.io/client_media/WZpd9oog/986ae56d-47d7-11f1-802c-0242ac110002-0CEvVaYFpqGu3Sy4btm41.jpg",
            "https://cdn.b12.io/client_media/WZpd9oog/98663173-47d7-11f1-a037-0242ac110002-a8INAp2pJxAOyWP3vJA4q.jpg",
            "https://cdn.b12.io/client_media/WZpd9oog/984f742a-47d7-11f1-a971-0242ac110002-QuEZwoWBCgfhER8cIa9eO.jpg",
            "https://cdn.b12.io/client_media/WZpd9oog/9883405e-47d7-11f1-b711-0242ac110002-pgme-zMVDsf7nWR5SKlgU.jpg"
          ].map((src, i) => (
            <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''} overflow-hidden rounded-lg shadow-2xl group`}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className={`w-full ${i === 0 ? 'h-80' : 'h-64'} object-cover transition-transform duration-500 group-hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
