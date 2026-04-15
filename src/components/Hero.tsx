import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import heroBgImage from '../img/herobg.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgImage}
          alt="Modern Cold Storage Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-blue-900/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Spesialis Pendingin Industri & Komersial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solusi Cold Storage Profesional untuk <span className="text-blue-400">MBG & Industri Makanan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Jaga kualitas, kesegaran, dan kebersihan produk Anda dengan sistem pendingin berstandar food-grade. Solusi tepat untuk Program Makanan Bergizi Gratis (MBG), katering, dan rumah sakit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/6281222779839?text=Halo%20PT%20Bara%20Teknik%20Mandiri,%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20Cold%20Storage." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#layanan" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm transition-all border border-white/10"
              >
                Pelajari Layanan Kami
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
