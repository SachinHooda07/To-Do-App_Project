import { NavLink } from "react-router-dom";

function NavBarLinks(){
    return(
        <>
        <nav>
      <ul className="navBar">
        <li><NavLink className="nav-bar-link" to="/">HOME</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/getapi">ToDo List</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/userlist">AddUser</NavLink></li>
      </ul>
      </nav>
        </>
    )
}
export default NavBarLinks;