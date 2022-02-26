import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'



export const Menu = ({header, items,active,setActive}) => {
    return (
        <div className={active ? "menu Active" : "burger-menu"} >
            <div className="burger-menu-content">
                <div className="burger-menu-header">
                    {header}
                    <span className="material-icons-outlined btn-close-burger">
                        close
                    </span>
                </div>
                <div >
                    {items.map(item =>
                        <p className="mt-3">
                            <Link className="burger-menu-link" to={"/"} >{item.value}</Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
