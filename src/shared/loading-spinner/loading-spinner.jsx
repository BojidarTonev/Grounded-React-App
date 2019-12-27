import React from "react";
import "./loading-spinner.css";

function LoadingSpinner() {
  return (
    <div className={`spinning-loader`}>
      <i className="fas fa-compact-disc" id="spinning-disc"></i>
    </div>
  );
}

export default LoadingSpinner;
