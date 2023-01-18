import React from "react";

function Row({
  passDataToRow,
  rowIdx,
  passAnswerToRow,
  sizeLimit,
  isBlue,
  isGrey,
  isRed,
  setGuess,
}) {
  const pegDivs = [];

  if (passAnswerToRow[rowIdx]) {
    for (let i = 0; i < passAnswerToRow[rowIdx][0]; i++) {
      pegDivs.push(
        <div className="black-pegs" key={`blacks-${i}`}>
          <img alt="bart" src={require(`../../../assets/img/bart.png`)} />
        </div>
      );
    }
    for (let i = 0; i < passAnswerToRow[rowIdx][1]; i++) {
      pegDivs.push(
        <div className="white-pegs" key={`whites-${i}`}>
          <img alt="lisa" src={require(`../../../assets/img/lisa.png`)} />
        </div>
      );
    }
  }

  return (
    <>
      <div className={`row-${sizeLimit}`}>
        <div className={`fa-solid fa-angles-right ${isBlue} ${isGrey}`}></div>

        {[...Array(sizeLimit)].map((x, idx) => (
          <div className="row-tile" key={`row-${rowIdx}-${idx}`}>
            {idx in passDataToRow[rowIdx] ? (
              <img
                alt="donut"
                className="row-donut-image"
                src={require(`../../../assets/img/${passDataToRow[rowIdx][idx]}.png`)}
              />
            ) : (
              <img
                alt="empty-donut"
                className="row-donut-image empty-donut"
                src={require(`../../../assets/img/empty-donut.png`)}
              />
            )}
          </div>
        ))}

        <div
          className={`fa-solid fa-xmark ${isRed}`}
          onClick={() => {
            if (isRed) {
              setGuess([]);
              passDataToRow[rowIdx] = [];
            }
          }}
        ></div>

        <div className={`pegs-${sizeLimit}`}>{pegDivs}</div>
      </div>
    </>
  );
}

export default Row;
