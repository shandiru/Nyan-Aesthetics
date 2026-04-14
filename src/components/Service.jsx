"use client";
import React from "react";
import {
  Users,
  Star,
  Award,
  Sparkles,
  Clock,
  Syringe,
  Shield,
} from "lucide-react";

export default function ServicesSection() {
  // ✅ Editable Data Arrays
  const stats = [
    { icon: <Users />, value: "300+", label: "Satisfied Clients" },
    { icon: <Star />, value: "5.0", label: "Average Rating" },
    { icon: <Award />, value: "100%", label: "Success Rate" },
  ];
  const treatments = [
  {
    image: "/logo.png",
    icon: <Syringe className="h-8 w-8 text-rose" />,
    title: "Plasma Treatment",
    description:
      "Advanced plasma therapy for hair restoration, skin tightening, and rejuvenation with visible results.",
    badges: [
      { icon: <Clock className="h-3 w-3 mr-1" />, text: "45-60 mins" },
      { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Advanced Tech" },
    ],
    list: [
      "Professional plasma therapy",
      "Hair restoration & smoothness",
      "Skin rejuvenation",
      "Visible, lasting results",
    ],
  },
  {
    image: "/logo.png",
    icon: <Syringe className="h-8 w-8 text-rose" />,
    title: "Alopecia Treatment",
    description:
      "Specialized treatment for alopecia with gentle, comfortable injections that completely clear hair loss.",
    badges: [
      { icon: <Clock className="h-3 w-3 mr-1" />, text: "30-45 mins" },
      { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Specialized Care" },
    ],
    list: [
      "Gentle injection technique",
      "Completely clears alopecia",
      "Comfortable process",
      "Professional expertise",
    ],
  },
  {
    image: "/logo.png",
    icon: <Sparkles className="h-8 w-8 text-rose" />,
    title: "Laser Treatments",
    description:
      "Cutting-edge laser technology for precise skin treatments, hair removal, and targeted aesthetic improvements.",
    badges: [
      { icon: <Clock className="h-3 w-3 mr-1" />, text: "30-90 mins" },
      { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Latest Tech" },
    ],
    list: [
      "Advanced laser technology",
      "Precise skin treatment",
      "Hair removal solutions",
      "Professional results",
    ],
  },
  {
    image: "/logo.png",
    icon: <Sparkles className="h-8 w-8 text-rose" />,
    title: "Skincare Treatments",
    description:
      "Comprehensive skincare solutions to improve skin texture, clarity, and radiance with professional expertise.",
    badges: [
      { icon: <Clock className="h-3 w-3 mr-1" />, text: "60 mins" },
      { icon: <Sparkles className="h-3 w-3 mr-1" />, text: "Professional Care" },
    ],
    list: [
      "Personalized skincare",
      "Improved texture & clarity",
      "Professional treatments",
      "Radiant, glowing skin",
    ],
  },
];

  const infoCards = [
    {
      icon: <Shield className="h-6 w-6 text-rose" />,
      title: "Medical Grade Care",
      text: "Clinical environment with advanced technology and professional expertise for safe, effective treatments.",
    },
    {
      icon: <Clock className="h-6 w-6 text-sage" />,
      title: "Comfortable Process",
      text: "Gentle techniques ensuring comfort throughout all our aesthetic treatments and procedures.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Nyan Aesthetics service logo"
              className="h-16 mx-auto bg-[#3C3C3B]"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            Nyan Aesthetics Services
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Advanced aesthetic treatments including plasma therapy, alopecia care, laser services, and professional skincare in Leeds.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Treatments Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {treatments.map((treatment, i) => (
            <TreatmentCard key={i} {...treatment} />
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {infoCards.map((info, i) => (
            <InfoCard key={i} {...info} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 rounded-md bg-primary text-white font-medium text-sm shadow hover:bg-[#2d2d2c] transition-all">
            Book Your Treatment
          </button>
        </div>
      </div>
    </section>
  );
}

/* Reusable Components */

function StatCard({ icon, value, label }) {
  return (
    <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl border border-[#EAEAEA] shadow-sm py-8">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-[#666]">{label}</div>
    </div>
  );
}

function TreatmentCard({ image, icon, title, description, badges, list }) {
  return (
    <div className="rounded-xl border border-[#EAEAEA] shadow-sm bg-white overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden bg-primary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C3C3B]/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          {icon}
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-[#555] text-base mb-4 leading-relaxed">
          {description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center text-xs bg-[#EFE9E4] text-[#4A403B] rounded-md px-2 py-1"
            >
              {b.icon}
              {b.text}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2 mb-4">
          {list.map((item, i) => (
            <li key={i} className="flex items-center space-x-2 text-sm">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span className="text-[#555]">{item}</span>
            </li>
          ))}
        </ul>

        {/* ✅ Fixed Hover Button */}
        <button className="w-full py-2 border border-gray-200 text-white rounded-md text-sm bg-primary hover:bg-[#2d2d2c] transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm border border-[#EAEAEA] rounded-xl p-6 shadow-sm">
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold text-[#333] mb-1">{title}</h3>
        <p className="text-[#666] text-sm">{text}</p>
      </div>
    </div>
  );
}
