import React, { useState, useEffect } from "react";

function Loading() {
  const [val, setVal] = useState(false);

  return (
    <div className="loading-div">
      <p>
        <div
          style={{ display: "block" }}
          class="spinner-border text-dark"
          role="status"
        ></div>
      </p>

      <p style={{ paddingLeft: "15px" }}> Loading...</p>
    </div>
  );
}

export default Loading;
