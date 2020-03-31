import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import {Icon28AttachOutline, Icon28Send} from "../../../../vk_import";


const ConversationChatInput = (props) => {
    let id = props.data[0].id - 1;

    let newMessage = React.createRef();
    let postMessage = () => {
        let text = newMessage.current.value;
        if (text !== '') {
            props.func.data.sendMessage(text, id);
            newMessage.current.value = '';
        }

    };

    return (
        <div className={style.message_buttons_wrapper}>
            <div className={style.message_buttons_left}>
                <Icon28AttachOutline/>
            </div>
            <div className={style.message_buttons_center}>
                <input ref={newMessage} placeholder="Напишите сообщение..."></input>

            </div>
            <div className={style.message_buttons_right}>
                <button onClick={postMessage}><Icon28Send/></button>
            </div>
        </div>
    )
};

export default ConversationChatInput;