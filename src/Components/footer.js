import React from "react";
import style from './CSS/footer.module.css';

const Footer = () => {
    return(
        <div className={style.footer_description}>
            Powered by <s>NGINX</s>
            <br></br>Aleksei Abramov
            <br></br>and React
        </div>
    )
};

export default Footer;