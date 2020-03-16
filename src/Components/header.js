import React from "react";
import style from './CSS/header.module.css';
import {Icon16Dropdown} from '../vk_import';

const Header = () => {
    return (
        <header>
            <div className={style.header_content}>
                <div className={style.logo_wrapper}>
                    <div className={style.logo_img}></div>
                </div>
                <div className={style.header_name_photo}>
                    <span>Алексей</span>
                    <img alt="Настройки" src="https://sun9-60.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                    <div className={style.dropdown_icon}> <Icon16Dropdown/> </div>
                </div>
            </div>
        </header>
    )
};

export default Header;