
import CalendarDesign from "./components/calendarDesign";
import CheckingUseEffect from "./components/checkingUseEffect";
import DateConverter from "./components/dateFormatter";
import FilteredData from "./components/filteredData";
import Navbarcomponents from "./components/navbarcomponents";
import SelectDocs from "./components/selectdocs";
import WeeklyCalendar from "./components/weeklyCalendar";
import "./App.css"
import QrComponents from "./components/qrComponents";
function App() {


  return (
    <div >
      <main>
        {/* <SelectDocs/> */}
        {/* <CheckingUseEffect/> */}
{/* <FilteredData/> */}
        {/* <CalendarDesign/> */}
        {/* <Navbarcomponents/> */}
        {/* <WeeklyCalendar/> */}
        {/* <DateConverter dateStr="09/01/2025" targetFormat="yyyy-mm-dd" /> */}
      {/* <DateConverter dateStr="2025/01/09" targetFormat="dd-mm-yyyy" /> */}
      {/* <DateConverter dateStr="10-09-2025" targetFormat="yyyy-mm-dd" /> */}
      <QrComponents/>
      </main>
    </div>
  );
}

export default App;
