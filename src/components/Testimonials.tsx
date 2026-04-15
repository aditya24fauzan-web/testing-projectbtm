import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Bpk. Hendra",
      role: "Pemilik Katering Industri",
      content: "Sejak menggunakan Cold Room dari Bara Teknik Mandiri, food waste kami turun drastis. Suhu sangat stabil dan teknisinya sangat profesional saat instalasi.",
      rating: 5
    },
    {
      name: "Ibu Sarah",
      role: "Manager Dapur Rumah Sakit",
      content: "Standar kebersihan panelnya sangat baik, sesuai dengan standar akreditasi rumah sakit kami. Pelayanan purna jualnya juga cepat tanggap.",
      rating: 5
    },
    {
      name: "Bpk. Budi",
      role: "Supplier Daging Segar",
      content: "Freezer room custom yang dibuatkan sangat pas dengan layout gudang kami yang terbatas. Mesinnya halus dan hemat listrik. Sangat direkomendasikan!",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dipercaya oleh Pelaku Industri
          </h2>
          <p className="text-lg text-slate-600">
            Komitmen kami adalah memberikan kepuasan maksimal melalui produk berkualitas dan layanan prima.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 italic">"{testi.content}"</p>
              <div>
                <div className="font-bold text-slate-900">{testi.name}</div>
                <div className="text-sm text-slate-500">{testi.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
