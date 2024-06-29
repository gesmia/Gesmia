'use client';

import { useState } from 'react';
import CardForm from './(components)/CardForm';
import './page.css';

export default function CheckoutPage() {
  const [cardFormState, setCardFormState] = useState<unknown>(null);
  return (
    <>
      <CardForm onChange={setCardFormState} />
      <br/>
      <pre>{JSON.stringify(cardFormState, null, 2)}</pre>
    </>
  );
}
