import "./Headers.css"
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div className="header-left">
                <img className="header-logo"
                     src="https://www.soccerstat.net/wp-content/uploads/2019/07/Soccer-Stat-Footer-Logo.png"/>
            </div>
            <div className="header-search">
                <input className="search-input" type="text" placeholder="Найти"/>
            </div>

            <div className="header-right" >
                <Link to="/"  className="header-content" >Home</Link>
                <Link to="/"  className="header-content">Contacts</Link>
                <Link to="/about"  className="header-content"  >About</Link>
                {/*<h4 className="header-content">Login</h4>*/}
                <svg className="header-icons" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
            </div>
        </div>
    )

}
export default Header

