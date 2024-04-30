import styles from './creatingRequest.module.scss';
import React from "react";
import {Button} from "@/app/components/ui-components";
import {useNavigate} from 'react-router-dom';
import TextRequest from "@/app/components/requests/textareaRequest/textRequest";
// import {TextareaRequest} from "@/app/components/requests/textareaRequest/textareaRequest";

const CreatingRequest = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/myRequests');
    }

    const handleClickDone = () => {
        navigate("/loadingRequest");
    }

    return (
        <div className={styles['container']}>
            <div className={styles['statusbar']}></div>
            <div className={styles['block-text']}>
                <h1>Создание запроса</h1>
                <p>Давай сделаем твое будущее общение проще и комфортнее </p>
            </div>
            <div className={styles['main']}>
                <p>Напиши самое главное о запросе</p>
                {/*<TextareaRequest/>*/}
                <TextRequest textPlaceHolder={'Я хочу 30к часов в Доте, ищу того с кем можно тренироваться на пути к своей мечте!'}/>
            </div>

            <div className={styles['block-buttons']}>
                <div className={styles['block']}>
                    <Button text="Назад" onClick={handleClickBack} type="disbl" width="50%"/>
                    <Button text="Готово" onClick={handleClickDone} type="primary" width="50%"/>
                </div>
            </div>
        </div>
    )
}

export default CreatingRequest;
