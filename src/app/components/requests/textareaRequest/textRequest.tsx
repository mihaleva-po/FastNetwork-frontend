import React, {useEffect, useRef, useState} from "react";
import styles from './textRequest.module.scss';
import TextareaAutosize from 'react-textarea-autosize';


interface PropsFace {
    textRequest?: string,
    textPlaceHolder?: string,
}

const TextRequest = ({textRequest = '', textPlaceHolder = ''}: PropsFace) => {

    const [textInput, setTextInput] = useState('');

    const [placeholder, setPlaceholder] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {

        setTextInput(textRequest);
        setPlaceholder(textPlaceHolder);

    }, [textRequest, textPlaceHolder]);

    React.useLayoutEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${Math.max(
                textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
        }

    }, [textInput, textRequest, textPlaceHolder]);


    const handleChange = (event: any) => {
        setTextInput(event.target.value);
    };

    const handleFocus = (event: any) => {
        // if (event.target.value === textInput) {
        //     event.target.value = '';
        // }
        setPlaceholder('');
    };

    const MIN_TEXTAREA_HEIGHT = 32;

    return (

        <div className={styles['container']} >

            <TextareaAutosize className={styles['textarea']}
                cacheMeasurements
                value={textInput || placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
            />

            <h6>{textInput.length}/350</h6>
        </div>

    )
}

export default TextRequest;
