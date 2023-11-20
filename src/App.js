import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AttendanceLogin from "./Pages/AttendanceLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AttendanceLogin" element={<AttendanceLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
