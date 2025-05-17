// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const InputScreen = () => {
//   const [ageGroup, setAgeGroup] = useState("");
//   const [ivfCycles, setIvfCycles] = useState(1);
//   const [procedures, setProcedures] = useState({ icsi: false, pgt: false });
//   const [medicalConditions, setMedicalConditions] = useState({
//     pcod: false,
//     endometriosis: false,
//     lowOvarianReserve: false,
//     maleFactor: false,
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { ageGroup, ivfCycles, procedures, medicalConditions };
//     navigate("/result", { state: { data } });
//   };
//   return (
//     <>
//       <div className="title">
//         <span>Home</span>
//         <span> / </span>
//         <span style={{ fontWeight: "bold" }}>IVF Success Calculator </span>
//       </div>
//       <div className="calculate-page">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <div className="label-text">
//               <label>Which age range applies to you?</label>
//             </div>

//             <div className="radio-group">
//               {[
//                 "Under 30",
//                 "Between 30-34",
//                 "Between 35-37",
//                 "Between 38-40",
//                 "Between 41-43",
//                 "Above 43",
//               ].map((range, idx) => (
//                 <label key={idx}>
//                   <input
//                     type="radio"
//                     name="ageGroup"
//                     value={range}
//                     checked={ageGroup === range}
//                     onChange={(e) => setAgeGroup(e.target.value)}
//                   />
//                   {range}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="label-text">
//               <label>Number of IVF Cycles:</label>
//             </div>

//             <input
//               type="range"
//               min="1"
//               max="10"
//               value={ivfCycles}
//               onChange={(e) => setIvfCycles(Number(e.target.value))}
//               className="slider"
//             />
//             <p>
//               {ivfCycles} IVF Cycle{ivfCycles > 1 && "s"}
//             </p>
//           </div>

//           <div className="form-group">
//             <div className="label-text">
//               <label>Have you undergone these procedures before?</label>
//             </div>

//             <div className="radio-question">
//               <label>
//                 <span style={{ fontWeight: "bold" }}>ICSI Procedure:</span>
//                 <div>
//                   <input
//                     type="radio"
//                     name="icsi"
//                     value=""
//                     checked={procedures.icsi === true}
//                     onChange={() =>
//                       setProcedures({ ...procedures, icsi: true })
//                     }
//                   />
//                   Yes
//                   <input
//                     type="radio"
//                     name="icsi"
//                     value=""
//                     checked={procedures.icsi === false}
//                     onChange={() =>
//                       setProcedures({ ...procedures, icsi: false })
//                     }
//                   />
//                   No
//                 </div>
//               </label>
//               <label>
//                 <span style={{ fontWeight: "bold" }}>PGT Testing:</span>
//                 <div>
//                   <input
//                     type="radio"
//                     name="pgt"
//                     value=""
//                     checked={procedures.pgt === true}
//                     onChange={() => setProcedures({ ...procedures, pgt: true })}
//                   />
//                   Yes
//                   <input
//                     type="radio"
//                     name="pgt"
//                     value=""
//                     checked={procedures.pgt === false}
//                     onChange={() =>
//                       setProcedures({ ...procedures, pgt: false })
//                     }
//                   />
//                   No
//                 </div>
//               </label>
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="label-text">
//               <label>Do you have any of these medical conditions?</label>
//             </div>

//             <div className="checkbox-container">
//               {[
//                 { label: "PCOS", key: "pcod" },
//                 { label: "Endometriosis", key: "endometriosis" },
//                 { label: "Low Ovarian Reserve", key: "lowOvarianReserve" },
//                 { label: "Male Factor Infertility", key: "maleFactor" },
//               ].map(({ label, key }) => (
//                 <div key={key} className="checkbox-label">
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={medicalConditions[key]}
//                       onChange={(e) =>
//                         setMedicalConditions({
//                           ...medicalConditions,
//                           [key]: e.target.checked,
//                         })
//                       }
//                     />
//                     {label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button type="submit" className="calculate-button">
//             calculate
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default InputScreen;
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
    <div className="mt-20 px-4 max-w-3xl mx-auto">
      <div className="text-gray-700 text-lg mb-6 flex space-x-2">
        <span>Home</span>
        <span>/</span>
        <span className="font-bold">IVF Success Calculator</span>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-xl font-medium text-center mb-4">
            Which age range applies to you?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Under 30", "Between 30-34", "Between 35-37", "Between 38-40", "Between 41-43", "Above 43"].map((range, idx) => (
              <label key={idx} className="flex items-center">
                <input
                  type="radio"
                  name="ageGroup"
                  value={range}
                  checked={ageGroup === range}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="mr-2 text-orange-500"
                />
                {range}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xl font-medium text-center mb-4">
            Number of IVF Cycles:
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={ivfCycles}
            onChange={(e) => setIvfCycles(e.target.value)}
            className="w-full h-2 bg-orange-300 rounded-lg cursor-pointer accent-orange-500"
          />
          <p className="text-center mt-2">{ivfCycles} IVF Cycle{ivfCycles > 1 && "s"}</p>
        </div>

        <div>
          <label className="block text-xl font-medium text-center mb-4">
            Have you undergone these procedures before?
          </label>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">ICSI Procedure:</span>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="icsi"
                    checked={procedures.icsi === true}
                    onChange={() => setProcedures({ ...procedures, icsi: true })}
                    className="mr-2 accent-orange-500"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="icsi"
                    checked={procedures.icsi === false}
                    onChange={() => setProcedures({ ...procedures, icsi: false })}
                    className="mr-2 accent-orange-500"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">PGT Testing:</span>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="pgt"
                    checked={procedures.pgt === true}
                    onChange={() => setProcedures({ ...procedures, pgt: true })}
                    className="mr-2 accent-orange-500"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="pgt"
                    checked={procedures.pgt === false}
                    onChange={() => setProcedures({ ...procedures, pgt: false })}
                    className="mr-2 accent-orange-500"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xl font-medium text-center mb-4">
            Do you have any of these medical conditions?
          </label>
          <div className="flex flex-wrap gap-4 justify-center">
            {[{ label: "PCOS", key: "pcod" }, { label: "Endometriosis", key: "endometriosis" }, { label: "Low Ovarian Reserve", key: "lowOvarianReserve" }, { label: "Male Factor Infertility", key: "maleFactor" }].map(({ label, key }) => (
              <label key={key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={medicalConditions[key]}
                  onChange={(e) =>
                    setMedicalConditions({
                      ...medicalConditions,
                      [key]: e.target.checked,
                    })
                  }
                  className="accent-orange-500"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 block mx-auto"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default InputScreen;
