import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
