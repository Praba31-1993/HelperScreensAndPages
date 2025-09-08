import React, {useEffect} from 'react'

function FilteredData() {
    const startDate = "2025-09-01";
    const endDate = "2025-09-12";

     const projectStatusInfo = [
    {
      id: 1,
      empId: "ADM07",
      projStatusCode: "xncb",
      clientName: "Acenture",
      projId: "268",
      periodStart: "09/01/2025",
      periodEnd: "09/15/2025",
      startDate: "2025-09-01",
      endDate: "2025-09-10",
      priorityName: "Low",
      projPriority: "low",
      summaryName: "Green",
      projStatusSummary: "green",
      projDesc: "xcz",
      keyAccomplishLastPeriod: "zc",
      projIssues: "ZC",
      status: "Saved",
      createdBy: "adm07",
      createdDate: "2025-09-02 14:17:13",
    },
    {
      id: 6,
      empId: "adm07",
      projStatusCode: "152de330c32c452",
      clientName: "Acenture",
      projId: "268",
      periodStart: "09/01/2025",
      periodEnd: "09/25/2025",
      startDate: "2025-09-01",
      endDate: "2025-09-15",
      priorityName: "Low",
      projPriority: "low",
      summaryName: "Green",
      projStatusSummary: "green",
      projDesc: "xcz",
      keyAccomplishLastPeriod: "zc",
      projIssues: "ZC",
      rejectedReason: "",
      status: "Approved",
      createdBy: "ADM07",
      createdDate: "2025-09-03 10:43:02",
    },
    {
      id: 7,
      empId: "adm07",
      projStatusCode: "2915f5f05692498",
      clientName: "Acenture",
      projId: "268",
      periodStart: "09/05/2025",
      periodEnd: "09/28/2025",
      startDate: "2025-09-01",
      endDate: "2025-09-25",
      priorityName: "Low",
      projPriority: "low",
      summaryName: "Green",
      projStatusSummary: "green",
      projDesc: "xcz",
      keyAccomplishLastPeriod: "zc",
      projIssues: "ZC",
      rejectedReason: "",
      status: "Approved",
      createdBy: "ADM07",
      createdDate: "2025-09-03 10:43:25",
    },
   
  ];
    useEffect(() => {
  if (!projectStatusInfo) return;

  const result = projectStatusInfo.filter((list) => {
    const itemStart = new Date(list?.startDate);
    const itemEnd = new Date(list?.endDate);
    const filterStart = new Date(startDate);
    const filterEnd = new Date(endDate);

    return itemStart >= filterStart && itemEnd <= filterEnd

  });

  // setFilteredData(result);
  console.log("filterDataResult", result);
}, [projectStatusInfo, startDate, endDate]);


  return (
    <div>FilteredData</div>
  )
}

export default FilteredData




