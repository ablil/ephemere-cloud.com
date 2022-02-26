import React from "react";

const container = ({ children }) => {
  return (
    <div className="p-4 rounded-xl text-center my-8 mx-auto bg-sky-600">
      <div className="rounded-xl p-4 text-white m-auto bg-black">
        {children}
      </div>
    </div>
  );
};

export default container;