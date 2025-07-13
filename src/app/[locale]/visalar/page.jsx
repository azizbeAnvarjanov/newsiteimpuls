"use client";

import React from "react";

const TuitionFeeDetails = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Tuition Fees and Living Costs
      </h1>
      <p className="text-gray-700 text-center mb-6">
        For students enrolled <strong>prior to 2025–2026 Academic Year</strong>{" "}
        in the six-year English medium “General Medicine” program.
      </p>

      <div className="border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full table-auto text-left">
          <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">
                Tuition Fee
              </td>
              <td className="px-4 py-3 text-gray-700">3500 USD / year</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-900">
                Passport Registration Fee
              </td>
              <td className="px-4 py-3 text-gray-700">250 USD</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">
                Accommodation Fee
              </td>
              <td className="px-4 py-3 text-gray-700">70 USD / month</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-900">Visa Fee</td>
              <td className="px-4 py-3 text-gray-700">200 USD / year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
        <p className="border-l-4 border-yellow-400 pl-3">
          <strong>Note:</strong> Bank commission charges should be covered by
          the party who makes the payment.
        </p>
        <p className="border-l-4 border-yellow-400 pl-3">
          Tuition fee & Activity Service Fee are <strong>fixed</strong> and will
          not change until the completion of the course.
        </p>
        <p className="border-l-4 border-yellow-400 pl-3">
          <strong>Activity Service Fee</strong> is charged by the partner
          company and may differ (10% to 15% of the tuition fee).
        </p>
        <p className="border-l-4 border-yellow-400 pl-3">
          <strong>Accommodation Fee</strong> (including Electricity, Gas, Water)
          may vary depending on the room size and capacity.
        </p>
        <p className="border-l-4 border-yellow-400 pl-3">
          <strong>Visa & Passport Fees</strong> may vary depending on visa type,
          validity, duration, and place of living.
        </p>
      </div>
    </div>
  );
};

export default TuitionFeeDetails;
