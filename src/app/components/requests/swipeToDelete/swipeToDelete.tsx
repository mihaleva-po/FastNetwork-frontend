import {useState} from "react";
import styles from './swipeToDelete.module.scss';


interface RequestFace {
    request: ItemFace,
    onDeleteRequest: (id: number) => void,
}

interface ItemFace {
    id: number,
    title: string,
    date: string,
    time: string
}

const SwipeToDelete = ({request, onDeleteRequest}: RequestFace) => {

    const [width, setWidth] = useState(386); // Изначальная ширина блока

    const [isSwiping, setIsSwiping] = useState(false);

    const [isNumber, setNumber] = useState(true);

    const handleTouchStart = () => {
        setIsSwiping(true);

    };

    const handleTouchMove = () => {
        if (isSwiping) {
            // const touch = event.touches[0];
            // const newWidth = touch.clientX - event.currentTarget.getBoundingClientRect().left;
            setWidth(300);
            setNumber(false);
        }
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
    };

    const onCancelHandler = () => {
        setNumber(true);
        setWidth(386);
    }

    return (
        <div className={styles['container-big']}>
            <div className={styles['basket']} style={!isNumber ? {backgroundColor: "red"} : {}}>
                {!isNumber ?
                    <svg onClick={() => onDeleteRequest(request.id)} xmlns="http://www.w3.org/2000/svg" width="22"
                         height="24" viewBox="0 0 22 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M20.6683 4.11671C21.1222 4.11671 21.5 4.49354 21.5 4.97304V5.41637C21.5 5.8842 21.1222 6.27269 20.6683 6.27269H1.33283C0.877837 6.27269 0.5 5.8842 0.5 5.41637V4.97304C0.5 4.49354 0.877837 4.11671 1.33283 4.11671H4.73449C5.42549 4.11671 6.02685 3.62555 6.1823 2.93256L6.36044 2.1369C6.63729 1.05308 7.54841 0.333252 8.59115 0.333252H13.4088C14.4402 0.333252 15.3616 1.05308 15.6282 2.07973L15.8188 2.93139C15.9731 3.62555 16.5745 4.11671 17.2666 4.11671H20.6683ZM18.9401 20.323C19.2953 17.0132 19.9171 9.1499 19.9171 9.07056C19.9398 8.83023 19.8615 8.60274 19.706 8.41957C19.5392 8.24807 19.3282 8.14657 19.0956 8.14657H2.91328C2.67954 8.14657 2.45715 8.24807 2.30284 8.41957C2.14626 8.60274 2.0691 8.83023 2.08045 9.07056C2.08253 9.08514 2.10484 9.36212 2.14214 9.82518C2.30785 11.8823 2.76936 17.6118 3.06759 20.323C3.27863 22.3203 4.58915 23.5756 6.48741 23.6211C7.95223 23.6549 9.46131 23.6666 11.0044 23.6666C12.4579 23.6666 13.9341 23.6549 15.4443 23.6211C17.4084 23.5873 18.7177 22.3541 18.9401 20.323Z"
                              fill="white"/>
                    </svg>
                    :
                    null
                }

            </div>
            <div className={styles['container']} style={{width: `${width}px`}} onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}>
                <div className={styles['info']}>
                    <p className={styles['text']}>{request.title}</p>
                    <div className={styles['date']}>
                        <p>{request.date}</p>
                        <p>-</p>
                        <p>{request.time}</p>
                    </div>
                </div>
                <div className={styles['numberRequest']} onClick={onCancelHandler}>
                    {isNumber ? request.id :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17" fill="none">
                            <path
                                d="M0.96967 16.0303C0.703403 15.7641 0.679197 15.3474 0.897052 15.0538L0.96967 14.9697L7.439 8.5L0.96967 2.03033C0.703403 1.76406 0.679197 1.3474 0.897052 1.05379L0.96967 0.96967C1.23594 0.703403 1.6526 0.679197 1.94621 0.897052L2.03033 0.96967L9.03033 7.96967C9.2966 8.23594 9.3208 8.6526 9.10295 8.94621L9.03033 9.03033L2.03033 16.0303C1.73744 16.3232 1.26256 16.3232 0.96967 16.0303Z"
                                fill="#212121"/>
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default SwipeToDelete;
