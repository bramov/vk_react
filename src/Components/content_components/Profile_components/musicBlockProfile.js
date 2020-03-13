import React from "react";
import {Icon28VideoOutline} from '../../vk_import';

const MusicBlockProfile = () => {
    return (
        <div className="block_with_music">
            <div className="description_block">
                <div className="description_block_inside">
                    <span>Аудиозаписи</span>
                    <span className="amount">3</span>
                </div>
            </div>
            <div className="music_block_song">
                <div className="music_block_song_pic">
                    <div className="play_button_hover">
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className="music_block_song_text">
                    <span className="music_block_song_text_author">Footprints</span>
                    <span className="music_block_song_text_title">The Tibbs</span>
                </div>
            </div>
            <div className="music_block_song">
                <div className="music_block_song_pic">
                    <div className="play_button_hover">
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className="music_block_song_text">
                    <span className="music_block_song_text_author">Footprints</span>
                    <span className="music_block_song_text_title">The Tibbs</span>
                </div>
            </div>
            <div className="music_block_song">
                <div className="music_block_song_pic">
                    <div className="play_button_hover">
                        <Icon28VideoOutline/>
                    </div>
                </div>
                <div className="music_block_song_text">
                    <span className="music_block_song_text_author">Footprints</span>
                    <span className="music_block_song_text_title">The Tibbs</span>
                </div>
            </div>

        </div>

    )
};

export default MusicBlockProfile;
