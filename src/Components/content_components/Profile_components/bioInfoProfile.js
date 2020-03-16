import React from "react";
import style from '../../CSS/Profile_CSS/bioInfoProfile.module.css';

const BioInfoProfile = () => {
    return (
        <div className={style.bio_column}>
            <div className={style.name_and_status}>
                <h1>Алексей Абрамов</h1>
                <p className={style.status}>Online</p>
            </div>
            <span className={style.status_change}>изменить статус</span>
            <div className={style.education_info}>
                <div className={style.label_heading}>
                    <div className={style.label}>Семейное положение:</div>
                    <div className={style.label_value}>Не женат</div>
                </div>
                <div className={style.label_heading}>
                    <div className={style.label}>Образование:</div>
                    <div className={style.label_value}>МГУ'19</div>
                </div>
                <div className={style.label_heading}>
                    <div className={style.label}></div>
                    <div className={style.label_value}>ВШЭ'21</div>
                </div>
            </div>
            <div className={style.button_show_details}>
                Показать подробную информацию
            </div>

            <div className={style.bio_additional_details}>
                <div className={style.title_for_details}>Основная информация</div>
                <div className={style.label_heading}>
                    <div className={style.label}>Родной город:</div>
                    <div className={style.label_value}>Самара</div>
                </div>
                <div className={style.label_heading}>
                    <div className={style.label}>Языки:</div>
                    <div className={style.label_value}>Русский, English</div>
                </div>

                <div className={style.title_for_details}>Жизненная позиция</div>
                <div className={style.label_heading}>
                    <div className={style.label}>Полит. предпочтения:</div>
                    <div className={style.label_value}>Либеральные</div>
                </div>
                <div className={style.label_heading}>
                    <div className={style.label}>Главное в жизни:</div>
                    <div className={style.label_value}>Совершенствование мира</div>
                </div>
                <div className={style.label_heading}>
                    <div className={style.label}>Главное в людях:</div>
                    <div className={style.label_value}>Юмор и жизнелюбие</div>
                </div>
            </div>
        </div>
    )
};

export default BioInfoProfile;