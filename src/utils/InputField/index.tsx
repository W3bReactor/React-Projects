import React, {FC} from 'react';
import styles from './InputField.module.scss'

interface InputFieldProps {
    placeholder: string;
    type: string;
    value?: string;
}

const InputField:FC<InputFieldProps> = ({placeholder, type, value}) => {
    return (
        <input className={styles.input} placeholder={placeholder} type={type} value={value ? value : ''}/>
    );
};

export default InputField;