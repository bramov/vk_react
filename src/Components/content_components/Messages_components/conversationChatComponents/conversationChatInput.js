import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import {Icon28AttachOutline, Icon28Send} from "../../../../vk_import";

const ConversationChatInput = () => {
    return (
        <div className={style.message_buttons_wrapper}>
            <div className={style.message_buttons_left}>
                <Icon28AttachOutline/>
            </div>
            <div className={style.message_buttons_center}>
                <input placeholder="Напишите сообщение..."></input>

            </div>
            <div className={style.message_buttons_right}>
                <Icon28Send/>
            </div>
        </div>
    )
};

export default ConversationChatInput;