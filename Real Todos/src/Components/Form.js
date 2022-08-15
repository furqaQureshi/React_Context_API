import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./Form.css";
const Form = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [types, setTypes] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
      types,
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <select value={types} onChange={(e) => setTypes(e.target.value)}>
              <option
                value="dog"
                style={{ backgroundColor: "ButtonText", color: "#fff" }}
              >
                Dog
              </option>
              <option
                value="cat"
                style={{ backgroundColor: "GrayText", color: "#fff" }}
              >
                Cat 
              </option>
              <option
                value="parrot"
                style={{ backgroundColor: "salmon", color: "#fff" }}
              >
                Parrot
              </option>
            </select>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
          {/* {Object.keys(contacts).length === 0 && isSubmit ? (
            <div>Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(contacts, undefined, 2)}</pre>
          )} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// import React, { useState } from "react";
// import "./Form.css";
// import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../redux/index";
// // import { Link } from "react-router-dom";z
// function Form() {
//   const List = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const { addData } = bindActionCreators(actionCreators, dispatch);

//   const initial = { name: "", location: "", data: "", units: "", types: "", point: "" };
//   const [formValues, setFormValues] = useState(initial);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // addData(List);
//     setFormErrors(formValues);
//   };
//   const validate = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = "Username is required!";
//     }
//     if (!values.location) {
//       errors.location = "location is required!";
//     } else if(values.location) {
//       errors.location = "This is not a valid location format!";
//     }

//     // if (!values.password) {
//     //   errors.password = "Password is required";
//     // } else if (values.password.length < 4) {
//     //   errors.password = "Password must be more than 4 characters";
//     // } else if (values.password.length > 10) {
//     //   errors.password = "Password cannot exceed more than 10 characters";
//     // }
//     return errors;
//   };
//   return (
//     <div>
//       <h1 className="text-center">Enter Your Name</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-md">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={formValues.name}
//                 onChange={handleChange}
//                 placeholder="name"
//               />
//             </div>
//             <div className="col-md">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="location"
//                 value={formValues.location}
//                 onChange={handleChange}
//                 placeholder="location"
//               />
//             </div>
//           </div>
//           <div className="row mt-5">
//             <div className="col-md">
//               <input
//                 type="date"
//                 className="form-control"
//                 name="data"
//                 value={formValues.data}
//                 onChange={handleChange}
//                 placeholder="data"
//               />
//             </div>
//             <div className="col-md">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="units"
//                 value={formValues.units}
//                 onChange={handleChange}
//                 placeholder="units"
//               />
//             </div>
//           </div>
//           <div className="row mt-5">
//             <div className="col-md">
//               <>
                {/* <input type="text" /> */}
                // <select name="types" value={formValues.types} onChange={handleChange}>
                //   <option value="dog" style={{backgroundColor: "ButtonText", color: "#fff"}}>Dog</option>
                //   <option value="cat" style={{backgroundColor: "GrayText", color: "#fff"}}>Cat</option>
                //   <option value="parrot"  style={{backgroundColor: "salmon", color: "#fff"}}>Parrot</option>
                // </select>
//             </div>
//             <div className="col-md">
//               <input
//                 type="number"
//                 className="form-control"
//                 name="point"
//                 value={formValues.point}
//                 onChange={handleChange}
//                 placeholder="point"
//               />
//             </div>
//           </div>
//           {/* <Link to="/list"> */}
//           <button
//             className="btn btn-danger mt-4"
//             onClick={() => addData(formValues)}
//           >
//             Submit
//           </button>
//        {/* </Link> */}
//         </div>
//       </form>
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}
//     </div>
//   );
// }

// export default Form;
