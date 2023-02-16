import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

//import styles
import "./FormCompany.css";

//import function from services api
import { addCompany } from "../../services/api";

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
  companyName: "",
  phone: "",
  nit: "",
  city: "",
  address: "",
};

const AddCompany = () => {
  //destructuring
  const [company, setCompany] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  //function that adds company details to a database
  const addCompanyDetails = async (e) => {
    e.preventDefault();
    if (
      company.companyName === "" ||
      company.phone === "" ||
      company.nit === "" ||
      company.city === "" ||
      company.address === ""
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
        title: "Company is added successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      await addCompany(company);
      navigate("/");
    }
  };

  return (
    <section className="container_form">
      <div className="title">
        <h1>COMPANY REGISTER</h1>
      </div>

      <form className="add_form" onSubmit={addCompanyDetails}>
        <label>Company Name:</label>
        {/* executes event handling function whenever the value of the input field changes */}
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="companyName"
          required
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="phone"
          required
        />
        <label>NIT:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="nit"
          required
        />
        <label>City:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="city"
          required
        />
        <label>Address: </label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="address"
          required
        />

        <div className="btns">
          <Link to={`/`}>
            <button className="btn cancel">CANCEL</button>
          </Link>
          <button type="submit" className="btn">
            ADD COMPANY
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddCompany;
