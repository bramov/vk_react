import React from "react";
import style from "../../../CSS/Messages_CSS/messages.module.css";
import {NavLink} from 'react-router-dom';

const MessagePreviewBlock = (props) => {
    /*if (props.meLast){
        style.displayIfLast.display = 'none';
    }*/
    return (
            <div className={style.message_preview}>
                <div className={style.message_preview_leftside}>
                    <div className={style.message_preview_photo}>
                        <img alt={props.name} src={props.photo}/>
                    </div>
                    <div className={style.message_author_and_text}>
                        <span className={style.message_author}>{props.name}</span>
                        <div className={style[props.class]}>
                            <img src="https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"/>
                            <span className={style.message_text}>{props.text}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
};



export default MessagePreviewBlock;