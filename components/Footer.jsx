export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#a68560]/40 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a68560] mb-4">Location</h4>
            <p className="text-sm text-[#a8a8a8] leading-relaxed">
              Acople Listening Bar<br />
              Buenos Aires, Argentina
            </p>
            <a href="https://maps.google.com/?q=Buenos+Aires+Argentina" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-[#a68560] hover:text-[#d4a574] mt-3 inline-block transition-colors">
              View on Map
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a68560] mb-4">Hours</h4>
            <div className="text-sm text-[#a8a8a8] space-y-2">
              <p>Wed – Thu: 8 PM – 3 AM</p>
              <p>Fri – Sat: 8 PM – 4 AM</p>
              <p>Sun: 7 PM – 2 AM</p>
              <p>Mon – Tue: Closed</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a68560] mb-4">Contact</h4>
            <div className="text-sm text-[#a8a8a8] space-y-2">
              <p>
                <a href="tel:+541234567890" className="hover:text-[#a68560] transition-colors">+54 (11) 1234-5678</a>
              </p>
              <p>
                <a href="mailto:hello@acople.com" className="hover:text-[#a68560] transition-colors">hello@acople.com</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a68560] mb-4">Follow</h4>
            <div className="text-sm text-[#a8a8a8]">
              <a href="https://instagram.com/acople" target="_blank" rel="noopener noreferrer" className="hover:text-[#a68560] transition-colors">
                @acople
              </a>
              <p className="mt-3 text-xs">
                <a href="https://instagram.com/acople" target="_blank" rel="noopener noreferrer" className="hover:text-[#a68560] transition-colors">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#a68560]/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-[#a8a8a8]">© 2026 ACOPLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
