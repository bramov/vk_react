import React from "react";

const PhotoGalleryWall = () => {
    return (
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
    )
};

export default PhotoGalleryWall;