import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

//import styles
import "./FormCompany.css";

//import function from services api
import { getCompany, updateCompany } from "../../services/api";

//initial values for each of the properties that correspond to the inputs
const defaultValue = {
  companyName: "",
  phone: "",
  nit: "",
  city: "",
  address: "",
};

const EditCompany = () => {
  const [company, setCompany] = useState(defaultValue);

  const navigate = useNavigate();

  //hook that accesses the parameters of the current route in the application (in this case, id)
  const { id } = useParams();

  const onValueChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  //Get company data
  const loadCompanyDetails = async () => {
    const response = await getCompany(id);
    setCompany({
      ...company,
      address: await response.data[0].ADDRESS,
      nit: await response.data[0].NIT,
      companyName: await response.data[0].COMPANY_NAME,
      phone: await response.data[0].PHONE,
      city: await response.data[0].CITY,
    });
  };

  //component rendering and function execution
  useEffect(() => {
    loadCompanyDetails();
  }, []);

  //function that adds company details to a database
  const addCompanyDetails = async (e) => {
    e.preventDefault();
    if (
      company.address === "" ||
      company.city === "" ||
      company.nit === "" ||
      company.companyName === "" ||
      company.phone === ""
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
      console.log(company);
      await updateCompany(id, company);
      navigate("/");
    }
  };
  return (
    <section className="container_form">
      <div className="title">
        <h1>COMPANY UPDATE</h1>
      </div>

      <form className="add_form" onSubmit={addCompanyDetails}>
        <label>Company Name:</label>
        {/* executes event handling function whenever the value of the input field changes */}
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="companyName"
          required
          value={company.companyName}
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => onValueChange(e)}
          name="phone"
          required
          value={company.phone}
        />
        <label>NIT:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="nit"
          required
          value={company.nit}
        />
        <label>City:</label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="city"
          required
          value={company.city}
        />
        <label>Address: </label>
        <input
          type="text"
          onChange={(e) => onValueChange(e)}
          name="address"
          value={company.address}
          required
        />

        <div className="btns">
          <Link to={`/`}>
            <button className="btn cancel">CANCEL</button>
          </Link>
          <button type="submit" className="btn">
            UPDATE COMPANY
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditCompany;
