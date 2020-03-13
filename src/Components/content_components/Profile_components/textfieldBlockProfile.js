import React from "react";
import {Icon24Camera, Icon24Music, Icon24Video} from "../../../vk_import";

const TextFieldWall = () => {
    return (
        <div className="block_with_post_field">
            <div className="ava_and_message">
                <img src="https://sun9-60.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                <span>Что у вас нового?</span>
            </div>
            <div className="icons_message_field">
                <Icon24Camera/>
                <Icon24Video/>
                <Icon24Music/>
            </div>
        </div>
    )
};

export default TextFieldWall;