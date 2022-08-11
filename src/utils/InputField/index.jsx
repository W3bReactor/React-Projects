import React from 'react';
import styles from './InputField.module.scss'

const InputField = ({placeholder, type, value}) => {
    return (
        <input className={styles.input} placeholder={placeholder} type={type} value={value ? value : ''}/>
    );
};

export default InputField;