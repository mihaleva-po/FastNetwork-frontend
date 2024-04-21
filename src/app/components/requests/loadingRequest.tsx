import styles from './loadingRequest.module.scss';
import {TextareaRequest} from "@/app/components/requests/textareaRequest/textareaRequest";
import React from "react";
import Loader from '@/app/img/loader.gif'
import Image from "next/image";
import {Menu} from "@/app/components/menu/menu";


const LoadingRequest = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['heading']}>
                <h4>Запрос</h4>
                <div className={styles['icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M22.7093 22.0964H14.2474C13.7644 22.0964 13.3724 21.7044 13.3724 21.2214C13.3724 20.7384 13.7644 20.3464 14.2474 20.3464H22.7093C23.1923 20.3464 23.5843 20.7384 23.5843 21.2214C23.5843 21.7044 23.1923 22.0964 22.7093 22.0964Z"
                              fill="#212121"/>
                        <mask id="mask0_64_35" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="23">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0.833713 0.000244141H20.8777V22.0964H0.833713V0.000244141Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_64_35)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M13.7957 2.35299L2.81153 16.0905C2.61203 16.3402 2.53853 16.6622 2.61203 16.9713L3.40653 20.3372L6.95203 20.2928C7.2892 20.2893 7.6007 20.1388 7.8072 19.8822C11.5604 15.1863 18.7155 6.23333 18.9185 5.97083C19.1099 5.66049 19.1845 5.22183 19.0842 4.79949C18.9815 4.36666 18.712 3.99916 18.3235 3.76466C18.2407 3.70749 16.2749 2.18149 16.2142 2.13366C15.4745 1.54099 14.3954 1.64366 13.7957 2.35299ZM2.71587 22.0965C2.31103 22.0965 1.9587 21.8188 1.8642 21.4233L0.9087 17.3738C0.711533 16.535 0.907533 15.6693 1.44537 14.9973L12.4354 1.25166C12.44 1.24699 12.4435 1.24116 12.4482 1.23649C13.6534 -0.204339 15.8327 -0.416673 17.3027 0.762827C17.361 0.808327 19.3129 2.32499 19.3129 2.32499C20.0222 2.74733 20.5764 3.50216 20.7864 4.39583C20.9952 5.28016 20.8435 6.19249 20.357 6.96366C20.3209 7.02083 20.2894 7.06983 9.17337 20.9765C8.63787 21.6438 7.8352 22.0323 6.97303 22.0428L2.72753 22.0965H2.71587Z"
                                  fill="#212121"/>
                        </g>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M17.4273 10.1323C17.2406 10.1323 17.054 10.0728 16.8941 9.95143L10.5335 5.06543C10.1508 4.77143 10.0785 4.2231 10.3725 3.8381C10.6676 3.45543 11.216 3.38426 11.5998 3.67826L17.9616 8.5631C18.3443 8.8571 18.4166 9.4066 18.1215 9.79043C17.95 10.0144 17.6898 10.1323 17.4273 10.1323Z"
                              fill="#212121"/>
                    </svg>
                </div>
            </div>
            <div className={styles['textarea']}>
                <TextareaRequest/>
            </div>

            <div className={styles['loading']}>
                <Image
                    src={Loader}
                    alt="loader"
                    width={64}
                    height={64}
                    priority
                />
            </div>
            <div className={styles['container-menu']}>
                <Menu selectedBlock={0}/>
            </div>
        </div>
    )
}

export default LoadingRequest;
