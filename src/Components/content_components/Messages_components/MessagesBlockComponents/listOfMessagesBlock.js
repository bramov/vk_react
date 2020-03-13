import React from "react";
import style from "../../CSS/Messages_CSS/messages.module.css";
import MessagePreviewBlock from "./messagePreviewBlock";

const ListOfMessagesBlock = () => {
    return (
        <div className={style.message_overflow_block}>

            {/* img внутри .message_my_photo должен быть display: none, если meLast = true*/}

            <MessagePreviewBlock name="Павел Дуров" text="Ну что бы я, блять, без тебя делал, сука" photo="https://sun1-98.userapi.com/c836333/v836333001/31192/y1Cm4JfplhQ.jpg?ava=1" class="message_my_photo_noLast"/>

            <MessagePreviewBlock name="Олег Тиньков" text="переименуй в тинькоВК" photo="https://sun1-24.userapi.com/c830408/v830408310/9f89f/y4RXPChEl8s.jpg?ava=1" class="message_my_photo_noLast"/>

            <MessagePreviewBlock name="Дмитрий Медведев" text="да не было меня на этом митинге" photo="https://sun1-93.userapi.com/c836634/v836634705/19405/RmhcChZNBP8.jpg?ava=1" class="message_my_photo"/>

        </div>
    )
};

export default ListOfMessagesBlock;