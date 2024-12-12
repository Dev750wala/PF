import React from "react";

const PageNotFound = () => {
  return (
    <div
      className="flex flex-row items-center justify-center text-[#8297BD] z-50 bg-transparent"
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* <div className="flex items-center gap-4"> */}
      <h3
        className="text-xl font-semibold border-r pr-4 border-gray-500 z-50 bg-transparent"
        style={{ borderRight: "1px solid #5c5856", paddingRight: "1.5rem" }}
      >
        404
      </h3>
      <p
        className="text-base text-gray-400 mt-2 z-50 bg-transparent"
        style={{ paddingLeft: "1.3rem" }}
      >
        This page could not be found.
      </p>
      {/* </div> */}
    </div>
  );
};

export default PageNotFound;
