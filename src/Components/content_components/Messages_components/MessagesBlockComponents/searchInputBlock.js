import React from "react";
import style from "../../CSS/Messages_CSS/messages.module.css";
import {Icon28AddOutline, Icon28SearchOutline} from "../../../vk_import";

const SearchInputBlock = () => {
    return (
        <div className={style.search_block}>
            <div className={style.search_icon_text_input}>
                <Icon28SearchOutline/>
                <input type="text" placeholder="Поиск"/>
            </div>
            <div className={style.search_icon_plus}>
                <Icon28AddOutline/>
            </div>
        </div>
    )
};

export default SearchInputBlock;