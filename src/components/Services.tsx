import { motion } from 'motion/react';
import { Box, Snowflake, Settings, Zap, Shield, Wrench } from 'lucide-react';
import imgChiller from '../img/coldstorage2.png';
import imgFreezer from '../img/coldstorage1.jpg';

export default function Services() {
  const services = [
    {
      title: "Cold Room (Chiller)",
      temp: "+2°C hingga +8°C",
      desc: "Ideal untuk menyimpan sayuran, buah-buahan, produk susu, dan bahan makanan segar lainnya agar tetap awet tanpa membeku.",
      icon: <Box className="w-8 h-8 text-blue-500" />,
      image: imgChiller
    },
    {
      title: "Cold Storage (Freezer)",
      temp: "-18°C hingga -25°C",
      desc: "Dirancang khusus untuk daging, ikan, ayam, dan makanan beku (frozen food) untuk penyimpanan jangka panjang.",
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      image: imgFreezer
    }
  ];

  const features = [
    { icon: <Settings />, text: "Custom Ukuran & Kapasitas" },
    { icon: <Zap />, text: "Kompresor Hemat Energi" },
    { icon: <Shield />, text: "Standar Food Grade" },
    { icon: <Wrench />, text: "Instalasi Profesional" }
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Layanan Utama Kami
          </h2>
          <p className="text-lg text-slate-600">
            Kami menyediakan solusi pendingin industri yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-blue-600 shadow-sm">
                  {service.temp}
                </div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-center text-slate-900 mb-8">Fitur Unggulan Sistem Kami</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-blue-600">
                  {feat.icon}
                </div>
                <span className="font-medium text-slate-700">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
