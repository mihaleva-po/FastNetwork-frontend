import styles from "./myRequest.module.scss";
import React, {useState} from "react";
import FN from '@/app/img/FN.png';
import Image from "next/image";
import {Button} from "@/app/components/ui-components";
import {NavLink} from "react-router-dom";
import {Menu} from "@/app/components/menu/menu";
import SwipeToDelete from "@/app/components/swipeToDelete";
import ModalWindow from "@/app/components/modalWindow/modalWindow";


export default function MyRequest() {

    const [isModal, setIsModal] = useState(false);
    const [isModalDeleteAll, setIsModalDeleteAll] = useState(false);

    const [idSelectedRequest, setIdSelectedRequest] = useState(-1);


    const [requests, setRequests] = useState([
        {
            id: 1,
            title: 'Я давно хочу научиться готовить, есть тут шефы Ивлеевы?)',
            date: '29 Dec 2023',
            time: '09:41 AM'
        },
        {
            id: 2,
            title: 'Я хочу 30к часов в Доте, ищу того с кем можно тренироваться на пути к своей мечте!',
            date: '29 Dec 2023',
            time: '09:41 AM'
        },
        {id: 3, title: 'Я ищу бизнес партнера для открытия точки шавермы', date: '29 Dec 2023', time: '09:41 AM'},
    ]);

    const onDeleteRequest = (id: number) => {
        setIdSelectedRequest(id);
        setIsModal(true);
    }

    const onDeleteAll = () => {
        setIsModalDeleteAll(true);
    }

    const onConfirmationDelete = () => {
        setIsModal(false);
        setRequests(requests.filter(el => el.id !== idSelectedRequest));
    }

    const onConfirmationDeleteAll = () => {
        setIsModalDeleteAll(false);
        setRequests([]);
    }

    const onCancelDelete = () => {
        setIsModal(false);
        setIsModalDeleteAll(false);
    }

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <h4>Мои запросы</h4>
                <svg onClick={onDeleteAll} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20"
                     fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.2877 19.5833C9.70687 19.5833 8.16571 19.5689 6.64087 19.543C4.69021 19.5114 3.34037 18.4726 3.11987 16.8319C2.75237 14.1102 2.12354 7.69515 2.11771 7.63094C2.07804 7.23515 2.43737 6.88823 2.91921 6.85661C3.39404 6.84606 3.82337 7.12015 3.86187 7.51498C3.86771 7.58015 4.49537 13.9732 4.85937 16.6738C4.98421 17.6062 5.59671 18.0873 6.67704 18.1055C9.59371 18.1563 12.5699 18.1592 15.7782 18.1113C16.9262 18.0931 17.5469 17.6216 17.6752 16.6671C18.0369 13.9895 18.6669 7.58015 18.6739 7.51498C18.7124 7.12015 19.1382 6.84415 19.6154 6.85661C20.0972 6.88919 20.4565 7.23515 20.418 7.63094C20.411 7.69611 19.7787 14.1275 19.4147 16.8252C19.1884 18.4994 17.842 19.5181 15.8097 19.5488C14.2545 19.5708 12.7542 19.5833 11.2877 19.5833Z"
                          fill="#212121"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M21.1593 5.198H1.375C0.892 5.198 0.5 4.876 0.5 4.47925C0.5 4.0825 0.892 3.7605 1.375 3.7605H21.1593C21.6423 3.7605 22.0343 4.0825 22.0343 4.47925C22.0343 4.876 21.6423 5.198 21.1593 5.198Z"
                          fill="#212121"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.3471 5.19812C16.0195 5.19812 14.8668 4.42091 14.6055 3.35141L14.322 2.18608C14.2625 2.00878 14.0163 1.85449 13.7363 1.85449H8.79781C8.51781 1.85449 8.27165 2.00878 8.20048 2.23016L7.92865 3.35141C7.66848 4.42091 6.51465 5.19812 5.18698 5.19812C4.70398 5.19812 4.31198 4.87612 4.31198 4.47937C4.31198 4.08262 4.70398 3.76062 5.18698 3.76062C5.68398 3.76062 6.11565 3.46928 6.21365 3.0687L6.49715 1.90337C6.78531 1.0102 7.72681 0.416992 8.79781 0.416992H13.7363C14.8073 0.416992 15.7488 1.0102 16.0253 1.86024L16.3216 3.0687C16.4185 3.46928 16.8501 3.76062 17.3471 3.76062C17.8301 3.76062 18.2221 4.08262 18.2221 4.47937C18.2221 4.87612 17.8301 5.19812 17.3471 5.19812Z"
                          fill="#212121"/>
                </svg>
            </div>
            <div className={styles['content']}>
                {
                    (requests.length > 0) ?
                        requests.map(request => (
                            <div key={request.id} className={styles['block-requests']}>
                                <SwipeToDelete request={request} onDeleteRequest={onDeleteRequest}/>
                            </div>
                        ))
                        :
                        <div className={styles['container-btn']}>
                            <div className={styles['basic']}>
                                <div className={styles['img-container']}>
                                    <div className={styles['img']}>
                                        <Image src={FN} alt={'FN'}/>
                                    </div>

                                </div>
                                <div className={styles['text']}>
                                    <h4>Нет ни одного запроса</h4>
                                    <p>К сожалению, у тебя еще нет ни одного созданного запроса. Мы будем рады помочь
                                        тебе с
                                        этим!</p>
                                </div>

                            </div>
                            <NavLink to={'/createRequest'} className={styles['button-block']}>
                                <Button text={'Создать запрос '} width={"100%"} type={'primary'}/>
                            </NavLink>
                        </div>
                }

            </div>
            <div className={styles['menu']}>
                <Menu/>
            </div>

            {isModal ?
                <ModalWindow onConfirmationDelete={onConfirmationDelete} onCancelDelete={onCancelDelete}/>
                :
                null
            }

            {
                isModalDeleteAll ?
                    <ModalWindow onCancelDelete={onCancelDelete} onConfirmationDelete={onConfirmationDeleteAll}/>
                    :
                    null
            }

        </div>
    )
}
