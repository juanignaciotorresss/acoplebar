'use client';

import { Martini, Music, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
            The Experience
          </h2>
          <div className="w-12 h-1 bg-[#a68560] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: Martini,
              title: 'Cocktails',
              text: 'Handcrafted cocktails that transcend the ordinary.'
            },
            {
              Icon: Music,
              title: 'Music',
              text: 'Curated vinyl selections that define the soul of ACOPLE.'
            },
            {
              Icon: Sparkles,
              title: 'Culture',
              text: 'A gathering place for creative minds and music enthusiasts.'
            }
          ].map(({ Icon, title, text }) => (
            <div key={title} className="group bg-[#252525] border border-[#a68560]/20 p-12 transition-all duration-300 hover:border-[#a68560] hover:bg-[#1a1a1a] hover:shadow-xl hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#a68560]/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#a68560]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-light tracking-wide text-[#f5f1ed] text-center mb-4">
                {title}
              </h3>

              <p className="text-center text-[#e8e8e8] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
