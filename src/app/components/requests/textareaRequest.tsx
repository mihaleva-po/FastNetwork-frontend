import React, {useState} from "react";
import {useForm} from "react-hook-form";
import styles from './textareaRequest.module.scss';


export function TextareaRequest() {

    const [textInput, setTextInput] =
        useState('Я хочу 30к часов в Доте, ищу того с кем можно тренироваться на пути к своей мечте!');

    const {
        handleSubmit,
        formState: {errors}
    } = useForm();

    const handleChange = (event: any) => {
        setTextInput(event.target.value);
    };

    const handleFocus = (event: any) => {
        if (event.target.value === textInput) {
            event.target.value = '';
        }
    };

    const onSubmit = (data: any) => {
        // alert(JSON.stringify(data));
    }

    return (
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
                    <textarea id={'textarea'} name={'area'} value={textInput}
                              onChange={handleChange} onFocus={handleFocus}>
                        </textarea>
            <h6>{textInput.length}/350</h6>
        </form>
    )
}
