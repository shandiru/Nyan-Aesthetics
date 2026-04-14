"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet Nyan Aesthetics
            </h2>
<p className="text-sage mb-6 leading-relaxed">
 Welcome to <strong>Nyan Aesthetics</strong> — premium aesthetic and skin treatments in Leeds with expert practitioners dedicated to your beauty and confidence.
  We provide professional care in a welcoming, clinical environment.
</p>

<p className="text-gray mb-8 leading-relaxed">
Whether you're seeking advanced skin treatments, plasma therapy, laser services, or specialized alopecia treatments, our team delivers exceptional results with the highest standards of care and precision.
  Nyan Aesthetics transforms your confidence and delivers stunning results.
</p>







            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Expert Practitioners",
                "Advanced Techniques",
                "Clinical Environment",
                "Specialized Care",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-rose" />
                  <span className="text-sage">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="Professional Care" />
              <Badge icon={<Award />} text="21 Years Expert" />
              <Badge icon={<Calendar />} text="Northampton Based" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
           <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="/logo.png"
      alt="Nyan Aesthetics Leeds clinic"
      className="object-contain w-135 h-auto"
    />
  </div>
</div>


            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Expert Professional"
                text="21 years of beauty industry experience"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Relaxing Environment"
                text="Calm space with heated blankets & comfort"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Friendly Service"
                text="Professional and welcoming atmosphere"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Amazing Results"
                text="Highest standards in every treatment"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>
{/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Lauren Middleton",
      service: "Eyebrow Tint & Wax",
      review:
        "My eyebrows look amazing thank you! Ruby also loves her nails and can't wait to return for her birthday nails next month! Merry Christmas.",
    },
    {
      name: "Jordanne Durham",
      service: "Threading",
      review:
        "Really gentle at threading and really friendly! Also does a good job, will be coming back again thank you 🥰",
    },
    {
      name: "Damanjit Kaur",
      service: "Shellac Manicure",
      review:
        "Thank you 😊🥰 You’re welcome always. Merry Christmas to you all. 😘 xx",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>




      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
