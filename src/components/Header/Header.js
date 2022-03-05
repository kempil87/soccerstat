import "./Headers.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {Menu} from "../Menu/Menu";


const Header = ({clickBurger, active}) => {

    return (
        <>
            <div className="Header">
                <div className="header-left">
                    <Link to="/">
                        <img className="header-logo"
                             src="data:image/png;base64,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"/>
                    </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="header-right d-none d-sm-flex">
                        <Link to="/" className="header-content">Лиги</Link>
                        <Link to="/club" className="header-content">Команды</Link>
                    </div>
                    <div className={active ? "menu-burger-btn-active d-flex d-sm-none" : "menu-burger-btn d-flex d-sm-none"} onClick={() => clickBurger()}>
                        <span/>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Header

