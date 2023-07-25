import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
