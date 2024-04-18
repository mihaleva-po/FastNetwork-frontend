import styles from './modalWindow.module.scss';
import {Button} from "@/app/components/ui-components";
import React from "react";

interface PropsFace {
    onCancelDelete: () => void,
    onConfirmationDelete: () => void,
}

const ModalWindow = ({onCancelDelete, onConfirmationDelete}: PropsFace) => {

    return (
        <div className={styles['modal']}>
            <div className={styles["modal-wrapper"]}>
                <div className={styles["modal-content"]}>
                    <div className={styles['frame']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="3" viewBox="0 0 38 3" fill="none">
                            <g clipPath="url(#clip0_41_389)">
                                <rect width="38" height="3" rx="1.5" fill="#E0E0E0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_41_389">
                                    <rect width="38" height="3" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={styles['title']}>Удалить запрос</div>
                    <div className={styles['line']}></div>
                    <div className={styles['question']}>Ты хочешь удалить запрос?</div>
                    <div className={styles['block-buttons']}>
                        <Button text="Нет" onClick={onCancelDelete} type="disbl" width="40%"/>
                        <Button text="Да" onClick={onConfirmationDelete} type="primary" width="60%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;
