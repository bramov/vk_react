import React from "react";
import style from '../../CSS/Profile_CSS/groupsBlockProfile.module.css';

const GroupsBlockProfile = () => {
    return (
        <div className={style.block_with_groups}>
            <div className={style.description_block}>
                <div className={style.description_block_inside}>
                    <span>Подписки</span>
                    <span className={style.amount}>2</span>
                </div>
            </div>
            <div className={style.group_counter}>
                <div className={style.group_and_title_and_description_wrapper}>
                    <div className={style.group_photo}>
                        <img alt="Лентач" src="https://sun1-23.userapi.com/c205520/v205520309/6ba49/FZnT81BEgh0.jpg?ava=1"></img>
                    </div>
                    <div className={style.title_and_description}>
                        <span className={style.group_name_text}>Лентач</span>
                        <span className={style.group_description_text}>Пропаганда здравого смысла</span>
                    </div>
                </div>
            </div>
            <div className={style.group_counter}>
                <div className={style.group_and_title_and_description_wrapper}>
                    <div className={style.group_photo}>
                        <img alt="Пиксельная реальность" src="https://sun1-16.userapi.com/c854520/v854520888/130e9d/DMtKrqsWmWo.jpg?ava=1"></img>
                    </div>
                    <div className={style.title_and_description}>
                        <span className={style.group_name_text}>Пиксельная реальность</span>
                        <span className={style.group_description_text}>Точно реальность?</span>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default GroupsBlockProfile;