'use client';

import { useMainForm } from '../lib/use-main-form';
import PhoneInput2 from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import './phoneInput.css';

type CardFormProps = ReturnType<typeof useMainForm>;
export default function PhoneInput({ phone }: { phone: CardFormProps['phone'] }) {
  const ErrorOn = (v: boolean, e?: any) => (
    v ? (
      <span style={{ color: 'red', textAlign: 'end' }}>
        {e}
      </span>
    ) : null
  )

  return (
    <>
      <PhoneInput2
        value={phone.value}
        onChange={phone.setValue}
        containerClass={['input--monospaced-control', phone.invalid ? 'input--invalid' : ''].join(' ')}
        specialLabel='Número de Teléfono'
        /* placeholder='' */
        country='us'
      />
    </>
  );
}
