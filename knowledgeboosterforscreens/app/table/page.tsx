"use client";

import React, { useState, useRef } from "react";

const dummyData = [
  {
    employeeId: "SR389",
    employeename: "rajan",
    date: "2022-12-03",
    status: "present",
    punchin: "12:00pm",
    punchout: "09:00pm",
    duration: "09:00",
    reason: "Medical",
  },
  {
    employeeId: "SR390",
    employeename: "Anjali",
    date: "2022-12-04",
    status: "present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR391",
    employeename: "manish",
    date: "2022-12-05",
    status: "Sick Leave",
    punchin: "-",
    punchout: "-",
    duration: "00:00",
    reason: "Sick",
  },
  {
    employeeId: "SR392",
    employeename: "priya",
    date: "2022-12-06",
    status: "present",
    punchin: "10:00am",
    punchout: "07:00pm",
    duration: "09:00",
    reason: "none",
  },
  {
    employeeId: "SR393",
    employeename: "vikram",
    date: "2022-12-07",
    status: "Late",
    punchin: "11:00am",
    punchout: "08:00pm",
    duration: "09:00",
    reason: "Traffic",
  },
  {
    employeeId: "SR394",
    employeename: "neha",
    date: "2022-12-08",
    status: "present",
    punchin: "09:30am",
    punchout: "06:30pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR395",
    employeename: "arjun",
    date: "2022-12-09",
    status: "present",
    punchin: "09:15am",
    punchout: "06:15pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR396",
    employeename: "divya",
    date: "2022-12-10",
    status: "Half Day",
    punchin: "09:00am",
    punchout: "01:00pm",
    duration: "04:00",
    reason: "Personal",
  },
  {
    employeeId: "SR397",
    employeename: "karan",
    date: "2022-12-11",
    status: "present",
    punchin: "08:45am",
    punchout: "05:45pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR398",
    employeename: "simran",
    date: "2022-12-12",
    status: "Casual Leave",
    punchin: "-",
    punchout: "-",
    duration: "00:00",
    reason: "Vacation",
  },
  {
    employeeId: "SR399",
    employeename: "amit",
    date: "2022-12-13",
    status: "present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR400",
    employeename: "sara",
    date: "2022-12-14",
    status: "Late",
    punchin: "10:30am",
    punchout: "07:30pm",
    duration: "09:00",
    reason: "Delayed",
  },
  {
    employeeId: "SR401",
    employeename: "rahul",
    date: "2022-12-15",
    status: "present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR402",
    employeename: "pooja",
    date: "2022-11-16",
    status: "present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR403",
    employeename: "rohan",
    date: "2024-12-17",
    status: "Half Day",
    punchin: "09:00am",
    punchout: "01:00pm",
    duration: "04:00",
    reason: "Personal",
  },
];

// const dummyData: any = [];
const headers = dummyData.length > 0 ? Object.keys(dummyData[0]) : [];

function Tables() {
  const [data, setData] = useState(dummyData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({
    key: "",
    direction: null,
  });

  // Filtering state
  const [filterKey, setFilterKey] = useState<keyof (typeof dummyData)[0] | "">(
    ""
  );
  const [filterOperator, setFilterOperator] = useState<"equal" | "notEqual">(
    "equal"
  );
  const [filterValue, setFilterValue] = useState("");
  const [activeFilterColumn, setActiveFilterColumn] = useState<string | null>(
    null
  );
  const [filterBoxPosition, setFilterBoxPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterDay, setFilterDay] = useState("");

  const tableRef = useRef<HTMLTableElement>(null);

  // Sorting function
  const handleSort = (key: keyof (typeof dummyData)[0]) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  // Function to toggle the filter box and set its position
  const handleFilterToggle = (
    key: keyof (typeof dummyData)[0] | any,
    event: React.MouseEvent
  ) => {
    if (activeFilterColumn === key) {
      setActiveFilterColumn(null); // Close the filter box if the same column is clicked again
    } else {
      setFilterKey(key); // Set current filter column

      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect(); // Get position of the clicked filter icon

      const thElement = target.closest("th"); // Get the header cell
      const tableElement = thElement?.closest("table"); // Find the table

      if (thElement && tableElement) {
        const thRect = thElement.getBoundingClientRect();
        const tableRect = tableElement.getBoundingClientRect();

        // Get the first letter position
        const textNode = thElement.firstChild;
        let leftPosition = thRect.left;

        if (textNode) {
          const range = document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(textNode, 1); // Select first letter
          const textRect = range.getBoundingClientRect();
          leftPosition = textRect.left;
        }

        // Ensure the filter box stays inside the table
        const filterBoxWidth = 200; // Adjust based on your filter box width
        if (leftPosition + filterBoxWidth > tableRect.right) {
          leftPosition = tableRect.right - filterBoxWidth - 10; // Adjust to fit inside
        }

        setFilterBoxPosition({
          top: thRect.bottom + window.scrollY + 5, // Below the header
          left: leftPosition + window.scrollX, // Adjusted position
        });
      }
      setActiveFilterColumn(key);
    }
  };

  // Filtering function
  const handleFilter = () => {
    if (!filterKey) return;

    const filteredData = dummyData?.filter((item: any) => {
      if (filterKey === "date") {
        const [year, month, day] = item.date.split("-"); // Extract Y-M-D

        const matchesYear = filterYear ? year === filterYear : true;
        const matchesMonth = filterMonth ? month === filterMonth : true;
        const matchesDay = filterDay ? day === filterDay : true;

        return matchesYear && matchesMonth && matchesDay;
      } else {
        const itemValue = String(item[filterKey]).trim().toLowerCase();
        const searchValue = filterValue.trim().toLowerCase();
        return filterOperator === "equal"
          ? itemValue === searchValue
          : itemValue !== searchValue;
      }
    });

    setData(filteredData);
    setActiveFilterColumn(null);
  };

  // Clear filter
  const handleClear = () => {
    setFilterKey("");
    setFilterOperator("equal");
    setFilterValue("");
    setData(dummyData);
    setActiveFilterColumn(null);
  };

  return (
    <div className="relative " style={{ overflowX: "auto" }}>
      <table ref={tableRef} className="table">
        <thead style={{ backgroundColor: "#F6F7FB" }}>
          <tr>
            {headers.map((key) => (
              <th key={key} scope="col" className="position-relative">
                {key.charAt(0).toUpperCase()+key.slice(1)}
                <span className="d-inline-flex gap-2 ms-2">
                  <div
                    style={{ cursor: "pointer", height: "13px" }}
                    onClick={() =>
                      handleSort(key as keyof (typeof dummyData)[0])
                    }
                  />
                  <div
                    style={{ cursor: "pointer", height: "13px" }}
                    onClick={(event: any) =>
                      handleFilterToggle(
                        key as keyof (typeof dummyData)[0],
                        event
                      )
                    }
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item: any) => (
              <tr key={item.employeeId}>
                <td className="para textheader">{item?.employeeId}</td>
                <td className="para textheader">{item?.employeename.charAt(0).toUpperCase()+item?.employeename.slice(1)}</td>
                <td className="para textheader">{item?.date}</td>
                <td className="para textheader">{item?.status}</td>
                <td className="para textheader">{item?.punchin}</td>
                <td className="para textheader">{item?.punchout}</td>
                <td className="para textheader">{item?.duration}</td>
                <td className="para textheader">{item?.reason}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center p-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Filter Box - Position dynamically */}
      {activeFilterColumn && (
        <div
          className="card card-body px-0 py-2"
          style={{
            width: "10em",
            position: "absolute",
            top: `${filterBoxPosition.top}px`,
            left: `${filterBoxPosition.left}px`,
            zIndex: 1000,
            backgroundColor: "white",
            border: "1px solid #ddd",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="d-flex flex-column p-2 gap-2">
            {filterKey === "date" ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  placeholder="Enter Year (YYYY)"
                />
                <input
                  type="text"
                  className="form-control"
                  value={filterMonth}
                  onChange={(e) => setFilterMonth(e.target.value)}
                  placeholder="Enter Month (MM)"
                />
                <input
                  type="text"
                  className="form-control"
                  value={filterDay}
                  onChange={(e) => setFilterDay(e.target.value)}
                  placeholder="Enter Day (DD)"
                />
              </>
            ) : (
              <>
                <select
                  className="form-control"
                  value={filterOperator}
                  onChange={(e) =>
                    setFilterOperator(e.target.value as "equal" | "notEqual")
                  }
                >
                  <option value="equal">Equal</option>
                  <option value="notEqual">Not Equal To</option>
                </select>

                <input
                  type="text"
                  className="form-control"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder={`Enter ${activeFilterColumn} value`}
                />
              </>
            )}
          </div>

          <div className="d-flex gap-2 justify-content-end mt-2 p-2">
            <button className="btn btn-primary" onClick={handleFilter}>
              Filter
            </button>
            <button className="btn btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tables;
