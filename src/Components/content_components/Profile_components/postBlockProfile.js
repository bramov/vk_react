import React from "react";
import {Icon28ChevronDownOutline, Icon28CommentOutline, Icon28LikeOutline, Icon28ShareOutline, Icon24View} from "../../../vk_import";

const PostOnTheWall = () => {
    return(
        <div className="block_with_messages">
            <div className="photo_name_and_date">
                <div className="photo_and_name_and_date_wrapper">
                    <img src="https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                    <div className="name_and_date">
                        <h5>Алексей Абрамов</h5>
                        <span>29 июл 2019</span>
                    </div>
                </div>
                <Icon28ChevronDownOutline />
            </div>
            <div className="post_text">Добрый день! Спасибо, что зашли на сайт с моей социальной сетью. Попробуйте сделать что-нибудь!</div>

            <div class="like_repost_comment_block">
                <div className="left_side_wrapper">
                    <Icon28LikeOutline/>
                    <Icon28CommentOutline/>
                    <Icon28ShareOutline/>
                </div>
                <div className="right_side_wrapper">
                    <Icon24View/>
                    <span>24</span>
                </div>

            </div>
        </div>
    )
};

export default PostOnTheWall;