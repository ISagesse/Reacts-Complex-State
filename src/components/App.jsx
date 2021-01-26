import React, { useState } from "react";

function App() {
  let [fName, setFName] = useState("");
  let [lName, setLName] = useState("");

  function updateFName(e) {
    setFName(e.target.value);
  }

  function updateLName(e) {
    setLName(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
