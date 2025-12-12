import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          HR Dashboard
        </h1>
        <p className="text-slate-600 text-lg">
          Sistem Perencanaan Suksesi & Peta Kesiapan Talenta (Talent Readiness
          Heatmap). Silakan pilih versi tampilan matriks di bawah ini.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/v1"
          className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl group-hover:h-2 transition-all"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
            Succession Matrix V1
          </h2>
          <p className="text-slate-500 mb-6">
            Tampilan matriks standar Grid X/Y.
          </p>
          <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
            Buka Versi 1 &rarr;
          </span>
        </Link>

        <Link
          to="/v2"
          className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-2xl group-hover:h-2 transition-all"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
            Succession Matrix V2
          </h2>
          <p className="text-slate-500 mb-6">
            Tampilan alternatif/eksperimental dengan fitur tambahan.
          </p>
          <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
            Buka Versi 2 &rarr;
          </span>
        </Link>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-slate-400 text-sm">
        &copy; 2025 HR Department - Internal Tools
      </div>
    </div>
  );
}
