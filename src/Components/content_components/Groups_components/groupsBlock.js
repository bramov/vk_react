import React from "react";
import style from '../../CSS/Groups_CSS/groupsBlock.module.css';
import {Icon28MoreHorizontal} from '../../../vk_import';
const GroupsBlock = () => {
    return (
        <div className={style.groups_block_wrapper}>

            <div className={style.groups_block_heading}>
                <div className={style.groups_block_heading_leftside}>
                    <span className={style.heading_title}>Все сообщества</span>
                    <span className={style.heading_amount}>4</span>
                </div>
            </div>
            <div className={style.groups_main_part}>

                <div className={style.group_item_wrapper}>
                    <div className={style.group_item_logo_and_info}>
                        <img className={style.group_item_logo} src="https://sun1-98.userapi.com/c205520/v205520309/6ba48/hd6ghzm5Lnw.jpg?ava=1"></img>
                        <div className={style.group_item_info}>
                            <span className={style.group_item_name}>Лентач</span>
                            <div className={style.group_item_description}>Интернет-СМИ</div>
                            <div className={style.group_item_description}>4 подписчика</div>
                        </div>
                    </div>
                    <Icon28MoreHorizontal />
                </div>
                <div className={style.group_item_wrapper}>
                    <div className={style.group_item_logo_and_info}>
                        <img className={style.group_item_logo} src="https://sun1-21.userapi.com/c854520/v854520888/130e9c/UWAz5m0hP78.jpg?ava=1"></img>
                        <div className={style.group_item_info}>
                            <span className={style.group_item_name}>Пиксельная реальность</span>
                            <div className={style.group_item_description}>Творчество</div>
                            <div className={style.group_item_description}>2 подписчика</div>
                        </div>
                    </div>
                    <Icon28MoreHorizontal />
                </div>


            </div>

        </div>
    )
};

export default GroupsBlock;