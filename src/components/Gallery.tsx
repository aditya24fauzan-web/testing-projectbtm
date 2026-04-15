import { motion } from 'motion/react';
import imgHero from '../img/herobg.png';
import imgFreezer from '../img/coldstorage1.jpg';
import imgChiller from '../img/coldstorage2.png';
import imgTeam from '../img/team-img-2.png';

export default function Gallery() {
  const images = [
    imgHero,      // <--- Gunakan variabel import
    imgFreezer,   // <--- Gunakan variabel import
    imgChiller,   // <--- Gunakan variabel import
    imgTeam
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Galeri Proyek & Instalasi
          </h2>
          <p className="text-lg text-slate-600">
            Beberapa dokumentasi instalasi Cold Room dan Cold Storage yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden bg-slate-100"
            >
              <img 
                src={img} 
                alt={`Proyek Instalasi ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
