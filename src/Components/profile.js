import React from "react";
import {Icon24MoreHorizontal, Icon24Camera, Icon24Music, Icon24Video} from '../vk_import';

const Content = () => {
    return (
        <div className="main_content">
            <div className="first_column">
                <div className="photo_column">
                    <div className="photo_avatar">
                        <img alt="avatar" src="https://sun9-47.userapi.com/impf/c858132/v858132635/b8e9a/GxzjcX3aZ28.jpg?size=400x0&quality=90&sign=d477e90b9dab2a195827003d99cedfae"></img>
                        <div className="photo_avatar_settings">
                            <div className="photo_avatar_setting_left">Редактировать</div>
                            <div className="photo_avatar_setting_right"><Icon24MoreHorizontal width={20} height={20}/></div>
                        </div>
                    </div>
                </div>
                <div className="block_with_friends">
                    <div className="description_block">
                        <div className="description_block_inside">
                            <span>Друзья</span>
                            <span className="amount">4</span>
                        </div>
                        <div className="updates">обновления</div>
                    </div>
                    <div className="friends_block_pics">
                        <figure>
                            <img src="https://sun1-47.userapi.com/c830408/v830408310/9f8a0/lgXyg0yR11I.jpg?ava=1"></img>
                            <figcaption>Олег</figcaption>
                        </figure>
                        <figure>
                            <img src="https://sun1-16.userapi.com/c850136/v850136423/1301d1/bAfDr9KdyQo.jpg?ava=1"></img>
                            <figcaption>Артемий</figcaption>
                        </figure>
                        <figure>
                            <img src="https://sun1-27.userapi.com/c624720/v624720930/260c6/HbfLB8PCV5U.jpg?ava=1"></img>
                            <figcaption>Евгений</figcaption>
                        </figure>
                    </div>
                    <div className="friends_block_pics">
                        <figure>
                            <img src="https://sun1-98.userapi.com/c836333/v836333001/31192/y1Cm4JfplhQ.jpg?ava=1"></img>
                            <figcaption>Павел</figcaption>
                        </figure>
                    </div>

                </div>

            </div>
            <div className="second_column">
                <div className="bio_column">
                    <div className="name_and_status">
                        <h1>Алексей Абрамов</h1>
                        <p className="status">Online</p>
                    </div>
                    <span className="status_change">изменить статус</span>
                    <div className="education_info">
                        <div class="label_education">
                            <div className="label">Семейное положение:</div>
                            <div className="label_value">Не женат</div>
                        </div>
                        <div className="label_education">
                            <div className="label">Образование:</div>
                            <div className="label_value">МГУ'19</div>
                        </div>
                        <div className="label_education">
                            <div className="label"></div>
                            <div className="label_value">ВШЭ'21</div>
                        </div>
                    </div>
                    <div className="button_show_details">
                        Показать подробную информацию
                    </div>

                    <div className="bio_additional_details">
                        <div class="title_for_details">Основная информация</div>
                        <div className="label_education">
                            <div className="label">Родной город:</div>
                            <div className="label_value">Самара</div>
                        </div>
                        <div className="label_education">
                            <div className="label">Языки:</div>
                            <div className="label_value">Русский, English</div>
                        </div>

                        <div className="title_for_details">Жизненная позиция</div>
                        <div className="label_education">
                            <div className="label">Полит. предпочтения:</div>
                            <div className="label_value">Либеральные</div>
                        </div>
                        <div className="label_education">
                            <div className="label">Главное в жизни:</div>
                            <div className="label_value">Совершенствование мира</div>
                        </div>
                        <div className="label_education">
                            <div className="label">Главное в людях:</div>
                            <div className="label_value">Юмор и жизнелюбие</div>
                        </div>
                    </div>
                </div>
                <div className="block_with_photo">
                    <div className="description_block">
                        <div className="description_block_inside">
                            <span>Мои фотографии</span>
                            <span className="amount">4</span>
                        </div>
                        <div className="updates">обновления</div>
                    </div>
                    <div className="photo_gallery">
                        <div className="photo1"></div>
                        <div className="photo2"></div>
                        <div className="photo3"></div>
                        <div className="photo4"></div>
                    </div>
                </div>
                <div className="block_with_post_field">
                    <div className="ava_and_message">
                        <img src="https://sun9-60.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1"></img>
                        <span>Что у вас нового?</span>
                    </div>
                    <div className="icons_message_field">
                        <Icon24Camera/>
                        <Icon24Video/>
                        <Icon24Music/>
                    </div>
                </div>

            </div>


        </div>
    )
};

export default Content;