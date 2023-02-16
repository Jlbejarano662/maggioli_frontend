import React from "react";
import { Routes, Route} from "react-router-dom";

// import components
import AllCompanies from "../pages/allCompanies/AllCompanies";
import AddCompany from "../pages/formCompanies/AddCompany";
import EditCompany from "../pages/formCompanies/EditCompany";
import AllEmployees from "../pages/allEmployees/AllEmployees";
import EditEmployee from "../pages/formEmployees/EditEmployee";
import AddEmployee from "../pages/formEmployees/AddEmployee";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllCompanies />} />
        <Route path="/add" element={<AddCompany />} />
        <Route path="/edit/:id" element={<EditCompany />} />
        <Route path="/employees/:idCompany" element={<AllEmployees />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/add/:idCompany" element={<AddEmployee />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
