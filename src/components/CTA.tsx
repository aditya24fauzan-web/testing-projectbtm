import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="kontak" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">Hubungi Kami</h3>
                <p className="text-slate-400 mb-10">
                  Dapatkan penawaran terbaik dan konsultasi gratis untuk kebutuhan Cold Storage Anda.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Telepon / WhatsApp</div>
                      <a href="https://wa.me/6281222779839" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                        +62 812-2277-9839
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Email</div>
                      <a href="mailto:barateknikmandiri@gmail.com" className="text-lg font-semibold hover:text-blue-400 transition-colors break-all">
                        barateknikmandiri@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Alamat Kantor</div>
                      <p className="text-base leading-relaxed">
                        Jl. Tamansari Manglayang Regency No.11 Blok H14, Cinunuk, Cileunyi, Bandung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & CTA Action */}
            <div className="lg:col-span-3 p-10 flex flex-col">
              <div className="flex-grow rounded-2xl overflow-hidden bg-slate-100 min-h-[300px] mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.627236592209!2d107.7397893!3d-6.9350646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c31e9b11e2f3%3A0x8f2b7b5b5b5b5b5b!2sManglayang%20Regency!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PT Bara Teknik Mandiri"
                ></iframe>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Siap Membangun Cold Storage Anda?</h4>
                <a 
                  href="https://wa.me/6281222779839?text=Halo%20PT%20Bara%20Teknik%20Mandiri,%20saya%20tertarik%20untuk%20membuat%20Cold%20Storage." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-green-500/30 w-full sm:w-auto"
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
