import React from "react";
import Data from "../Data/FlipData";

const FlipBox = () => {
  return (
    <div>
      <div className="flip-box">
        <div className="flip-box-heading">
          <h3>
            OPTIMIZE YOUR CAMPAIGNS WITH BUD'S EMAIL MARKETING <br />
            STRATEGIES
          </h3>
        </div>
        <div className="container1">
          <div className="flip-box-main-grid">
            <div className="flip-box-grid">
              {/* start  */}
              {Data.map((current) => {
                const { tittle, detail } = current;
                return (
                  <>
                    <div className="flip-box-grid-1">
                      <div className="flip-main-card">
                        <div className="flip-front">
                          <h4>{tittle}</h4>
                        </div>
                        <div className="flip-back">
                          <div className="flip-card-scroll">
                            <p>{detail}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
