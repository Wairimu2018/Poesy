import React from "react";
import Poem from "./Poem";

function PoemsContainer() {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <Poem poems={Poem}/>
    </div>
  );
}

export default PoemsContainer;