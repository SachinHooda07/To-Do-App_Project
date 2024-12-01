import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./ToDoPages/Router.css";
import Home from "./ToDoPages/Home";
import AddUserDetails from "./ToDoPages/AddUserDetails";
import NavBarLinks from "./ToDoPages/NavBarLinks";
import ToDo_List from "./ToDoPages/ToDo_List";
import EditUserList from "./ToDoPages/EditUserList";

function ToDoClass() {
  return (
    <>
      <h3>ToDo List App</h3>
      <BrowserRouter>
        <NavBarLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getapi" element={<ToDo_List />}>
            <Route exact path="edit/:id" element={<EditUserList />} />
          </Route>
          <Route exact path="/userlist" element={<AddUserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default ToDoClass;
