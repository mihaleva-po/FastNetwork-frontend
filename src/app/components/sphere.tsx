import React, {useState} from "react";
import styles from './sphere.module.scss';

const options = [
    {'value': 'female', 'title': 'Женский'},
    {'value': 'male', 'title': 'Мужской'},
    {'value': 'other', 'title': 'Другое'}
];

export default function Sphere() {

    const [isSelected, setIsSelected] = useState([
        false, false, false, false, false,
    ]);

    const spheres = [
        'ИТ-сфера',
        'СМИ и Соц.сети',
        'Финансы',
        'Сфера услуг',
        'Продажи'
    ];

    const handlerSelectButton = (i: number) => {
        const newIsSelected = [...isSelected];
        newIsSelected[i] = !isSelected[i];
        setIsSelected(newIsSelected);
    }

    return (
        <div className={styles['list-btn']}>
            {spheres.map((el, i) => {
                return (
                    <button key={i} onClick={() => handlerSelectButton(i)}
                            className={`${isSelected[i] ? styles['selected'] : ''}`}>
                        {el}
                    </button>
                )
            })}
            <div className={styles['container-input']}>
                <input className={styles['ownVariant']} placeholder={'Добавить свой вариант'}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M21.4768 11.7999H1.6925C1.2095 11.7999 0.817505 11.4779 0.817505 11.0811C0.817505 10.6844 1.2095 10.3624 1.6925 10.3624H21.4768C21.9598 10.3624 22.3518 10.6844 22.3518 11.0811C22.3518 11.4779 21.9598 11.7999 21.4768 11.7999"
                          fill="#7E92F8"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M10.8175 1.23747L10.8175 21.0218C10.8175 21.5048 11.1395 21.8968 11.5363 21.8968C11.933 21.8968 12.255 21.5048 12.255 21.0218L12.255 1.23747C12.255 0.75447 11.933 0.36247 11.5363 0.36247C11.1395 0.36247 10.8175 0.75447 10.8175 1.23747"
                          fill="#7E92F8"/>
                </svg>
            </div>
        </div>
    )
}
