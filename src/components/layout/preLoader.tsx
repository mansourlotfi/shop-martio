import React from "react";

function PreLoader() {
  return (
    <div className="preloader-wrapper preloader-active preloader-open">
      <div className="preloader-holder">
        <div className="preloader d-flex justify-content-center align-items-center h-100">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
