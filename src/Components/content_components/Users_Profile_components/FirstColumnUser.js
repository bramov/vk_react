import style from "../../CSS/columns.module.css";

import React from "react";
import AvatarBlockProfile from "../Profile_components/avatarBlockProfile";
import FriendsBlockProfile from "../Profile_components/friendsBlockProfile";
import MusicBlockProfile from "../Profile_components/musicBlockProfile";
import GroupsBlockProfile from "../Profile_components/groupsBlockProfile";

const FirstColumnUser = () => {
    return (
        <div className={style.first_column}>
            <AvatarBlockProfile/>
            <FriendsBlockProfile/>
            <MusicBlockProfile/>
            <GroupsBlockProfile/>
        </div>
    )
};

export default FirstColumnUser;