import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import {Icon28ChevronBack, Icon28MoreHorizontal} from "../../../../vk_import";
import {NavLink} from 'react-router-dom';


const ConversationChatHeading = (props) => {
    let UserObject = props.data[0];


    return (
        <div className={style.heading_block}>
            <NavLink to='/im/'>
                <div className={style.heading_block_left}>
                    <div className={style.heading_back_icon}>
                        <Icon28ChevronBack/>
                    </div>
                    <span>Назад</span>
                </div>
            </NavLink>
            <div className={style.heading_block_center}>
                <span className={style.heading_person_name}>{UserObject.name}</span>
                <span className={style.heading_person_activity}>был в сети никогда</span>
            </div>
            <div className={style.heading_block_right}>
                <Icon28MoreHorizontal/>
                <NavLink to={'/id/' + UserObject.id}>
                    <img alt={UserObject.name} className={style.heading_block_avatar} src={UserObject.photo}></img>
                </NavLink>
            </div>
        </div>
    )
};

export default ConversationChatHeading;

