import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Display.css'


const Display = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td className="list"
                    style={{
                    }}
                      // style={{ backgroundColor: randomColor() }}
                      // style={{
                      //   // backgroundColor: "orange",
                      //   display: "inline-block",
                      //   width: "35px",
                      //   height: "38px",
                      //   paddingLeft: "12px",
                      //   // lineHeight: "8px",
                      //   borderRadius: "50%",
                      //   color: "white",
                      //   fontWeight: "bold",
                      // backgroundColor: id ? "green" : "yellow",
                      // }}
                    >
                      {id + 1}
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.types}</td>
                    <td>
                      <i
                        class="fas fa-solid fa-trash"
                        // type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);

// import React from "react";
// import "./Display.css";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators } from "../redux/index";
// import { bindActionCreators } from "redux";
// import Select from 'react-select'

// function Display() {
//   const dispatch = useDispatch();
//   const { removeData, increment, decrement } = bindActionCreators(
//     actionCreators,
//     dispatch
//   );
//   const lists = useSelector((state) => state.user.userData);

//   const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]
//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row ">
//           <div className="col-md ">
//             <h1>Leaderboard</h1>
//           </div>
//           <div className="col-md">
//             <Link to="/data" className="btn">
//               AddPlayer
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="container py-4 my-4">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Rank</th>
//               <th scope="col">Participant Name</th>
//               <th scope="col">Location</th>
//               <th scope="col">Date</th>
//               <th scope="col">Units (KM)</th>
//               <th scope="col">Status</th>
//               <th scope="col">Points</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <Select options={options}
//             // styles={{backgroundColor: "red"}}
//             />
//             {lists.map((item, i) => {
//               return (
//                 <tr key={options.i}>
//                   <th scope="row">{i + 1}</th>
//                   <td>{item.name}</td>
//                   <td>{item.location}</td>
//                   <td>{item.data}</td>
//                   <td>{item.unit}</td>
//                   <td>{item.types}</td>
//                   <td>{item.point}</td>
//                   <td>
//                     <button
//                       className="btn btn-dark"
//                       onClick={() => removeData(lists.i)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                   <td
//                     className="btn-warning"
//                     onClick={() =>
//                       dispatch({ type: "INCREMENT", payload: lists })
//                     }
//                   >
//                     +
//                   </td>
//                   {lists.qty ? lists.qty : 1}
//                   <td
//                     className="btn-warning"
//                     onClick={() =>
//                       dispatch({ type: "DECREMENT", payload: lists })
//                     }
//                   >
//                     -
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Display;
