import React, { useEffect, useState } from "react";

function Checkbox(props: any) {
  let { labelText, checked } = props;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (Boolean(checked)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checked]);

  function handleChange() {
    setIsChecked((prev) => !prev);
  }

  return (
    <p style={{ marginLeft: "35px" }}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {labelText}
      </label>
    </p>
  );
}

export default Checkbox;
