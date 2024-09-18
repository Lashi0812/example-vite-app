import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div
      style={{
        padding: 20,
        fontSize: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {number < 3 ? <Count number={number} /> : null}
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;
