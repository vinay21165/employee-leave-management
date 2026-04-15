import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveForm from "./pages/LeaveForm";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/leave" element={<LeaveForm />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;