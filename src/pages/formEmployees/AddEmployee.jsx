import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

//import styles
import "./FormEmployee.css";

//import function from services api
import { addEmployee } from "../../services/api";

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
  dni: "",
  firstName: "",
  lastName: "",
  phone: "",
  position: "",
  salary: "",
};

const AddEmployee = () => {
  const [employee, setEmployee] = useState(defaultValue);

  const navigate = useNavigate();

  //hook that accesses the parameters of the current route in the application (in this case, id)
  const { idCompany } = useParams();

  const onValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  //function that adds employee details to a database
  const addEmployeeDetails = async (e) => {
    e.preventDefault();
    if (
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
        title: "Employee is added successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(idCompany);
      console.log(employee);
      await addEmployee(idCompany, employee);
      navigate(`/employees/${idCompany}`);
    }
  };
  return (
    <section className="container_form">
      <div className="title">
        <h1>EMPLOYEE REGISTER</h1>
      </div>

      <form className="add_form" onSubmit={addEmployeeDetails}>
        <label>First Name:</label>
        {/* executes event handling function whenever the value of the input field changes */}
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="firstName"
          required
        />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="lastName"
          required
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="phone"
          required
        />
        <label>DNI:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="dni"
          required
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="position"
          required
        />
        <label>Salary: </label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="salary"
          required
        />

        <div className="btns">
          <Link to={`/employees/${idCompany}`}>
            <button className="btn cancel">CANCEL</button>
          </Link>
          <button type="submit" className="btn">
            ADD EMPLOYEE
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddEmployee;
