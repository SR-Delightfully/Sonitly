import React from "react";

const CD = ({ title, authors, coverUrl }) => {
  return (
    <div className="cdCase">
      <div className="overlay">
        <div className="cdCaseInfo">
          <h3>{title}</h3>
          <h5>
            {authors}
            </h5>
        </div>
      </div>
      <img className="cover" src={coverUrl} alt={`${title} cover`} />
      <div className="slotwrapper">
        <div className="slot"></div>
      </div>
      <div className="CD"></div>
    </div>
  );
};

export default CD;
