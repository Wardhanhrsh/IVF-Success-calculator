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
    <>
      <div className="title">
        <span>Home</span>
        <span>IVF Success Calculator </span>
        <span> / </span>
        <span>Result</span>
      </div>
      <div className="result-page">
        <h1>Your Estimated IVF Success Rate is:</h1>
        <div className="success-rate-circle">
          <p className="success-percentage">{successRate}%</p>
        </div>
        <p>
          With {data?.ivfCycles} IVF Cycle{data?.ivfCycles > 1 && "s"}{" "}
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </>
  );
};

export default ResultScreen;
