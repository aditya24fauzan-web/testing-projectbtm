import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, TrendingDown, ThermometerSnowflake, ShieldAlert } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: <ThermometerSnowflake className="w-6 h-6 text-red-500" />,
      title: "Suhu Tidak Stabil",
      desc: "Bahan makanan cepat rusak dan membusuk karena penyimpanan yang tidak standar."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      title: "Risiko Kontaminasi",
      desc: "Lingkungan yang tidak higienis memicu pertumbuhan bakteri berbahaya."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      title: "Kerugian Finansial",
      desc: "Pembuangan bahan baku (food waste) yang tinggi mengurangi profit bisnis."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Jangan Biarkan Kualitas Makanan Anda Menurun
          </h2>
          <p className="text-lg text-slate-600">
            Penyimpanan skala besar tanpa sistem pendingin yang tepat dapat berakibat fatal bagi bisnis dan kesehatan konsumen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-red-600 font-semibold mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Risiko Tanpa Cold Storage</span>
            </div>
            
            {problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-red-50 border border-red-100"
              >
                <div className="flex-shrink-0 mt-1">{prob.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{prob.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Solusi dari PT Bara Teknik Mandiri
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Kami menghadirkan sistem Cold Room dan Cold Storage yang dirancang khusus untuk menjaga suhu optimal, memastikan kebersihan, dan memperpanjang umur simpan bahan makanan Anda.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Suhu presisi dan stabil 24/7",
                  "Material panel food-grade anti bakteri",
                  "Sistem hemat energi (Energy Efficient)",
                  "Desain custom sesuai kapasitas ruangan"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <span className="text-blue-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
