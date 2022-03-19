import React from "react";
import { useSelector } from "react-redux";

const UponLogin = () => {
  const name = useSelector((state) => state.details);
  console.log(name);

  return (
    <div>
      {Object.keys(name).length === 0 ? (
        <div>Loading..</div>
      ) : (
        Object.values(name)
      )}
    </div>
  );
};

export default UponLogin;
