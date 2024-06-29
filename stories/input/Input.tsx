import React, { ChangeEvent, InputHTMLAttributes } from "react";
import './input.css';

interface InputProps {
    className?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    setValue: (value: string) => any;
    value: string;
    label: string;
    id: string,
}
export const Input = ({ className, label, value, setValue, inputProps, id }: InputProps) => {
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>  setValue?.(target.value);

    return (
        <div className={['input', className].join(' ')}>
            <label className="input__label" htmlFor={id}>
                {label}
            </label>
            <input {...inputProps} className="input__control" id={id} value={value} onChange={onChange} />
        </div>
    );
}
