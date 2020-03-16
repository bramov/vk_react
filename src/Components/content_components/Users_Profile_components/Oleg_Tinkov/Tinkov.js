import React from "react";
import style from './CSS/profile.module.css';
import FirstColumn from "./content_components/firstColumn";
import SecondColumn from "./content_components/secondColumn";



const Tinkov = () => {
    return (
        <div className={style.main_content}>
           <FirstColumn/>
           <SecondColumn/>
        </div>
    )
};

export default Tinkov;