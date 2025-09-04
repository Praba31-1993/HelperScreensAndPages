import React, { useState } from "react";

function SelectDocs() {
  const list = [
    { id: "645", name: "docker" },
    { id: "646", name: "linux" },
    { id: "648", name: "king" }
  ];

  const textData = ["king"]; // ✅ array of default selected names

  // pick the first matching default item
  const defaultItem = list.find((item) => textData.includes(item.name));

  const [selectedValue, setSelectedValue] = useState(defaultItem?.id || "");

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {list.map((data) => (
          <option
            key={data.id}
            value={data.id}
            hidden={data.id === selectedValue} // ✅ hide currently selected one
          >
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDocs;
