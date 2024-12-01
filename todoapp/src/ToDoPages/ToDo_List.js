import axios from "axios";
import { useEffect, useState } from "react";
import "./Router.css";
import { NavLink, Outlet } from "react-router-dom";

function ToDo_List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  //------------------------------------------------------

  function getAPI() {
    try {
      axios.get("http://localhost:7000/UsersDetail").then((getData) => {
        // console.log(getData.data);
        setData(getData.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  //===============================================

  const handleDelete = async (id) => {
    // console.log(getId);
    const deletedData = await axios.delete(
      `http://localhost:7000/UsersDetail/${id}`
    );
    console.log("Deleted Data :", deletedData.data);
    getAPI();
  };

  return (
    <>
      <div id="demo1">
        <table border="2px">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>

            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <div className="main">
                  <div className="d2">
                    <NavLink className="nav-bar-link1" to={`edit/${item.id}`}>
                      <button className="tdButton2">Edit</button>
                    </NavLink>
                    </div>

                    <div className="d2">
                      <button
                        className="tdButton2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
      </div>
    </>
  );
}
export default ToDo_List;
