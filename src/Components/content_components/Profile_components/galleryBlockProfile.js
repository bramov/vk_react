import React from "react";
import style from '../../CSS/Profile_CSS/galleryBlockProfile.module.css';

const GalleryBlockProfile = () => {
    return (
        <div className={style.block_with_photo}>
            <div className={style.description_block}>
                <div className={style.description_block_inside}>
                    <span>Мои фотографии</span>
                    <span className={style.amount}>4</span>
                </div>
                <div className={style.updates}>обновления</div>
            </div>
            <div className={style.photo_gallery}>
                <div className={style.photo1}></div>
                <div className={style.photo2}></div>
                <div className={style.photo3}></div>
                <div className={style.photo4}></div>
            </div>
        </div>
    )
};

export default GalleryBlockProfile;