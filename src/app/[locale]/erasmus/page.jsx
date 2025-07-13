"use client";

import React from "react";
import { Globe, BookOpen } from "lucide-react";
import ErasmusRows from "@/app/(customComponents)/ErasmusRows";
import BenefitsSection from "@/app/(customComponents)/BenefitsSection";

const Erasmus = () => {
  return (
    <div className="py-10 px-4 bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto space-y-4 flex flex-col justify-center min-h-[50vh]">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase text-center sm:text-left">
          Program
        </h1>
        <h1 className="text-4xl sm:text-5xl text-blue-600 font-bold uppercase text-center sm:text-left">
          Erasmus+
        </h1>
        <p className="text-base sm:text-xl text-gray-700 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
          Erasmus+ is a European Union program aimed at supporting projects,
          partnerships, events, and mobility in the fields of education,
          training, youth, and sports.
        </p>
      </div>

      {/* International Educational Opportunities Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h1 className="text-3xl sm:text-4xl text-blue-600 font-bold text-center sm:text-left">
          International Educational Opportunities
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 py-8">
          {/* International Cooperation */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-600 text-white p-3 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                International Cooperation
              </h2>
            </div>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              Erasmus+ provides funding opportunities for cooperation both
              between European countries (so-called program countries) and
              between these European countries and partner countries around the
              world.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              The program supports a variety of projects aimed at achieving
              long-term impact on universities and higher education systems in
              partner countries.
            </p>
          </div>

          {/* Educational Initiatives */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Educational Initiatives
              </h2>
            </div>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              Within Erasmus+ CBHE (Capacity Building in Higher Education), the
              European Union supports projects aimed at enhancing the capacity
              of higher education institutions.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Capacity building projects are based on multilateral partnerships,
              primarily between higher education institutions (HEIs) from 34
              program countries and more than 150 partner countries.
            </p>
          </div>
        </div>
      </div>

      {/* Projects and Opportunities Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl text-blue-600 font-bold">
            Projects and Opportunities
          </h1>
          <p className="text-sm text-gray-600">
            Programs for educational capacity development
          </p>
        </div>
        <div className="mt-6">
          <ErasmusRows />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <span className="mx-auto bg-red-200 py-1 px-4 text-sm rounded-full">
            For Students and Institutions
          </span>
          <h1 className="text-2xl sm:text-3xl text-blue-600 font-bold">
            Benefits of Participating in Erasmus+
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            The Erasmus+ program offers many benefits for students, teachers,
            and educational institutions around the world.
          </p>
        </div>
        <div className="mt-10">
          <BenefitsSection />
        </div>
      </div>
    </div>
  );
};

export default Erasmus;
