import React from "react";

function ChallengeMode({ setSizeLimit, reset, playClick }) {
  return (
    <>
      <div className="nes-select is-error">
        <select
          defaultValue={"DEFAULT"}
          required
          id="error_select"
          onChange={(e) => {
            setSizeLimit(parseInt(e.target.value));
            reset();
            playClick();
          }}
        >
          <option value="DEFAULT" disabled hidden>
            LEVEL
          </option>
          <option value="4">EASY</option>
          <option value="5">MEDIUM</option>
          <option value="6">HARD</option>
        </select>
      </div>
    </>
  );
}

export default ChallengeMode;
