import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import Swal from "sweetalert2";

// import styles
import "./AllEmployees.css";
// import icons
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

// import of services
import { deleteEmployee, getEmployees } from "../../services/api";

const AllEmployes = () => {
  const [company, setCompany] = useState([]);
  const [employees, setEmployees] = useState([]);

  const idCompany = useParams();

  const getAllEmployees = async () => {
    const response = await getEmployees(idCompany.idCompany);
    setCompany(response.data.company[0]);
    setEmployees(response.data.employees);
  };

  useEffect(() => {
    getAllEmployees();
  },[]);

  const deleteEmployeeDetail = async (id) => {
    Swal.fire({
      title: "Are you sure you want to eliminate this employee?",
      text: "You cannot reverse this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(id);
        Swal.fire(
          "Employee deleted!",
          `This employee's registration has been successfully deleted.`,
          "success"
        );
        getAllEmployees();
      }
    });
  };

  //HTML
  return (
    <div className="all_employees">
      <h1>{company.COMPANY_NAME} EMPLOYEES</h1>
      {/* table with information */}
      <div className="table-responsive">
        <table className="table">
          {/* table header */}
          <thead>
            <tr className="table-head">
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DNI</th>
              <th>PHONE</th>
              <th>POSITION</th>
              <th>SALARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {/* maps the array of COMPANIES and for each element it generates a row in the table that shows its information */}
            {employees.map((employee) => (
              <tr key={employee.ID_EMPLOYEE} className="table-body">
                <td>{employee.FIRST_NAME}</td>
                <td>{employee.LAST_NAME}</td>
                <td>{employee.DNI}</td>
                <td>{employee.PHONE}</td>
                <td>{employee.POSITION}</td>
                <td>{employee.SALARY}</td>
                <td>
                  <div className="actions">
                    {/* button to edit a company */}
                    <Link
                      to={`/employees/edit/${employee.ID_EMPLOYEE}`}
                      className="button edit"
                    >
                      <BsFillPencilFill className="icon" />
                    </Link>
                    {/* button to delete a company */}
                    <Link
                      className="button delete"
                      onClick={() => deleteEmployeeDetail(employee.ID_EMPLOYEE)}
                    >
                      <BsFillTrashFill className="icon" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to={`/employees/add/${idCompany.idCompany}`}>
          <button
            className="btn"
          >
            ADD EMPLOYEE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllEmployes;
