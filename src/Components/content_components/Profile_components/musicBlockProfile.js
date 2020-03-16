import React from "react";
import style from '../../CSS/Profile_CSS/musicBlockProfile.module.css';
import {Icon28VideoOutline} from '../../../vk_import';

const MusicBlockProfile = () => {
    return (
        <div className={style.block_with_music}>
            <div className={style.description_block}>
                <div className={style.description_block_inside}>
                    <span>Аудиозаписи</span>
                    <span className={style.amount}>3</span>
                </div>
            </div>
            <div className={style.music_block_song}>
                <div className={`${style.music_block_song_pic} ${style.song1}`}>
                    <div className={style.play_button_hover}>
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className={style.music_block_song_text}>
                    <span className={style.music_block_song_text_author}>Footprints</span>
                    <span className={style.music_block_song_text_title}>The Tibbs</span>
                </div>
            </div>
            <div className={style.music_block_song}>
                <div className={`${style.music_block_song_pic} ${style.song2}`}>
                    <div className={style.play_button_hover}>
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className={style.music_block_song_text}>
                    <span className={style.music_block_song_text_author}>Deep Purple</span>
                    <span className={style.music_block_song_text_title}>Hush</span>
                </div>
            </div>
            <div className={style.music_block_song}>
                <div className={`${style.music_block_song_pic} ${style.song3}`}>
                    <div className={style.play_button_hover}>
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className={style.music_block_song_text}>
                    <span className={style.music_block_song_text_author}>Iggy Pop</span>
                    <span className={style.music_block_song_text_title}>Passenger</span>
                </div>
            </div>

        </div>

    )
};

export default MusicBlockProfile;
