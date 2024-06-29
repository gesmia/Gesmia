'use client';

import { CardProvider } from '../(lib)/card-providers';
import { cardValidators } from '../(lib)/validators';
import { Input } from '../../../stories/input/Input';
import { cardFormaters } from '../(lib)/formaters';
import { useEffect, useState } from 'react';
import './cardForm.css';

interface CardFormProps {
  onChange?: (value: object) => void;
}
export default function CardForm({ onChange }: CardFormProps) {
  const [cardProvider, setCardProvider] = useState<CardProvider | null>(null);
  const cardNumber = useInputState('', cardFormaters.number(setCardProvider), cardValidators.numberErrors);
  const expirationDate = useInputState('', cardFormaters.expiration(), cardValidators.expirationErrors);
  const cvv = useInputState('', cardFormaters.cvv(), cardValidators.cvvErrors);
  const holderName = useInputState('', undefined, cardValidators.holderErrors);

  function getErrors() {
    return {
      expiration: expirationDate.error,
      number: cardNumber.error,
      holder: holderName.error,
      cvv: cvv.error,
    }
  }

  function hasErrors() {
    return Object.values(getErrors()).some(Boolean);
  }

  useEffect(() => {
    onChange?.({
      cardProvider,
      cardNumber: cardNumber.value,
      expirationDate: expirationDate.value,
      cvv: cvv.value,
      holderName: holderName.value,
      get errors() { return getErrors() },
      get invalid() { return hasErrors() },
    });
  }, [
    cardProvider,
    cardNumber.value,
    expirationDate.value,
    cvv.value,
    holderName.value,
    onChange,
  ]);

  return (
    <>
      {JSON.stringify(cardProvider, null, 2)}
      <Input {...holderName} label="Nombre del Titular" id="Nombre del Titular"
        className='input--monospaced-control'
      />

      <Input {...cardNumber} label="Número de Tarjeta" id="Número de Tarjeta"
        className='input--monospaced-control'
        inputProps={{
          placeholder: '0000 0000 0000 0000',
        }}
      />

      <Input {...expirationDate} label="Expiración" id="Expiración"
        className='input--monospaced-control'
        inputProps={{
          maxLength: 5,
          placeholder: 'YY/MM',
        }}
      />

      <Input {...cvv} label="CVV" id="CVV"
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
function useInputState<T>(initialValue: T, onChange?: (v: T) => T, validator?: (v: string) => string | null) {
  const [value, setValue] = useState(initialValue);

  return Object.freeze({
    value: value,
    get error() {
      return validator?.(value + '') || null;
    },
    setValue: (value: T) => {
      setValue(onChange ? onChange(value) : value);
    },
  })
}
//#endregion
