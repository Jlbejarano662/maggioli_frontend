import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

//import styles
import "./FormEmployee.css";

//import function from services api
import { getEmployee, updateEmployee } from "../../services/api";

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
  id: "",
  dni: "",
  firstName: "",
  lastName: "",
  phone: "",
  position: "",
  salary: "",
  idCompany: "",
};

const EditEmployee = () => {
  const [employee, setEmployee] = useState(defaultValue);

  const navigate = useNavigate();

  //hook that accesses the parameters of the current route in the application (in this case, id)
  const { id } = useParams();

  const onValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  //Get employe data
  const loadEmployeeDetails = async () => {
    const response = await getEmployee(id);
    setEmployee({
      ...employee,
      id: await response.data[0].ID_EMPLOYEE,
      idCompany: await response.data[0].FK_ID_COMPANY,
      dni: await response.data[0].DNI,
      firstName: await response.data[0].FIRST_NAME,
      lastName: await response.data[0].LAST_NAME,
      phone: await response.data[0].PHONE,
      position: await response.data[0].POSITION,
      salary: await response.data[0].SALARY,
    });
  };

  //component rendering and function execution
  useEffect(() => {
    loadEmployeeDetails();
  },[]);

  //function that adds employee details to a database
  const addEmployeeDetails = async (e) => {
    e.preventDefault();
    if (
      employee.id === "" ||
      employee.dni === "" ||
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.phone === "" ||
      employee.position === "" ||
      employee.salary === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Bad Request. Please fill all field.",
        confirmButtonColor: "#3085d6",
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The data have been updated.",
        showConfirmButton: false,
        timer: 1500,
      });
      await updateEmployee(employee);
      navigate(`/employees/${employee.idCompany}`);
    }
  };
  return (
    <section className="container_form">
      <div className="title">
        <h1>EMPLOYEE UPDATE</h1>
      </div>

      <form className="add_form" onSubmit={addEmployeeDetails}>
        <label>First Name:</label>
        {/* executes event handling function whenever the value of the input field changes */}
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="firstName"
          required
          value={employee.firstName}
        />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="lastName"
          required
          value={employee.lastName}
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="phone"
          required
          value={employee.phone}
        />
        <label>DNI:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="dni"
          required
          value={employee.dni}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="position"
          required
          value={employee.position}
        />
        <label>Salary: </label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={employee.salary}
          required
        />

        <div className="btns">
          <Link to={`/employees/${employee.idCompany}`}>
            <button className="btn cancel">CANCEL</button>
          </Link>
          <button type="submit" className="btn">
            UPDATE EMPLOYEE
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditEmployee;
