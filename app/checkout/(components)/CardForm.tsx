'use client';

import { cardFormaters, phoneFormater } from './lib/formaters';
import { cardValidators, emailErrors, phoneErrors } from './lib/validators';
import { Input, useInputState } from '../../../stories/input/Input';
import { CardProvider } from './lib/card-providers';
import { useEffect, useState } from 'react';
import { objMap } from '../(lib)/utils';

import PhoneInput from 'react-phone-input-2';
import './cardForm.css';

interface CardFormProps {
  onChange?: (value: object) => void;
}
export default function CardForm({ onChange }: CardFormProps) {
  const [cardProvider, setCardProvider] = useState<CardProvider | null>(null);
  const phone = useInputState('+', phoneFormater, phoneErrors);
  const email = useInputState('', null, emailErrors);

  const card = {
    holder: useInputState('', null, cardValidators.holderErrors),
    number: useInputState('', cardFormaters.number(setCardProvider), cardValidators.numberErrors),
    expiration: useInputState('', cardFormaters.expiration(), cardValidators.expirationErrors),
    cvv: useInputState('', cardFormaters.cvv(), cardValidators.cvvErrors),
  }

  function getErrors() {
    return {
      email: email.errors,
      ...objMap(card, (v) => v.errors),
    }
  }

  function hasErrors() {
    return Object.values(getErrors()).some(Boolean);
  }

  useEffect(() => {
    onChange?.({
      cardProvider,
      email: email.value,
      card: objMap(card, (v) => v.value),
      get phone() { return phone.value },
      get errors() { return getErrors() },
      get invalid() { return hasErrors() },
    });
  }, [
    cardProvider,
    email.value,
    card.number.value,
    card.expiration.value,
    card.cvv.value,
    card.holder.value,
    phone.value,
    onChange,
  ]);

  return (
    <>
      {JSON.stringify(cardProvider, null, 2)}
      <Input {...card.holder} label="Nombre del Titular" id="Nombre del Titular"
        className='input--monospaced-control'
      />

      <Input {...card.number} label="Número de Tarjeta" id="Número de Tarjeta"
        className='input--monospaced-control'
        inputProps={{
          placeholder: '0000 0000 0000 0000',
        }}
      />

      <Input {...card.expiration} label="Expiración" id="Expiración"
        className='input--monospaced-control'
        inputProps={{
          maxLength: 5,
          placeholder: 'YY/MM',
        }}
      />

      <Input {...card.cvv} label="CVV" id="CVV"
        className='input--monospaced-control'
        inputProps={{
          maxLength: 3,
          placeholder: '000',
        }}
      />

      <hr />
      <br />

      <Input {...email} label="Correo Electrónico" id="Correo Electrónico"
        className='input--monospaced-control'
        inputProps={{
          type: 'email',
        }}
      />

      <PhoneInput
        value={phone.value}
        onChange={phone.setValue}
        containerClass={['input--monospaced-control', phone.invalid ? 'input--invalid' : ''].join(' ')}
        specialLabel='Número de Teléfono'
        placeholder=''
      />
    </>
  );
}
