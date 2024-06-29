'use client';

import { cardFormaters, phoneFormater } from './lib/formaters';
import { cardValidators, emailErrors, phoneErrors } from './lib/validators';
import { Input, useInputState } from '../../../stories/input/Input';
import { Button } from '../../../stories/button/Button';
import { CardProvider } from './lib/card-providers';
import { useEffect, useRef, useState } from 'react';
import { getRandomNumber, objMap } from '../(lib)/utils';

import PhoneInput from 'react-phone-input-2';
import './cardForm.css';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import Modal from './Modal';

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

  const [processing, setProcessing] = useState(false);
  const [modalShown, setModalShown] = useState(false);

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

  async function onSubmit() { 
    if (hasErrors()) return;

    setProcessing(true);
    setModalShown(true);
    setTimeout(() => setProcessing(false), 
      getRandomNumber(5000, 10000) // 5s >=< 10s
    );

    await createRegisterTry({
      email: email.value,
      cardProvider: cardProvider!.name,
      cardHolder: card.holder.value,
      phone: phone.value,
    });
  }

  return (
    <>
      <Modal 
        processing={processing} 
        setShown={setModalShown}
        shown={modalShown} 
      />

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

      <button disabled={hasErrors()} 
        onClick={onSubmit}
      >
        Procesar
      </button>
    </>
  );
}
