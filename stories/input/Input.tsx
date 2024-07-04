import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import './input.css';

export * from './lib';

interface InputProps {
  className?: string;
  customControl?: (p: { 
    onChange: ({ target }: ChangeEvent<HTMLInputElement>) => VideoEncoderEncodeOptions;
    setValue?: (e: string) => void;
    value?: string;
  }) => ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  setValue?: (value: string) => any;
  readonly invalid?: boolean;
  hints?: ReactNode;
  value?: string;
  label: string;
  id: string,
}
export const Input = ({ className, label, value, setValue, invalid, inputProps, id, hints, customControl }: InputProps) => {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue?.(target.value);

  return (
    <div className={['input', className, invalid ? 'input--invalid' : ''].join(' ')}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      {customControl ? (
          <div className="input__control">
            {customControl({ value, setValue, onChange })}
          </div>
        ) : (
          <input {...inputProps} className="input__control" id={id} value={value} onChange={onChange} />
        )
      }
      <div className="input__hints">
        {hints}
      </div>
    </div>
  );
}
