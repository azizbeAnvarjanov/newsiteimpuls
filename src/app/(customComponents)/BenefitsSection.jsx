// components/BenefitsSection.jsx
"use client";

import {
  Globe,
  User,
  BadgeCheck,
  BookOpen,
  Coffee,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "International Experience",
    desc: "Opportunity to study, teach and conduct research in an international environment, get acquainted with different cultures and teaching methods.",
  },
  {
    icon: <User className="w-8 h-8 text-green-500" />,
    title: "Skills Development",
    desc: "Improvement of language competencies, intercultural skills, adaptability, independence, and increased competitiveness in the job market.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
    title: "Prestigious Opportunities",
    desc: "Access to high-quality educational programs, recognized diplomas and certificates that are valued by employers worldwide.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-rose-500" />,
    title: "Education Modernization",
    desc: "For educational institutions — the opportunity to modernize curricula, teaching methods, and administrative processes in accordance with international standards.",
  },
  {
    icon: <Coffee className="w-8 h-8 text-orange-500" />,
    title: "Broadening Horizons",
    desc: "Meeting new people, ideas, and perspectives that enrich participants' personal and professional experiences.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-purple-700" />,
    title: "Financial Support",
    desc: "Grants for studying, internships, and living abroad that make international mobility accessible to many students and teachers.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-200"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
