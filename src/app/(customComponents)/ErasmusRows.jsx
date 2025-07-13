"use client";

import Link from "next/link";
import { Users, Globe } from "lucide-react";
import { GraduationCap, Notebook, MapPin, Calendar } from "lucide-react";

const cards = [
  {
    color: "bg-blue-600",
    icon: Users,
    title: "Student and Staff Mobility",
    desc: "Study and internship opportunities abroad for students and teachers.",
    tags: ["3–12 months of study", "Internships", "Teaching"],
    href: "#",
    tagColor: "bg-indigo-50 text-indigo-700",
  },
  {
    color: "bg-purple-800",
    icon: Globe,
    title: "Capacity Building",
    desc: "Higher education modernization projects through internationalization and cooperation.",
    tags: [
      "Program Development",
      "Management Modernization",
      "Connection with Society",
    ],
    href: "#",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    color: "bg-teal-500",
    icon: GraduationCap,
    title: "Joint Master's Programs",
    desc: "Prestigious programs offered by consortia of universities from different countries.",
    tags: ["Study in Different Countries", "Scholarships", "Double Degrees"],
    href: "#",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    color: "bg-orange-500",
    icon: Notebook,
    title: "Knowledge Alliances",
    desc: "Collaboration between higher education and business to develop innovative potential.",
    tags: [
      "Innovative Approaches",
      "Entrepreneurial Mindset",
      "Knowledge Exchange",
    ],
    href: "#",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    color: "bg-orange-400",
    icon: MapPin, // joylashuv ikonkasiga mos ravishda
    title: "Jean Monnet",
    desc: "Initiatives aimed at promoting excellence in teaching and research in the field of European studies.",
    tags: [
      "Modules and Chairs",
      "Projects and Networks",
      "Institutional Support",
    ],
    href: "#",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    color: "bg-blue-500",
    icon: Calendar, // taqvim ikonkasiga mos ravishda
    title: "Strategic Partnerships",
    desc: "Projects aimed at developing and disseminating innovative practices in education at all levels.",
    tags: ["Innovative Methods", "Cooperation", "Practice Exchange"],
    href: "#",
    tagColor: "bg-blue-100 text-blue-700",
  },
];


export default function ErasmusRows() {
  return (
    <div className="space-y-6">
      {cards.map((card, index) => (
        <article
          key={index}
          className="flex flex-col sm:flex-row overflow-hidden rounded-lg shadow"
        >
          {/* Left Icon Panel */}
          <div
            className={`${card.color} flex items-center justify-center sm:w-60 py-8 sm:py-0`}
          >
            <card.icon className="h-14 w-14 text-white" />
          </div>

          {/* Right Content */}
          <div className="flex-1 bg-gray-50 p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

          
            </div>

            <p className="text-gray-700 mb-4">{card.desc}</p>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
