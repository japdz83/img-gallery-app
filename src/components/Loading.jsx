import React from "react";

const Loading = () => {
  return (
    <>
      <div className="text-center w-100">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
