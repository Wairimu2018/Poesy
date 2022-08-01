import React from "react";
import Poem from "../Hooks/Poem";

function PoemsContainer() {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <Poem poems={poems}/>
    </div>
  );
}

export default PoemsContainer;