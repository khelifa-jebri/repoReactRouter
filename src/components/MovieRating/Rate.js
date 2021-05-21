import React from "react";
import "../MovieRating/Rate.css";
function Rate(props) {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span className="stars" key={i} onClick={() => props.setRateSearch(i)}>
            ★
          </span>
        );
      } else {
        starArray.push(
          <span className="stars" key={i} onClick={() => props.setRateSearch(i)}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(props.rate)}</div>;
}

export default Rate;
