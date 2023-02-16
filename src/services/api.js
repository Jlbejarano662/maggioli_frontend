import axios from "axios";

const URL = "http://localhost:4000/api";

// ------------------ COMPANIES -----------------------

// get all companies 
export const getCompanies = async () => {
  try {
    return await axios.get(`${URL}/companies`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

// delete one company
export const deleteCompany = async (id) => {
  try {
    return await axios.delete(`${URL}/companies/${id}`);
  } catch (error) {
    console.log("Error while calling deleteCompany API", error);
  }
};

// add one company
export const addCompany = async (company) => {
  try {
    return await axios.post(`${URL}/companies`, company);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

// get one company
export const getCompany = async (id) => {
  try {
    return await axios.get(`${URL}/companies/${id}`);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

// update one company
export const updateCompany = async (id, company) => {
  try {
    return await axios.put(`${URL}/companies/${id}`, company);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

// ------------------ EMPLOYEES -----------------------

// get all employees
export const getEmployees = async (id) => {
  try {
    return await axios.get(`${URL}/employees/${id}`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

// get one employee
export const getEmployee = async (id) => {
  try {
    return await axios.get(`${URL}/employees/employee/${id}`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

// delete one employee
export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${URL}/employees`, { data: { id } });
  } catch (error) {
    console.log("Error while calling deleteCompany API", error);
  }
};

// update one employe
export const updateEmployee = async (employee) => {
  try {
    return await axios.put(`${URL}/employees`, employee);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

// add one employee
export const addEmployee = async (idCompany, employee) => {
  try {
    return await axios.post(`${URL}/employees/${idCompany}`, employee);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};