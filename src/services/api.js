import axios from "axios";

const URL = "http://localhost:4000/api";

export const getCompanies = async () => {
  try {
    return await axios.get(`${URL}/companies`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

export const deleteCompany = async (id) => {
  try {
    return await axios.delete(`${URL}/companies/${id}`);
  } catch (error) {
    console.log("Error while calling deleteCompany API", error);
  }
};

export const addCompany = async (company) => {
  try {
    return await axios.post(`${URL}/companies`, company);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

export const getCompany = async (id) => {
  try {
    return await axios.get(`${URL}/companies/${id}`);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

export const updateCompany = async (id, company) => {
  try {
    return await axios.put(`${URL}/companies/${id}`, company);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};



export const getEmployees = async (id) => {
  try {
    return await axios.get(`${URL}/employees/${id}`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${URL}/employees/employee/${id}`);
  } catch (error) {
    console.log("Error while calling getCompanies API", error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${URL}/employees`, { data: { id } });
  } catch (error) {
    console.log("Error while calling deleteCompany API", error);
  }
};

export const updateEmployee = async (employee) => {
  try {
    return await axios.put(`${URL}/employees`, employee);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};

export const addEmployee = async (idCompany, employee) => {
  try {
    return await axios.post(`${URL}/employees/${idCompany}`, employee);
  } catch (error) {
    console.log("Error while calling addCompany API", error);
  }
};