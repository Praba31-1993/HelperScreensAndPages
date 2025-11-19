import React from "react";

const DateConverter = ({ dateStr, targetFormat }) => {
  const convertDateToFormat = (dateStr, targetFormat) => {
    const separator = dateStr.includes("-") ? "-" : "/";
    const parts = dateStr.split(separator);

    let day, month, year;

    if (parts[0].length === 4) {
      // yyyy-mm-dd or yyyy/mm/dd
      [year, month, day] = parts;
    } else if (parts[2].length === 4) {
      // dd-mm-yyyy or mm-dd-yyyy
      if (Number(parts[0]) > 12) {
        [day, month, year] = parts; // dd/mm/yyyy
      } else {
        [month, day, year] = parts; // mm/dd/yyyy
      }
    } else {
      return "Unrecognized date format: " + dateStr;
    }

    return targetFormat
      .replace("dd", day.padStart(2, "0"))
      .replace("mm", month.padStart(2, "0"))
      .replace("yyyy", year);
  };

  let convertedDate;
  try {
    convertedDate = convertDateToFormat(dateStr, targetFormat);
  } catch (err) {
    convertedDate = err.message;
  }

  return (
    <div style={{ fontFamily: "monospace", padding: "8px" }}>
      <p>
        <strong>Input:</strong> {dateStr}
      </p>
      <p>
        <strong>Target Format:</strong> {targetFormat}
      </p>
      <p>
        <strong>Converted:</strong> {convertedDate}
      </p>
    </div>
  );
};

export default DateConverter;
