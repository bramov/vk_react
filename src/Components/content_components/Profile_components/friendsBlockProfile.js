import React from "react";

const FriendsBlockProfile = () => {
    return (
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
            <div className="online">
                <div className="description_block">
                    <div className="description_block_inside">
                        <span>Друзья Онлайн</span>
                        <span className="amount">1</span>
                    </div>
                </div>
                <div className="friends_block_pics">
                    <figure>
                        <img src="https://sun1-98.userapi.com/c836333/v836333001/31192/y1Cm4JfplhQ.jpg?ava=1"></img>
                        <figcaption>Павел</figcaption>
                    </figure>
                </div>
            </div>
        </div>

    )
};

export default FriendsBlockProfile;
