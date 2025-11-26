
import "./App.css"
import QrComponents from "./components/qrComponents";
import { Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom";
function App() {


  return (
    <div >
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/qr" replace />} />
          <Route path="/qr" element={<QrComponents />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
