import { useState, useEffect } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Program MBG', href: '#mbg' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Snowflake className="w-6 h-6 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Bara Teknik Mandiri
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
                {link.name}
              </a>
            ))}
            <a href="#kontak" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-blue-600/20">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-medium hover:text-blue-600 px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontak" 
              className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
