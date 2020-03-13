import React from "react";
import style from "../../../CSS/Messages_CSS/conversation.module.css";
import {Icon28ChevronBack, Icon28MoreHorizontal} from "../../../../vk_import";

const ConversationHeading = () => {
    return (
        <div className={style.heading_block}>
            <div className={style.heading_block_left}>
                <div className={style.heading_back_icon}>
                    <Icon28ChevronBack/>
                </div>
                <span>Назад</span>
            </div>
            <div className={style.heading_block_center}>
                <span className={style.heading_person_name}>Олег Тиньков</span>
                <span className={style.heading_person_activity}>был в сети никогда</span>
            </div>
            <div className={style.heading_block_right}>
                <Icon28MoreHorizontal/>
                <img className={style.heading_block_avatar} src="https://sun1-24.userapi.com/c830408/v830408310/9f89f/y4RXPChEl8s.jpg?ava=1"></img>
            </div>
        </div>
    )
};