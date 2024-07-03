'use client';

import { cardValidators, emailErrors, phoneErrors } from './lib/validators';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import { cardFormaters, phoneFormater } from './lib/formaters';
import { useInputState } from '../../../stories/input/Input';
import { getRandomNumber, objMap } from '../(lib)/utils';
import { CardProvider } from './lib/card-providers';
import { useState } from 'react';

export function useCardForm() {
  const [cardProvider, setCardProvider] = useState<CardProvider | null>(null);
  const phone = useInputState('+', phoneFormater, phoneErrors);
  const email = useInputState('', null, emailErrors);
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
    setModalShown,
    getErrors,
    hasErrors,
  };
}
