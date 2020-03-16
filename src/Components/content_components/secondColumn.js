import React from "react";
import style from '../CSS/columns.module.css';
import PostBlockProfile from "./Profile_components/postBlockProfile";
import TextfieldBlockProfile from "./Profile_components/textfieldBlockProfile";
import GalleryBlockProfile from "./Profile_components/galleryBlockProfile";
import BioInfoProfile from "./Profile_components/bioInfoProfile";


const SecondColumn = () => {
    return (
        <div className={style.second_column}>
            <BioInfoProfile/>
            <GalleryBlockProfile/>
            <TextfieldBlockProfile/>
            <PostBlockProfile text="всем привет" data="29 июл 2019" like="1"/>
            <PostBlockProfile text="я зарегистрировался вконтакте" data="14 июн 2015"/>
            <PostBlockProfile text="я родился" data="30 мар 1997" like="2" comment="2"/>
        </div>
    )
};

export default SecondColumn;