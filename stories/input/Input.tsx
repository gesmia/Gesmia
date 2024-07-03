import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import './input.css';

export * from './lib';

interface InputProps {
  className?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  setValue?: (value: string) => any;
  readonly invalid?: boolean;
  hints?: ReactNode;
  value?: string;
  label: string;
  id: string,
}
export const Input = ({ className, label, value, setValue, invalid, inputProps, id, hints }: InputProps) => {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue?.(target.value);

  return (
    <div className={['input', className, invalid ? 'input--invalid' : ''].join(' ')}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input {...inputProps} className="input__control" id={id} value={value} onChange={onChange} />
      <div className="input__hints">
        {hints}
      </div>
    </div>
  );
}
