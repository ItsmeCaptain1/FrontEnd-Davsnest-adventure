import React, { useState } from "react";

const CAT = () => {
  var [counter, increament] = useState(0);
  return (
    <div className="grp">
      <button onClick={() => increament(counter + 1)}>{counter}</button>
    </div>
  );
};
export default CAT;
