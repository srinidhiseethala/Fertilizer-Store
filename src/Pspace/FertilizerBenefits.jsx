// FertilizerBenefits.jsx
import React from "react";
import "./FertilizerBenefits.css";
import fertilizerBenefits from '../Pspace/fertilizerBenefits.js';

const FertilizerBenefits = ({ showScreen2, fertilizerBenefits }) => {
  if (showScreen2) return null;

  return (
    <div className="Indetail daj">
      

      <div className="heading daj">
        <div className="Why daj">
            How fertilizers help crops?
        </div>
      </div>


      <div className="heading1 daj">
        {fertilizerBenefits.map((item, index) => (
          <div className="Info daj" key={index}>
            <div className="img_circle">
              <img src={item.image} alt={`Plant ${index + 1}`} />
            </div>
            <div className="img_matter">
              <p>
                <b><u>{item.heading}</u></b>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FertilizerBenefits;



