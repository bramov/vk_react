import React from "react";
import style from '../../CSS/Messages_CSS/conversation.module.css';
import ConversationChatHeading from "./conversationChatComponents/conversationChatHeading";
import ConversationChatInput from "./conversationChatComponents/conversationChatInput";
import ConversationChatOverflow from "./conversationChatComponents/conversationChatOverflow";
import {useParams} from 'react-router-dom';


const ConversationChat = (props) => {

    let {id} = useParams();
    let data = props.data.UserData.filter(el => el.id == id);
    console.log(data);

    return (
        <div className={style.messages_wrapper}>

            <ConversationChatHeading data={data} />

            <ConversationChatOverflow data={data} />

            <ConversationChatInput data={data} func={props}/>
        </div>
    )
};

export default ConversationChat;