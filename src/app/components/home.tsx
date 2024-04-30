"use client";
import {useUserStore} from '@/app/store'
import Image from 'next/image'
import Logo from '@/app/img/logo.png'
import Loader from '@/app/img/loader.gif'
import styles from './home.module.scss'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Form from './form/form'
import Training from './training/training';
import React, {useEffect} from "react";
import MyRequest from "@/app/components/requests/myRequests/myRequest";
import CreatingRequest from "@/app/components/requests/creatingRequest/creatingRequest";
import LoadingRequest from "@/app/components/requests/loadingRequest";
import Settings from "@/app/components/settings/settings";
import {Questions} from "@/app/components/questions/questions";
import HistoryRequest from "@/app/components/requests/historyRequest/historyRequest";

function Loading() {
    return (
        <div className={styles['preloader']}>
            <div className="preloader-img">
                <Image
                    src={Logo}
                    alt="logo"
                    width={357}
                    height={231}
                    priority
                />
            </div>
            <div className="preloader-gif">
                <Image
                    src={Loader}
                    alt="loader"
                    width={64}
                    height={64}
                    priority
                />
            </div>
        </div>
    )
}

function Screen() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Training/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/myRequests" element={<MyRequest/>}/>
                <Route path="/createRequest" element={<CreatingRequest/>}/>
                <Route path="/loadingRequest" element={<LoadingRequest/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/questions" element={<Questions/>}/>
                <Route path="/historyRequest/:title" element={<HistoryRequest/>}/>

            </Routes>
        </div>
    );
}

export default function Index() {
    const [test] = useUserStore(
        (state) => [
            state.test,
        ],
    );
    useEffect(() => {
        test()
    }, []);
    return (
        <div>
            {/*  <Loading /> */}
            <Router>
                <Screen/>
            </Router>
        </div>
    )
}
