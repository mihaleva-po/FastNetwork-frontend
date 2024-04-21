import styles from './chapter.module.scss';
import React from "react";
import {useNavigate} from "react-router-dom";

interface PropsFace {
    index: number,
    el: ElementFace
}

interface ElementFace {
    title: string,
    svg: string
}

const Chapter = ({index, el}: PropsFace) => {

    const navigation = useNavigate();

    const onClickBlockSettingHandler = (numBlock: number) => {
        if (numBlock === 2) {
            navigation('/questions');
        }
    }

    return (
        <div onClick={() => onClickBlockSettingHandler(index)} className={styles['container-chapter']}>
            <div
                style={{display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", height: "100%",}}>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}
                     dangerouslySetInnerHTML={{__html: el.svg}}></div>
                <h6>{el.title}</h6>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16"
                 fill="none">
                <path
                    d="M0.46967 15.6729C0.203403 15.4066 0.179197 14.99 0.397052 14.6964L0.46967 14.6122L6.939 8.14258L0.46967 1.67291C0.203403 1.40664 0.179197 0.989978 0.397052 0.696366L0.46967 0.612248C0.735936 0.345982 1.1526 0.321775 1.44621 0.53963L1.53033 0.612248L8.53033 7.61225C8.7966 7.87852 8.8208 8.29518 8.60295 8.58879L8.53033 8.67291L1.53033 15.6729C1.23744 15.9658 0.762563 15.9658 0.46967 15.6729Z"
                    fill="#212121"/>
            </svg>
        </div>
    )
}

export default Chapter;
