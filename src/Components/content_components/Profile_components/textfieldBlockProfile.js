import React from "react";
import style from '../../CSS/Profile_CSS/textfieldBlockProfile.module.css';
import {Icon24Camera, Icon24Music, Icon24Video, Icon24SmileOutline} from "../../../vk_import";

const TextfieldBlockProfile = (props) => {

    let newPostElement = React.createRef();


    let addNewPost = () => {
        let text = newPostElement.current.value;
        if (text !== '') {
            props.addPost(text);
            newPostElement.current.value = '';
        }

    };

    let showButton = () => {

    };

    return (
        <div className={style.textfield_wrapper}>
            <div className={style.block_with_post_field}>
                <div className={style.ava_and_message}>
                    <img alt="Алексей Абрамов" src="https://sun9-60.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                    <input onFocus={showButton} ref={newPostElement} className="input" type="text" placeholder="Что у вас нового?"></input>
                </div>
                <div className={style.icons_message_field}>

                    <Icon24Camera/>
                    <Icon24Video/>
                    <Icon24Music/>
                </div>
                <div className={style.icons_message_field_focus}>
                    <Icon24SmileOutline/>
                </div>
            </div>
            <div className={style.invisible_part}>
                <div className={style.icons_invisible_wrapper}>
                    <Icon24Camera/>
                    <Icon24Video/>
                    <Icon24Music/>
                </div>
                <div className={style.submit_button}>
                    <button onClick={addNewPost}>Опубликовать</button>
                </div>
            </div>
        </div>
    )
};

export default TextfieldBlockProfile;