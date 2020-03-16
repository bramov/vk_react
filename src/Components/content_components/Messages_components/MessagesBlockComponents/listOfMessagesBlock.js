import React from "react";
import style from "../../../CSS/Messages_CSS/messages.module.css";
import MessagePreviewBlock from "./messagePreviewBlock";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <NavLink to={"/im/" + props.id}>
            <MessagePreviewBlock name={props.name} text={props.text} photo={props.photo} class={props.class}/>
        </NavLink>
    )
};

const ListOfMessagesBlock = (props) => {
    let data = props.data.data
    const DialogItems = data
        .map(item => <DialogItem id={item.id} name={item.name} text={item.generatePreview()} photo={item.photo} class={item.generateClass()}/>);

    return (
        <div className={style.message_overflow_block}>
            {DialogItems}
        </div>
    )
};

export default ListOfMessagesBlock;