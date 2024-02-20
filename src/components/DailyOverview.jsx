import { Children } from "react";
import "/src/styles/dailyoverview.css";

function DailyOverview({ children, logo, number, arrow, porcent, status }) {
  return (
    <>
      <div id="overview">
        <div className="type_img">
          <p>{children}</p>
          <img src={logo} alt="logo_social" className="logo_overview" />
        </div>
        <div className="number_porcent">
          <p>{number}</p>
          <div className="arrow_porcent">
            <img src={arrow} alt="arrow" className="arrow" />
            <p className={status} >{porcent}%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyOverview;
