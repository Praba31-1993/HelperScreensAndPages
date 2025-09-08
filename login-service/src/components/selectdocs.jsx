import React, { useState } from "react";

function SelectDocs() {
  const list = [
    { id: "645", name: "docker" },
    { id: "646", name: "linux" },
    { id: "648", name: "king" }, // king is also in the list
  ];

  const textData = { id: "648", name: "king" }; // default selected item
  const [selectedValue, setSelectedValue] = useState(textData.id);

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
            hidden={data.id === textData.id} // ✅ hide 'king' from dropdown
          >
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDocs;
