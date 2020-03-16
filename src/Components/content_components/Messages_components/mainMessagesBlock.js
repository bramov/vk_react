import React from "react";
//import style from "../../CSS/profile.module.css";
import style from "../../CSS/Messages_CSS/messages.module.css";
import SearchInputBlock from "./MessagesBlockComponents/searchInputBlock";
import ListOfMessagesBlock from "./MessagesBlockComponents/listOfMessagesBlock";

const mainMessagesBlock = (props) => {
    return (
        <div className={style.messages_wrapper}>
            <SearchInputBlock/>
            <ListOfMessagesBlock data={props}/>
        </div>
    )
};

export default mainMessagesBlock;