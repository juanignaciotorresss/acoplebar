'use client';

export default function Reservations() {
  return (
    <section id="reservations" className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light tracking-widest text-[#f5f1ed] mb-4">
            Reserve Your Table
          </h2>
          <p className="text-[#e8e8e8]">
            Experience ACOPLE firsthand.
          </p>
        </div>

        <form className="space-y-6 bg-[#0f0f0f] p-8 rounded-lg border border-[#a68560]/30">
          <input placeholder="Full Name" className="w-full p-3 bg-[#252525] text-white" />
          <input placeholder="Email" className="w-full p-3 bg-[#252525] text-white" />
          <input placeholder="Date" className="w-full p-3 bg-[#252525] text-white" />
          <input placeholder="Time" className="w-full p-3 bg-[#252525] text-white" />
          <button className="btn-primary w-full">Request Reservation</button>
        </form>
      </div>
    </section>
  );
}
