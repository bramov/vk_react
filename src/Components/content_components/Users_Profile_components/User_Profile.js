import React from "react";
import FirstColumnUser from "./FirstColumnUser";
import SecondColumnUser from "./SecondColumnUser";
import style from '../../CSS/profile.module.css';

const UserGenerator = () => {
    return (
        <div className={style.main_content}>
            <FirstColumnUser/>
            <SecondColumnUser/>
        </div>
    )
};

export default UserGenerator;