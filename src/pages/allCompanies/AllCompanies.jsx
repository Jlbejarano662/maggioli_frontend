import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// import styles
import "./AllCompanies.css";
// import icons
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsFillPersonFill,
} from "react-icons/bs";

// import of services
import { getCompanies, deleteCompany } from "../../services/api";

const AllCompanies = () => {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = async () => {
    const response = await getCompanies();
    setCompanies(response.data);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  const deleteCompanyDetail = async (id) => {
    Swal.fire({
      title: "Are you sure you want to eliminate this company?",
      text: "You cannot reverse this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompany(id);
        Swal.fire(
          "Company deleted!",
          `This company's registration has been successfully deleted.`,
          "success"
        );
        getAllCompanies();
      }
    });
  };

  //HTML
  return (
    <div className="all_companies">
      <h1>COMPANIES LIST</h1>
      {/* table with information */}
      <div className="table-responsive">
        <table className="table">
          {/* table header */}
          <thead>
            <tr className="table-head">
              <th>NAME</th>
              <th>PHONE</th>
              <th>NIT</th>
              <th>CITY</th>
              <th>ADDRESS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {/* maps the array of COMPANIES and for each element it generates a row in the table that shows its information */}
            {companies.map((company) => (
              <tr key={company.ID_COMPANY} className="table-body">
                <td>{company.COMPANY_NAME}</td>
                <td>{company.PHONE}</td>
                <td>{company.NIT}</td>
                <td>{company.CITY}</td>
                <td>{company.ADDRESS}</td>
                <td>
                  <div className="actions">
                    <Link
                      to={`/employees/${company.ID_COMPANY}`}
                      className="button employees"
                    >
                      <BsFillPersonFill />
                    </Link>
                    {/* button to edit a company */}
                    <Link
                      to={`/edit/${company.ID_COMPANY}`}
                      className="button edit"
                    >
                      <BsFillPencilFill className="icon" />
                    </Link>
                    {/* button to delete a company */}
                    <Link
                      className="button delete"
                      onClick={() => deleteCompanyDetail(company.ID_COMPANY)}
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
    </div>
  );
};

export default AllCompanies;
