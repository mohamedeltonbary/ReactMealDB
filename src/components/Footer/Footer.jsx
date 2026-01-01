import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="import w-full border-t border-slate-200 bg-gradient-to-r from-[#0b304d] to-[#f7fbff] backdrop-blur-md shadow-lg">
      <div className="px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4 text-lg text-slate-300">
          <h2>Intern With Route</h2>
        </div>

        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} • Made by{" "}
          <span className="font-semibold text-slate-900">Mohamed Eltonbary</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
