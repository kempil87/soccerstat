import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

export const Menu = ({active,click}) => {
    return (
        <div className={active ? "menu-active" : "burger-menu"}>
            <div className="burger-menu-content">
                <div>
                    <p className="mt-3 ">
                        <Link onClick={click} className="burger-menu-link" to={"/"}>Лиги</Link>
                        <Link onClick={click} className="burger-menu-link mt-2" to={"/club"}>Команды</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
