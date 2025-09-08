import React from "react";

function RangeAlignedCalendar({ 
  rangeStart = "2025-09-15", 
  rangeEnd = "2025-09-25", 
  joiningDate = "2025-09-18" 
}) {
  // --- Helpers ---
  const pad = (n) => String(n).padStart(2, "0");
  const toYMD = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseYMD = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const getRangeDates = (start, end) => {
    let s = parseYMD(start);
    let e = parseYMD(end);
    if (s > e) [s, e] = [e, s];
    const arr = [];
    const cur = new Date(s);
    while (cur <= e) {
      arr.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    return arr;
  };

  const dowMonFirst = (date) => (date.getDay() + 6) % 7;

  // --- Prepare ---
  const rangeDates = getRangeDates(rangeStart, rangeEnd);
  const firstDate = rangeDates[0];
  const leadingBlanks = firstDate ? dowMonFirst(firstDate) : 0;

  // Only keep necessary blanks + dates (no trailing pad)
  const cells = [
    ...Array(leadingBlanks).fill(null),
    ...rangeDates,
  ];

  const todayYMD = toYMD(new Date());
  const joining = parseYMD(joiningDate);

  return (
    <div style={{ width: "760px", fontFamily: "sans-serif" }}>
      {/* Week headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderBottom: "1px solid #ccc",
          textAlign: "center",
        }}
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} style={{ padding: "10px", fontWeight: "600" }}>
            {d}
          </div>
        ))}
      </div>

      {/* Days */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "6px",
          marginTop: "8px",
        }}
      >
        {cells.map((date, idx) => {
          if (!date) {
            return <div key={idx} />;
          }

          const ymd = toYMD(date);
          const isToday = ymd === todayYMD;
          const isDisabled = date < joining;
          const weekday = date.getDay(); // 0 = Sun, 6 = Sat
          const isWeekend = weekday === 0 || weekday === 6;

          return (
            <div
              key={idx}
              style={{
                minHeight: "72px",
                border: "1px solid #ddd",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isDisabled
                  ? "#f0f0f0"
                  : isToday
                  ? "#cdeaff"
                  : isWeekend
                  ? "#fff7a8" // yellow for weekends
                  : "white",
                color: isDisabled ? "#aaa" : "inherit",
                pointerEvents: isDisabled ? "none" : "auto",
                fontSize: 14,
                fontWeight: 500,
                userSelect: "none",
              }}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RangeAlignedCalendar;
