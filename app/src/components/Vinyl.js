import React from "react";

const Vinyl = ({ title, authors, coverUrl }) => {
  return (
    <div className="vinylCase">
      <div className="overlay">
        <div className="vinylCaseInfo">
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
      <div className="vinyl"></div>
    </div>
  );
};

export default Vinyl;
