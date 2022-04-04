import React from "react";
import "./style.scss";

function MsgError({ msg, clear }) {
  return (
    <div className="errorMsg">
      <button className="errorMsg-cancel" onClick={clear}>
        X
      </button>
      <span>{msg}</span>
    </div>
  );
}

export default MsgError;
