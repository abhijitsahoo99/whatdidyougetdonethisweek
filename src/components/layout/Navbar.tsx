
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tailwind font sizes: desktop 2xl, tablet xl, mobile lg
  const brandTextClass =
    "font-bold whitespace-nowrap transition-all duration-300" +
    " text-2xl md:text-2xl sm:text-xl xs:text-lg";

  // Responsive adjustments for hide/show links
  return (
    <nav className="relative bg-[rgba(2,3,222,1)] flex w-full items-center justify-between pl-6 pr-6 py-5 max-md:px-4 max-sm:px-2">
      {/* Brand */}
      <Link
        to="/"
        className={`${brandTextClass} text-white`}
        style={{
          fontSize: isMobile
            ? "1.125rem"
            : window.innerWidth < 1024
            ? "1.25rem"
            : "1.5rem",
        }}
      >
        Whatdidyougetdonethisweek?
      </Link>
      {/* Desktop Links */}
      {!isMobile && (
        <div className="flex items-center gap-7">
          <Link
            to="/about"
            className="text-white bg-[rgba(2,3,222,1)] hover:bg-[rgba(2,3,222,0.9)] transition-colors px-4 py-2 rounded-lg font-bold text-2xl md:text-2xl sm:text-xl"
          >
            About
          </Link>
          <Link
            to="/get-started"
            className="bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg font-bold text-2xl md:text-2xl sm:text-xl"
          >
            Get Started
          </Link>
        </div>
      )}
      {/* Hamburger on Mobile */}
      {isMobile && (
        <button
          className="text-white focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      )}

      {/* Mobile Slide-in Menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg flex flex-col items-end px-6 pt-8 gap-8 transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ minWidth: 200 }}
          >
            <button
              className="mb-3 mt-0 text-black"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={36} />
            </button>
            <div className="flex flex-col items-end gap-3 w-full">
              <Link
                to="/about"
                className="w-full text-right py-3 px-2 text-xl font-bold text-[rgba(2,3,222,1)] hover:underline transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/get-started"
                className="w-full text-right py-3 px-2 bg-[rgba(2,3,222,1)] text-white rounded-lg text-xl font-bold hover:bg-[rgba(2,3,222,0.9)] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
