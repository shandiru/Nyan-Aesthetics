"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nyan Aesthetics</h3>
            <p className="text-white/80 leading-relaxed">
              Nyan Aesthetics is a premium aesthetic clinic in Leeds with expert practitioners dedicated to your beauty and confidence.
              Advanced plasma therapy, alopecia treatment, laser services, and skincare solutions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-white/80">
              {[
                "Plasma Treatment",
                "Alopecia Treatment",
                "Laser Treatments",
                "Skincare",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-white hover:text-[#F3F3F3] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.querySelector("#services");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <a href="tel:+447423294552" className="text-white hover:text-[#F3F3F3] transition-colors">+44 7423 294552</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <a href="mailto:info@nyanaesthetics.co.uk" className="text-white hover:text-[#F3F3F3] transition-colors">info@nyanaesthetics.co.uk</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-white/90">16-20 Regent St, Leeds LS2 7QA, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 my-6"></div>

        {/* Bottom Copyright */}
        <p className="text-center text-white/70">
          © 2026 Nyan Aesthetics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
