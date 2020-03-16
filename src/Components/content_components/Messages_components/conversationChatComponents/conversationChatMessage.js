import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import {NavLink} from "react-router-dom";

const ConversationChatMessage = (props) => {
    return (
        <div className={style.message_overflow_item}>
            <div className={style.message_item_wrapper}>
                <NavLink to='/id/:id'>
                    <img alt={props.name} className={style.message_item_img} src={props.img}></img>
                </NavLink>
                <div className={style.message_item_name_and_text}>
                    <span className={style.message_item_name}>{props.name}</span>
                    <div className={style.message_item_text}>{props.text}</div>
                </div>
            </div>
        </div>
    )
};

export default ConversationChatMessage;