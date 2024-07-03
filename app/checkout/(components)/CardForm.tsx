'use client';

import { Input } from '../../../stories/input/Input';
import { useCardForm } from './CardForm.hooks';
import PhoneInput from 'react-phone-input-2';
import './cardForm.css';

export * from './CardForm.hooks';

type CardFormProps = ReturnType<typeof useCardForm>;
export default function CardForm({ 
  card,
  email,
  phone,
}: CardFormProps) {
  return (
    <>
      <Input {...card.holder} label="Nombre del Titular" id="Nombre del Titular"
        className='input--monospaced-control'
      />

      <Input {...card.number} label="Número de Tarjeta" id="Número de Tarjeta"
        className='input--monospaced-control'
        inputProps={{
          placeholder: '0000 0000 0000 0000',
        }}
      />

      <div className='checkout-card-row'>
        <Input {...card.expiration} label="Expiración" id="Expiración"
          className='input--monospaced-control'
          inputProps={{
            maxLength: 5,
            placeholder: 'MM/YY',
          }}
        />

        <Input {...card.cvv} label="CVV" id="CVV"
          className='input--monospaced-control'
          inputProps={{
            maxLength: 3,
            placeholder: '000',
          }}
        />
      </div>


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
