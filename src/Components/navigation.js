import React from "react";
import Footer from "./footer";
import {NavLink} from 'react-router-dom';
import style from './CSS/navigation.module.css';
import {Icon24Home, Icon24Chats, Icon24Newsfeed, Icon24User, Icon24Users, Icon24Camera, Icon24Music} from "../vk_import";

const Navigation = () => {
    return (
        <nav className={style.nav_content}>

            <NavLink to='/profile'>
                <div className={style.nav_content_item}>
                    <Icon24Home width={20} height={20}/>
                    <span>Моя страница</span>
                </div>
            </NavLink>

            <NavLink to='/news'>
                <div className={style.nav_content_item}>
                    <Icon24Newsfeed width={20} height={20}/>
                    <span>Новости</span>
                </div>
            </NavLink>

            <NavLink to='/im'>
                <div className={style.nav_content_item}>
                    <Icon24Chats width={20} height={20}/>
                        <span>Сообщения</span>
                </div>
            </NavLink>

            <NavLink to='/friends'>
                <div className={style.nav_content_item}>
                    <Icon24User width={20} height={20}/>
                    <span>Друзья</span>
                </div>
            </NavLink>

            <NavLink to='/groups'>
                <div className={style.nav_content_item}>
                    <Icon24Users width={20} height={20}/>
                    <span>Сообщества</span>
                </div>
            </NavLink>

            <NavLink to='/photo'>
                <div className={style.nav_content_item}>
                    <Icon24Camera width={20} height={20}/>
                    <span>Фотографии</span>
                </div>
            </NavLink>

            <NavLink to='/music'>
                <div className={style.nav_content_item}>
                    <Icon24Music width={20} height={20}/>
                    <span>Музыка</span>
                </div>
            </NavLink>


            <Footer/>
        </nav>
    )
};

export default Navigation;