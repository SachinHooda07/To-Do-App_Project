import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function UserList() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [data, setData] = useState([]);
  const { id, name, email, phone } = formData;
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && name && email && phone) {
      axios
        .post("http://localhost:7000/UsersDetail", formData)
        .then((resp) => {
          setData([...data, resp.data]);
          setFormData({ id: "", name: "", email: "", phone: "" });
          Navigate("/getapi");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("Added User Data", formData);
    }
  };
  //================================================
  return (
    <>
      <h3>POST API in Your List</h3>
      <form onSubmit={handleSubmit}>
        <div className="userListInput">
          <input
            type="text"
            name="id"
            value={id}
            placeholder="enter user ID"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="enter user name"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="enter user email"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="enter user phone number"
            onChange={handleChange}
          />
        </div>
        <button type="submit" id="userListBtn">
          Add Detail
        </button>
      </form>
    </>
  );
}
export default UserList;
