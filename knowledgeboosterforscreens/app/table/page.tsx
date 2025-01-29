"use client";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";

const dummyData = [
  {
    employeeId: "SR389",
    employeename: "Rajan",
    date: "2022-12-03",
    status: "Present",
    punchin: "12:00pm",
    punchout: "09:00pm",
    duration: "09:00",
    reason: "Medical",
  },
  {
    employeeId: "SR390",
    employeename: "Anjali",
    date: "2022-12-04",
    status: "Present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR391",
    employeename: "Manish",
    date: "2022-12-05",
    status: "Sick Leave",
    punchin: "-",
    punchout: "-",
    duration: "00:00",
    reason: "Sick",
  },
  {
    employeeId: "SR392",
    employeename: "Priya",
    date: "2022-12-06",
    status: "Present",
    punchin: "10:00am",
    punchout: "07:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR393",
    employeename: "Vikram",
    date: "2022-12-07",
    status: "Late",
    punchin: "11:00am",
    punchout: "08:00pm",
    duration: "09:00",
    reason: "Traffic",
  },
  {
    employeeId: "SR394",
    employeename: "Neha",
    date: "2022-12-08",
    status: "Present",
    punchin: "09:30am",
    punchout: "06:30pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR395",
    employeename: "Arjun",
    date: "2022-12-09",
    status: "Present",
    punchin: "09:15am",
    punchout: "06:15pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR396",
    employeename: "Divya",
    date: "2022-12-10",
    status: "Half Day",
    punchin: "09:00am",
    punchout: "01:00pm",
    duration: "04:00",
    reason: "Personal",
  },
  {
    employeeId: "SR397",
    employeename: "Karan",
    date: "2022-12-11",
    status: "Present",
    punchin: "08:45am",
    punchout: "05:45pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR398",
    employeename: "Simran",
    date: "2022-12-12",
    status: "Casual Leave",
    punchin: "-",
    punchout: "-",
    duration: "00:00",
    reason: "Vacation",
  },
  {
    employeeId: "SR399",
    employeename: "Amit",
    date: "2022-12-13",
    status: "Present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR400",
    employeename: "Sara",
    date: "2022-12-14",
    status: "Late",
    punchin: "10:30am",
    punchout: "07:30pm",
    duration: "09:00",
    reason: "Delayed",
  },
  {
    employeeId: "SR401",
    employeename: "Rahul",
    date: "2022-12-15",
    status: "Present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR402",
    employeename: "Pooja",
    date: "2022-11-16",
    status: "Present",
    punchin: "09:00am",
    punchout: "06:00pm",
    duration: "09:00",
    reason: "None",
  },
  {
    employeeId: "SR403",
    employeename: "Rohan",
    date: "2024-12-17",
    status: "Half Day",
    punchin: "09:00am",
    punchout: "01:00pm",
    duration: "04:00",
    reason: "Personal",
  },
];

const headers = [
  "employeeId",
  "employeename",
  "date",
  "status",
  "punchin",
  "punchout",
  "duration",
  "reason",
];

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
    key: keyof (typeof dummyData)[0],
    event: React.MouseEvent
  ) => {
    if (activeFilterColumn === key) {
      setActiveFilterColumn(null); // Close the filter box if the same column is clicked again
    } else {
      setFilterKey(key); // Set current filter column

      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect(); // Get position of the clicked filter icon

      console.log("target", target, "rect", rect);

      setFilterBoxPosition({
        top: rect.bottom + window.scrollY + 5, // Position below the header
        left: rect.left + window.scrollX, // Align with the clicked column
      });

      setActiveFilterColumn(key); // Set active filter column
    }
  };

  // Filtering function
  const handleFilter = () => {
    if (!filterKey) return;

    const filteredData = dummyData.filter((item) => {
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
  };

  // Clear filter
  const handleClear = () => {
    setFilterKey("");
    setFilterOperator("equal");
    setFilterValue("");
    setData(dummyData);
  };

  return (
    <div className="relative" style={{ overflowX: "auto" }}>
      <table ref={tableRef} className="table">
        <thead style={{ backgroundColor: "#F6F7FB" }}>
          <tr>
            {headers.map((key) => (
              <th key={key} scope="col" className="position-relative">
                {key.toUpperCase()}
                <span className="d-inline-flex gap-2 ms-2">
                  <FontAwesomeIcon
                    icon={faSort}
                    style={{ cursor: "pointer", height: "13px" }}
                    onClick={() =>
                      handleSort(key as keyof (typeof dummyData)[0])
                    }
                  />
                  <FontAwesomeIcon
                    icon={faFilter}
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
          {data.map((item) => (
            <tr key={item.employeeId}>
              <td className="para textheader">{item?.employeeId}</td>
              <td className="para textheader">{item?.employeename}</td>
              <td className="para textheader">{item?.date}</td>
              <td className="para textheader">
                {/* <ChipsForLeave label={item?.status} /> */}
                {item?.status}
              </td>
              <td className="para textheader">{item?.punchin}</td>
              <td className="para textheader">{item?.punchout}</td>
              <td className="para textheader">{item?.duration}</td>
              <td className="para textheader">{item?.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Filter Box - Position dynamically */}
      {activeFilterColumn && (
        <div
          className="card card-body"
          style={{
            width: "18em",
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

          <div className="d-flex gap-2 justify-content-end mt-2">
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
