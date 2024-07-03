'use client';

import { Input } from '../../../../stories/input/Input';
import { useMainForm } from '../lib/use-main-form';
import './cardForm.css';

export * from '../lib/use-main-form';

type CardFormProps = ReturnType<typeof useMainForm>;
export default function CardForm({
  card,
}: Pick<CardFormProps, 'card'>) {
  const ErrorOn = (v: boolean, e?: any) => (
    v ? (
      <span style={{ color: 'red', textAlign: 'end' }}>
        {e}
      </span>
    ) : null
  )

  return (
    <>
      <Input {...card.holder} label="Nombre del Titular" id="Nombre del Titular"
        className='input--monospaced-control'
        hints={
          <>
            <span>Nombre como aparece en la tarjeta</span>
            {ErrorOn(card.holder.value?.length > 0, card.holder.errors)}
          </>
        }
      />

      <Input {...card.number} label="Número de Tarjeta" id="Número de Tarjeta"
        className='input--monospaced-control'
        inputProps={{
          placeholder: '0000 0000 0000 0000',
        }}
        hints={
          <>
            <span>Visa, Mastercard, Discover</span>
            {ErrorOn(card.number.value?.length > 8, card.number.errors)}
          </>
        }
      />

      <div className='checkout-card-row'>
        <Input {...card.expiration} label="Expiración" id="Expiración"
          className='input--monospaced-control'
          inputProps={{
            maxLength: 5,
            placeholder: 'MM/YY',
          }}
          hints={
            <>
              <span>Mes/Año</span>
              {ErrorOn(card.expiration.value?.length > 2, card.expiration.errors)}
            </>
          }
        />

        <Input {...card.cvv} label="CVV" id="CVV"
          className='input--monospaced-control'
          inputProps={{
            maxLength: 3,
            placeholder: '000',
          }}
          hints={
            <>
              <span>Código de seguridad</span>
              {ErrorOn(card.cvv.value?.length > 0, card.cvv.errors)}
            </>
          }
        />
      </div>
    </>
  );
}
