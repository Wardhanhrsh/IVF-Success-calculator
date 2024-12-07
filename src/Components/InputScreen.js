import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputScreen = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [procedures, setProcedures] = useState({ icsi: false, pgt: false });
  const [medicalConditions, setMedicalConditions] = useState({
    pcod: false,
    endometriosis: false,
    lowOvarianReserve: false,
    maleFactor: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ageGroup, ivfCycles, procedures, medicalConditions };
    navigate("/result", { state: { data } });
  };
  return (
    <>
      <div className="title">
        <span>Home</span>
        <span> / </span>
        <span style={{ fontWeight: "bold" }}>IVF Success Calculator </span>
      </div>
      <div className="calculate-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-text">
              <label>Which age range applies to you?</label>
            </div>

            <div className="radio-group">
              {[
                "Under 30",
                "Between 30-34",
                "Between 35-37",
                "Between 38-40",
                "Between 41-43",
                "Above 43",
              ].map((range, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name="ageGroup"
                    value={range}
                    checked={ageGroup === range}
                    onChange={(e) => setAgeGroup(e.target.value)}
                  />
                  
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <div className="label-text">
              <label>Number of IVF Cycles:</label>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              value={ivfCycles}
              onChange={(e) => setIvfCycles(e.target.value)}
              className="slider"
            />
            <p>
              {ivfCycles} IVF Cycle{ivfCycles > 1 && "s"}
            </p>
          </div>

          <div className="form-group">
            <div className="label-text">
              <label>Have you undergone these procedures before?</label>
            </div>

            <div className="radio-question">
              <label>
                <span style={{ fontWeight: "bold" }}>ICSI Procedure:</span>
                <div>
                  <input
                    type="radio"
                    name="icsi"
                    value=""
                    checked={procedures.icsi === Boolean}
                    onChange={() =>
                      setProcedures({ ...procedures, icsi: true })
                    }
                  />
                  Yes
                  <input
                    type="radio"
                    name="icsi"
                    value=""
                    checked={procedures.icsi === false}
                    onChange={() =>
                      setProcedures({ ...procedures, icsi: false })
                    }
                  />
                  No
                </div>
              </label>
              <label>
                <span style={{ fontWeight: "bold" }}>PGT Testing:</span>
                <div>
                  <input
                    type="radio"
                    name="pgt"
                    value=""
                    checked={procedures.pgt === Boolean}
                    onChange={() => setProcedures({ ...procedures, pgt: true })}
                  />
                  Yes
                  <input
                    type="radio"
                    name="pgt"
                    value=""
                    checked={procedures.pgt === false}
                    onChange={() =>
                      setProcedures({ ...procedures, pgt: false })
                    }
                  />
                  No
                </div>
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="label-text">
              <label>Do you have any of these medical conditions?</label>
            </div>

            <div className="checkbox-container">
              {[
                { label: "PCOS", key: "pcod" },
                { label: "Endometriosis", key: "endometriosis" },
                { label: "Low Ovarian Reserve", key: "lowOvarianReserve" },
                { label: "Male Factor Infertility", key: "maleFactor" },
              ].map(({ label, key }) => (
                <div key={key} className="checkbox-label">
                  <label>
                    <input
                      type="checkbox"
                      checked={medicalConditions[key]}
                      onChange={(e) =>
                        setMedicalConditions({
                          ...medicalConditions,
                          [key]: e.target.checked,
                        })
                      }
                    />
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="calculate-button">
            calculate
          </button>
        </form>
      </div>
    </>
  );
};

export default InputScreen;
