import React from "react";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div>
      <div
        style={{
          margin: "80px 0 10px 0",
          minHeight: "calc(100vh - 380px)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
