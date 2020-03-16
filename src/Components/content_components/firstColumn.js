import React from "react";
import style from '../CSS/columns.module.css';
import AvatarBlockProfile from "./Profile_components/avatarBlockProfile";
import FriendsBlockProfile from "./Profile_components/friendsBlockProfile";
import MusicBlockProfile from "./Profile_components/musicBlockProfile";
import GroupsBlockProfile from "./Profile_components/groupsBlockProfile";

const FirstColumn = () => {
    return (
        <div className={style.first_column}>
            <AvatarBlockProfile/>
            <FriendsBlockProfile/>
            <MusicBlockProfile/>
            <GroupsBlockProfile/>
        </div>
    )
};

export default FirstColumn;