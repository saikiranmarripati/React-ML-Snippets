import Checkbox from "./checkbox";
import { useState } from "react";
import "./styles.css";
export default function App() {
  const [selectAll, setSelectAll] = useState(false);
  function handleChange() {
    setSelectAll((prev) => !prev);
  }
  return (
    <div className="App">
      <p>
        <label htmlFor="">
          <input type="checkbox" checked={selectAll} onChange={handleChange} />
          Select All
        </label>
      </p>
      <div>
        <Checkbox labelText="Option 1" checked={selectAll} />
        <Checkbox labelText="Option 2" checked={selectAll} />
        <Checkbox labelText="Option 3" checked={selectAll} />
      </div>
    </div>
  );
}
