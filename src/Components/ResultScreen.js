// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const ResultScreen = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { data } = location.state || {};

//   const calculateSuccessRate = () => {
//     if (!data) return 0;
//     let baseRate = 62;
//     if (data.ageGroup === "Under 30") baseRate += 10;
//     if (data.ageGroup === "Above 43") baseRate -= 20;
//     baseRate += parseInt(data.ivfCycles) * 2;
//     return Math.min(100, baseRate);
//   };

//   const successRate = calculateSuccessRate();
//   return (
//     <>
//       <div className="title">
//         <span>Home</span>
//         <span>IVF Success Calculator </span>
//         <span> / </span>
//         <span>Result</span>
//       </div>
//       <div className="result-page">
//         <h1>Your Estimated IVF Success Rate is:</h1>
//         <div className="success-rate-circle">
//           <p className="success-percentage">{successRate}%</p>
//         </div>
//         <p>
//           With {data?.ivfCycles} IVF Cycle{data?.ivfCycles > 1 && "s"}{" "}
//         </p>
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//     </>
//   );
// };

// export default ResultScreen;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  const calculateSuccessRate = () => {
    if (!data) return 0;
    let baseRate = 62;
    if (data.ageGroup === "Under 30") baseRate += 10;
    if (data.ageGroup === "Above 43") baseRate -= 20;
    baseRate += parseInt(data.ivfCycles) * 2;
    return Math.min(100, baseRate);
  };

  const successRate = calculateSuccessRate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="w-full max-w-3xl text-sm text-gray-500 mb-4">
        <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </span>{" "}
        / <span className="font-medium text-gray-700">IVF Success Calculator</span> /{" "}
        <span className="text-gray-900 font-semibold">Result</span>
      </div>

      {/* Main Result Box */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Your Estimated IVF Success Rate is:
        </h1>

        {/* Success Rate Circle */}
        <div className="w-40 h-40 rounded-full bg-green-100 border-8 border-green-400 mx-auto flex items-center justify-center mb-6 shadow-inner">
          <p className="text-4xl font-extrabold text-green-700">{successRate}%</p>
        </div>

        {/* IVF Cycles Info */}
        <p className="text-gray-700 text-lg mb-4">
          With {data?.ivfCycles} IVF Cycle{data?.ivfCycles > 1 && "s"}
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
