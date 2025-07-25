"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "Form Balita", href: "https://docs.google.com/forms/d/e/1FAIpQLSeH67Ti9O_JtrjF2CeUempYzd__znKvmd4q36B5o1Q7den8hQ/viewform" },
  // { name: "Form Remaja",  },
  // { name: "Form Lansia",  },
  { name: "Form Ibu Hamil",  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2200);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E2] to-[#FFD6A5] flex items-center justify-center px-4">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FFF8E2] z-50 transition-opacity duration-700 ease-in-out">
          <Image
            src="/logo.png"
            alt="Loading Logo"
            width={100}
            height={100}
            className="animate-pulse drop-shadow-xl"
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`w-full max-w-md transition-all duration-1000 ease-in-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="drop-shadow-xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-[#062922] mb-6 tracking-wide">
          Sistem Informasi Kesehatan Masyarakat Desa Tedunan
        </h1>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 text-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-lg border border-[#062922]/20 shadow-md hover:shadow-xl text-[#062922] px-5 py-4 rounded-xl transition-all duration-300 hover:scale-105 font-semibold tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-center text-[#062922]/70">
          © {new Date().getFullYear()} Posyandu Desa Tedunan
        </p>
      </div>
    </div>
  );
}
