import React from "react";
import "./Programs.css";
import program_1 from "../../assets/images/program-1.png";
import program_2 from "../../assets/images/program-2.png";
import program_3 from "../../assets/images/program-3.png";
import program_icon_1 from "../../assets/images/program-icon-1.png";
import program_icon_2 from "../../assets/images/program-icon-2.png";
import program_icon_3 from "../../assets/images/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="Program1" />
        <div className="caption">
          <img src={program_icon_1} alt="ProgramIcon1" />
          <p>Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Program2" />
        <div className="caption">
          <img src={program_icon_2} alt="ProgramIcon2" />
          <p>Masters degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Program3" />
        <div className="caption">
          <img src={program_icon_3} alt="ProgramIcon3" />
          <p>Post degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
