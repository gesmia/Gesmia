'use client';

import { useState } from 'react';
import { Input } from '../../stories/input/Input'
import './page.css';

export default function CheckoutPage() {
  const holderName = useInputState('');
  const cardNumber = useInputState('', (value) => {
    value = digitsOnly(value);
    return splitToChunks(value, 4).join(' ');
  });
  const expirationDate = useInputState('',  (value) => {
    value = digitsOnly(value);
    return splitToChunks(value, 2).join(' / ');
  });
  const cvv = useInputState('', digitsOnly);

  return (
    <>
      <Input {...holderName} label="Nombre del Titular" 
        className='input--monospaced-control'
      />

      <Input {...cardNumber} label="Número de Tarjeta" 
        className='input--monospaced-control'
        inputProps={{
          maxLength: 19,
          placeholder: '0000 0000 0000 0000',
        }}
      />

      <Input {...expirationDate} label="Expiración" 
        className='input--monospaced-control'
        inputProps={{
          maxLength: 7,
          placeholder: 'YY / MM',
        }}
      />

      <Input {...cvv} label="CVV"
        className='input--monospaced-control'
        inputProps={{
          maxLength: 3,
          placeholder: '000',
        }}
      />
    </>
  );
}

//#region UTILS
function useInputState<T>(initialValue: T, onChange?: (value: T) => T) {
  const [value, setValue] = useState(initialValue);
  
  return Object.freeze({
    value: value,
    setValue: (value: T) => {
      setValue(onChange ? onChange(value) : value);
    },
  })
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, '');
}

function splitToChunks(str: string, chunkSize: number = 4): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  return chunks;
}
//#endregion
