import { Snowflake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              PT Bara Teknik Mandiri
            </span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} PT Bara Teknik Mandiri. All rights reserved.<br/>
            Spesialis Cold Room & Cold Storage Bandung.
          </div>
        </div>
      </div>
    </footer>
  );
}
