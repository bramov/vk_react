import {rerenderEntireTree} from "../render";

const state = {
    UserData: [
        {
            id: 1,
            name: 'Павел Дуров',
            photo: 'https://sun1-98.userapi.com/c836333/v836333001/31192/y1Cm4JfplhQ.jpg?ava=1',
            messages: [
                {
                    id: 2,
                    me: false,
                    text: 'Интересно, что бы я без тебя делал'
                },
                {
                    id: 1,
                    me: false,
                    text: 'Спасибо за сайт!'
                },
                {
                    id: 0,
                    me: false,
                    text: 'Привет, Леха'
                }
            ],
            generatePreview: function () {
                return this.messages[0].text;
            },
            generateClass: function () {
                if (this.messages[0].me) {
                    return 'message_my_photo';
                }
                return 'message_my_photo_noLast';
            },
            generateMessagePhoto: function (el) {
                if (el.me) {
                    return 'https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1';
                } else {
                    return this.photo;
                }
            },
            generateFirstName: function (el) {
                return el.me ? 'Алексей' : this.name.split(' ')[0];
            }

        },
        {
            id: 2,
            name: 'Олег Тиньков',
            photo: 'https://sun1-24.userapi.com/c830408/v830408310/9f89f/y4RXPChEl8s.jpg?ava=1',
            messages: [
                {
                    id: 8,
                    me: false,
                    text: 'переименуй в тинькоВК, кстати'
                },
                {
                    id: 7,
                    me: false,
                    text: 'да и денег у меня больше, чем у тебя )))))'
                },
                {
                    id: 6,
                    me: false,
                    text: 'да и денег у меня больше, чем у тебя )))))'
                },
                {
                    id: 5,
                    me: false,
                    text: 'да и денег у меня больше, чем у тебя )))))'
                },
                {
                    id: 4,
                    me: false,
                    text: 'да и денег у меня больше, чем у тебя )))))'
                },
                {
                    id: 3,
                    me: false,
                    text: 'да и денег у меня больше, чем у тебя )))))'
                },
                {
                    id: 2,
                    me: true,
                    text: 'ponyal'
                },
                {
                    id: 1,
                    me: false,
                    text: 'Мой суперджет Falcon X8 круче :)'
                },
                {
                    id: 0,
                    me: true,
                    text: 'Привет, как тебе мой сайт?'
                }
            ],
            generatePreview: function () {
                return this.messages[0].text;
            },
            generateClass: function () {
                if (this.messages[0].me) {
                    return 'message_my_photo';
                }
                return 'message_my_photo_noLast';
            },
            generateMessagePhoto: function (el) {
                if (el.me) {
                    return 'https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1';
                } else {
                    return this.photo;
                }
            },
            generateFirstName: function (el) {
                return el.me ? 'Алексей' : this.name.split(' ')[0];
            }
        },
        {
            id: 3,
            name: 'Дмитрий Медведев',
            photo: 'https://sun1-93.userapi.com/c836634/v836634705/19405/RmhcChZNBP8.jpg?ava=1',
            messages: [
                {
                    id: 3,
                    me: true,
                    text: 'да не было меня на этом митинге'
                },
                {
                    id: 2,
                    me: false,
                    text: 'Не понимаю, почему ты не отвечал мне 10 августа примерно в 12:00'
                },
                {
                    id: 1,
                    me: false,
                    text: 'Только есть один вопрос'
                },
                {
                    id: 0,
                    me: false,
                    text: 'Привет, зарегистрировался в твоей Social Network, очень нравится, прямо инновационно так'
                }
            ],
            generatePreview: function () {
                return this.messages[0].text;
            },
            generateClass: function () {
                if (this.messages[0].me) {
                    return 'message_my_photo';
                }
                return 'message_my_photo_noLast';
            },
            generateMessagePhoto: function (el) {
                if (el.me) {
                    return 'https://sun1-20.userapi.com/c858132/v858132635/b8e9e/3CX8bZZFF1Q.jpg?ava=1';
                } else {
                    return this.photo;
                }
            },
            generateFirstName: function (el) {
                return el.me ? 'Алексей' : this.name.split(' ')[0];
            }
        }

    ],
    PostsWall: [
        {
            id: 3,
            text: 'всем привет сделал социалочку',
            date: '29 июл 2019',
            likes: 148
        },
        {
            id: 2,
            text: 'c др меня',
            date: '30 мар 2010',
            likes: 2

        },
        {
            id: 1,
            text: 'я родился блин',
            date: '30 мар 1997',
            comments: 3
        }
    ],
    addPost: function(postMessage) {
        const getDate = () => {

            let dateString = new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            dateString = dateString.replace('.', '');
            return dateString.replace('г.', '');
        };
        let newPost = {
            id: 5,
            text: postMessage,
            date: getDate()
        };
        state.PostsWall.unshift(newPost);
        rerenderEntireTree(state);
    },
    sendMessage: function(message, id) {
        let newMessage = {
            id: 5,
            me: true,
            text: message
        };
        state.UserData[id].messages.unshift(newMessage);
        rerenderEntireTree(state);
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: postMessage,
        date: '00 янв 2020'
    };
    state.PostsWall.unshift(newPost);

};

export default state;


function User(name, surname) {
    this.fullName = `${name} ${surname}`;
    this.avatar = [];
    this.friends = [];
    this.subscriptions = [];
    this.music = [];
    this.photos = [];
    this.posts = [];

}