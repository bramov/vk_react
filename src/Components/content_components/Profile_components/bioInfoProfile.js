import React from "react";

const BioInfoProfile = () => {
    return (
        <div className="bio_column">
            <div className="name_and_status">
                <h1>Алексей Абрамов</h1>
                <p className="status">Online</p>
            </div>
            <span className="status_change">изменить статус</span>
            <div className="education_info">
                <div className="label_education">
                    <div className="label">Семейное положение:</div>
                    <div className="label_value">Не женат</div>
                </div>
                <div className="label_education">
                    <div className="label">Образование:</div>
                    <div className="label_value">МГУ'19</div>
                </div>
                <div className="label_education">
                    <div className="label"></div>
                    <div className="label_value">ВШЭ'21</div>
                </div>
            </div>
            <div className="button_show_details">
                Показать подробную информацию
            </div>

            <div className="bio_additional_details">
                <div className="title_for_details">Основная информация</div>
                <div className="label_education">
                    <div className="label">Родной город:</div>
                    <div className="label_value">Самара</div>
                </div>
                <div className="label_education">
                    <div className="label">Языки:</div>
                    <div className="label_value">Русский, English</div>
                </div>

                <div className="title_for_details">Жизненная позиция</div>
                <div className="label_education">
                    <div className="label">Полит. предпочтения:</div>
                    <div className="label_value">Либеральные</div>
                </div>
                <div className="label_education">
                    <div className="label">Главное в жизни:</div>
                    <div className="label_value">Совершенствование мира</div>
                </div>
                <div className="label_education">
                    <div className="label">Главное в людях:</div>
                    <div className="label_value">Юмор и жизнелюбие</div>
                </div>
            </div>
        </div>
    )
};

export default BioInfoProfile;