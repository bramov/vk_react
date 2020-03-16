import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import ConversationChatMessage from "./conversationChatMessage";




const ConversationChatOverflow = (props) => {
    //let UserObject = MessagesData[props.id - 1];
    let UserObject = props.data[0];
    let Messages = UserObject.messages
        .map(el => <ConversationChatMessage name={UserObject.generateFirstName(el)} text={el.text} img={UserObject.generateMessagePhoto(el)}/>)

    /*{
                <ConversationChatMessage name={props.data.name} text="переименуй в тинькоВК" img={props.data.img}/>
                <ConversationChatMessage name="Алексей" text="ponyal" img="https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"/>
                <ConversationChatMessage name={props.data.name} text="Да, здорово, все топ прямо как мой суперджет Falcon 4000" img={props.data.img}/>
                <ConversationChatMessage name="Алексей" text="Привет, как тебе мой сайт?" img="https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"/>
                }
                 */
    return (
        <div className={style.message_overflow_block}>
            <div className={style.message_overflow_list}>

                {Messages}

            </div>

        </div>
    )
};

export default ConversationChatOverflow;