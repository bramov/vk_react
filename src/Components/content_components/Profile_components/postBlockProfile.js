import React from "react";
import style from '../../CSS/Profile_CSS/postBlockProfile.module.css';
import {Icon28ChevronDownOutline, Icon28CommentOutline, Icon28LikeOutline, Icon28ShareOutline, Icon24View} from "../../../vk_import";

const PostBlockProfile = (props) => {
    return(
        <div className={style.block_with_messages}>
            <div className={style.photo_name_and_date}>
                <div className={style.photo_and_name_and_date_wrapper}>
                    <img alt="Алексей Абрамов" src="https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                    <div className={style.name_and_date}>
                        <h5>Алексей Абрамов</h5>
                        <span>{props.data}</span>
                    </div>
                </div>
                <Icon28ChevronDownOutline />
            </div>
            <div className={style.post_text}>
                {props.text}


            </div>


            <div className={style.like_repost_comment_block}>
                <div className={style.left_side_wrapper}>
                    <Icon28LikeOutline/>
                    <span>{props.like}</span>
                    <Icon28CommentOutline/>
                    <span>{props.comment}</span>
                    <Icon28ShareOutline/>
                </div>
                <div className={style.right_side_wrapper}>
                    <Icon24View/>
                    <span>24</span>
                </div>

            </div>
        </div>
    )
};

export default PostBlockProfile;