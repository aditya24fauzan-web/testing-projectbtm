import { motion } from 'motion/react';
import { Award, Wrench as ToolIcon, Clock, HeadphonesIcon, Ruler } from 'lucide-react';

export default function Features() {
  const usps = [
    {
      icon: <ToolIcon className="w-6 h-6" />,
      title: "Teknisi Berpengalaman",
      desc: "Ditangani oleh tim ahli yang tersertifikasi dan berpengalaman bertahun-tahun di bidang refrigerasi industri."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Material Berkualitas",
      desc: "Menggunakan panel insulasi PU (Polyurethane) densitas tinggi dan mesin kompresor brand terkemuka."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Garansi Resmi",
      desc: "Memberikan ketenangan pikiran dengan garansi kompresor dan layanan purna jual yang responsif."
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Custom Sesuai Kebutuhan",
      desc: "Desain dan dimensi ruang pendingin disesuaikan secara presisi dengan layout bangunan dan kapasitas produksi Anda."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Konsultasi Gratis",
      desc: "Tim kami siap membantu menghitung kebutuhan kapasitas pendingin yang paling efisien untuk bisnis Anda."
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mengapa Memilih <span className="text-blue-400">Bara Teknik Mandiri?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Kami tidak hanya menjual mesin, kami memberikan solusi pendingin komprehensif yang menjamin kelancaran operasional bisnis Anda.
            </p>
            <a 
              href="https://wa.me/6281222779839" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full font-medium transition-colors"
            >
              Hubungi Tim Kami
            </a>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {usps.map((usp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-slate-800/50 border border-slate-700 p-6 rounded-2xl ${idx === 4 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
              >
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
