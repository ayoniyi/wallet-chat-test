import { useState } from "react";

const test = () => {
  const [currentFood, setCurrentFood] = useState("rice");
  const [currenPg, setCurrentPg] = useState(1);

  return (
    <>
      <div className="tabs">
        <div className="tab">Rice</div>
        <div className="tab">Beans</div>
        <div className="tab">Swallow</div>
        <div className="tab">Lore</div>
        <div className="tab">Rice</div>
      </div>

      <div className="content">
        {currentFood === "rice" && currenPg === 1 && (
          <div className="contentFull">
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
            <div className="contentInfo">
              <img src="" alt="" />
              <p>description for rice :(pg1) </p>
            </div>
          </div>
        )}
        {currentFood === "rice" && currenPg === 2 && (
          <div className="contentFull">
            <img src="" alt="" />
            <p>description for rice :(pg2) </p>
          </div>
        )}
        {currentFood === "rice" && currenPg === 3 && (
          <div className="contentFull">
            <img src="" alt="" />
            <p>description for rice :(pg2) </p>
          </div>
        )}
        {currentFood === "rice" && currenPg === 4 && (
          <div className="contentFull">
            <img src="" alt="" />
            <p>description for rice :(pg2) </p>
          </div>
        )}
      </div>
    </>
  );
};

export default test;
