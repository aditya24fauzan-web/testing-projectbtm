import { motion } from 'motion/react';
import { HeartPulse, Utensils, ShieldCheck } from 'lucide-react';
import imgMbg from '../img/dapurmbg.png';

export default function MBGSection() {
  return (
    <section id="mbg" className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-200 rounded-3xl transform -rotate-3 scale-105"></div>
            <img 
              src={imgMbg}
              alt="Dapur Produksi Skala Besar" 
              className="relative rounded-3xl shadow-xl object-cover h-[500px] w-full"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900 text-xl">100%</div>
              </div>
              <p className="text-sm text-slate-600 font-medium">Kualitas Nutrisi Terjaga</p>
            </div>
          </motion.div>

          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-6">
              Fokus Program Pemerintah
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Dukungan Infrastruktur untuk <span className="text-blue-600">Program Makanan Bergizi Gratis (MBG)</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Program MBG membutuhkan standar keamanan pangan yang sangat ketat. Cold Storage bukan lagi pilihan, melainkan keharusan bagi dapur umum, katering, dan supplier untuk memastikan makanan yang didistribusikan aman dan bernutrisi.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Menjaga Nilai Gizi</h3>
                  <p className="text-slate-600">Pendinginan yang tepat menghentikan degradasi vitamin dan protein pada bahan makanan mentah.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Kapasitas Produksi Masif</h3>
                  <p className="text-slate-600">Memungkinkan dapur pusat untuk menyimpan stok bahan baku dalam jumlah tonase besar dengan aman.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/6281222779839?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Cold%20Storage%20untuk%20kebutuhan%20katering/MBG." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-lg"
              >
                Konsultasi Kebutuhan Dapur Anda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
