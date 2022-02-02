import React from "react";
import "./Fotter.css"


export const Fotter = () => {
    return (
        <div className={"footer"}>
            <div className="footer-left">
                © 2022 Глеб Макаров
                <a className="git-tittle" href="https://github.com/kempil87">
                    GIT Kempil87
                </a>
            </div>
            <div className="footer-right">
                <span>Social</span>
                <a href="https://www.instagram.com/makarof87/?hl=ru">
                    <img className={"footer-social"}
                         src="https://lumpics.ru/wp-content/uploads/2017/01/Kak-zaregistrirovatsya-v-Instagram.png"/>
                </a>
                <a href="https://vk.com/glebofficial87">
                    <img className={"footer-social"}
                         src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg"/>
                </a>
            </div>
        </div>
    )
}
