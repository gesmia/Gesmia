import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import './input.css';

interface InputProps {
    className?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    setValue: (value: string) => any;
    value: string;
    label: string;
}
export const Input = ({ className, label, value, setValue, inputProps }: InputProps) => {
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>  setValue?.(target.value);
    const [componentId] = useState(`input-${Math.random()}`);

    return (
        <div className={['input', className].join(' ')}>
            <label className="input__label" htmlFor={componentId}>
                {label}
            </label>
            <input {...inputProps} className="input__control" id={componentId} value={value} onChange={onChange} />
        </div>
    );
}
