import styles from "./myRequest.module.scss";
import React, {useState} from "react";
import FN from '@/app/img/FN.png';
import Image from "next/image";
import {Button} from "@/app/components/ui-components";
import {NavLink, useNavigate} from "react-router-dom";
import {Menu} from "@/app/components/menu/menu";
import SwipeToDelete from "@/app/components/requests/swipeToDelete/swipeToDelete";
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

    const navigation = useNavigate();

    const onGoHistoryRequest = (title:string) => {
        navigation(`/historyRequest/${title}`);
    }

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <h4>Мои запросы</h4>
            </div>
            <div className={styles['content']}>
                {
                    (requests.length > 0) ?
                        requests.map(request => (
                            <div key={request.id} className={styles['block-requests']}
                            onClick={()=>onGoHistoryRequest(request.title)}>
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
                <Menu selectedBlock={0}/>
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
