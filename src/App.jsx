import React from "react";
import { Routes, Route } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/singIn" element={<SingIn />} />
    </Routes>
  );
}

export default App;
