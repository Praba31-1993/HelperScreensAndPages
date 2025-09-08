import React from "react";

function CalendarDesign() {
  const today = new Date();

  // Get year & month
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = Jan
  

  // Number of days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // First day of the month (0 = Sunday, 1 = Monday, ...)
  const firstDay = new Date(year, month, 1).getDay();

  // Adjust to make Monday the first column instead of Sunday
  const adjustedFirstDay = (firstDay + 6) % 7;

  // Build an array with empty slots + days
  const daysArray = [
    ...Array(adjustedFirstDay).fill(null), // empty slots before day 1
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  console.log('year', year, 'month', month, "daysInMonth",daysInMonth, 'firstDay',firstDay,'adjustedFirstDay',adjustedFirstDay, 'daysArray',daysArray);

const getTheDate = (list) => {
  const date = new Date(year, month - 1, list); // month - 1 because Date uses 0-based months
  const formatted = date.toLocaleDateString("en-CA"); // en-CA gives YYYY-MM-DD
  console.log("Local Date:", formatted);
  return date;
};


const getDateRange = (start, end) => {
  const startDate = new Date(start); 
  const endDate = new Date(end);

  let current = new Date(startDate);
  let result = [];

  while (current <= endDate) {
    result.push(current.toLocaleDateString("en-CA")); // YYYY-MM-DD
    current.setDate(current.getDate() + 1); // move to next day
  }

  return result;
};

// Example:
const dates = getDateRange("2025-09-03", "2025-09-15");
console.log("Range", dates);

  
  return (
    <div style={{ width: "500px" }}>
      {/* Week headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderBottom: "1px solid black",
          textAlign: "center",
        }}
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} style={{ padding: "10px", fontWeight: "bold" }}>
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "2px",
          textAlign: "center",
        }}
      >
        {daysArray.map((day, index) => (
          <div
              onClick={()=>getTheDate(day)}

            key={index}
            style={{
              height: "60px",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: day === today.getDate() ? "#cdeaff" : "white",
            }}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarDesign;
