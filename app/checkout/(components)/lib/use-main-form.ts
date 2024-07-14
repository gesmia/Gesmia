'use client';

import { cardValidators, emailErrors, phoneErrors } from './validators';
import { cardFormaters, phoneFormater } from './formaters';
import { useInputState } from '../../../../stories/input/Input';
import { CardProvider } from './card-providers';
import { objMap } from '../../(lib)/utils';
import { useState } from 'react';

export function useMainForm() {
  const [cardProvider, setCardProvider] = useState<CardProvider | null>(null);
  const phone = useInputState('+', phoneFormater, phoneErrors);
  const email = useInputState('', null, emailErrors);
  const tcAccepted = useInputState(false, null);
  const fullName = useInputState('', null, (value) => {
    return value?.length < 5 ? 'Debe ingresarse al menos 5 caracteres' : null
  });


  const card = {
    holder: useInputState('', null, cardValidators.holderErrors),
    number: useInputState('', cardFormaters.number(setCardProvider), cardValidators.numberErrors),
    expiration: useInputState('', cardFormaters.expiration(), cardValidators.expirationErrors),
    cvv: useInputState('', cardFormaters.cvv(), cardValidators.cvvErrors),
  };

  const [processing, setProcessing] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  function getErrors() {
    return {
      phone: phone.errors,
      email: email.errors,
      ...objMap(card, (v) => v.errors),
    };
  }

  function hasErrors() {
    return Object.values(getErrors()).some(Boolean);
  }

  return {
    cardProvider,
    setCardProvider,
    phone,
    email,
    card,
    processing,
    modalShown,
    fullName,
    tcAccepted,
    setModalShown,
    getErrors,
    hasErrors,
  };
}
