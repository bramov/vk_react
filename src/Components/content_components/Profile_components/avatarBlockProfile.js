import React from "react";
import style from '../../CSS/Profile_CSS/avatarBlockProfile.module.css';
import {Icon24MoreHorizontal} from "../../../vk_import";


const AvatarBlockProfile = () => {
    return (
        <div className={style.photo_column}>
            <div className={style.photo_avatar}>
                <img alt="avatar" src="https://sun9-47.userapi.com/impf/c858132/v858132635/b8e9a/GxzjcX3aZ28.jpg?size=400x0&quality=90&sign=d477e90b9dab2a195827003d99cedfae"></img>
                <div className={style.photo_avatar_settings}>
                    <div className={style.photo_avatar_setting_left}>Редактировать</div>
                    <div className={style.photo_avatar_setting_right}><Icon24MoreHorizontal width={20} height={20}/></div>
                </div>
            </div>
        </div>
    )
};

export default AvatarBlockProfile;