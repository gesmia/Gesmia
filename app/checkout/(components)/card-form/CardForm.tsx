'use client';

import { digitsOnly } from '../../(lib)/utils';
import { Input } from '../../../../stories/input/Input';
import { useMainForm } from '../lib/use-main-form';
import './cardForm.css';

import AMEX from '../../../../public/cards/AMEX.png';
import DISCOVER from '../../../../public/cards/DISCOVER.png';
import MASTERCARD from '../../../../public/cards/MASTERCARD.png';
import VISA from '../../../../public/cards/VISA.png';

import Image from 'next/image';

export * from '../lib/use-main-form';

type CardFormProps = ReturnType<typeof useMainForm>;

const getCardImage = (provider?: { name: string } | null) => {
  if (!provider) return null;
  switch (provider.name) {
    case 'Amex':
      return <Image width={26} src={AMEX} alt="AMEX" />;
    case 'Discover':
      return <Image width={26} src={DISCOVER} alt="DISCOVER" />;
    case 'Mastercard':
      return <Image width={26} src={MASTERCARD} alt="MASTERCARD" />;
    case 'Visa':
      return <Image width={26} src={VISA} alt="VISA" />;
    default:
      return null;
  }
};

export default function CardForm({
  card, cardProvider
}: Pick<CardFormProps, 'card' | 'cardProvider'>) {
  const ErrorOn = (v: boolean, e?: any) => (
    v && e ? (
      <span style={{ color: '#F77', textAlign: 'end' }}>
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
        customControl={({ value, onChange }) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
         {getCardImage(cardProvider)}
            <input value={value} onChange={onChange} />
          </div>
        )}
        hints={
          <>
            <span>Visa, Mastercard, Discover</span>
            {ErrorOn(card.number.value?.length > 8, card.number.errors)}
          </>
        }
      />

      <div className='checkout-card-row'>
        <Input {...card.expiration} label="Expiración" id="Expiración"
          className='input--monospaced-control checkout-input--expiration'
          inputProps={{
            maxLength: 5,
            placeholder: 'MM/YY',
          }}
          customControl={({ value, setValue }) => {
            const setVal = (m:string, y:string) => {
              setValue?.(`${m}/${y}`);
            }

            let [month = '00', year = '00'] = (value || '').split('/');
            month = digitsOnly(month).padEnd(2, '0');
            year = digitsOnly(year).padEnd(2, '0');
            
            return (
              <>
                <select value={month} id="Expiración"
                  className={month === '00' ? 'placeholder' : ''}
                  onChange={(e) => setVal(e.target.value, year)}
                >
                  <option value="00" hidden>00</option>
                  {Array.from({ length: 12 }, (_, i) => {
                    const index = (i+1).toString().padStart(2, '0');
                    return <option key={index} value={index}>{index}</option>
                  })}
                </select>
                <span>/</span>
                <select value={year} 
                  className={year === '00' ? 'placeholder' : ''}
                  onChange={(e) => setVal(month, e.target.value)}
                >
                  <option value="00" hidden>00</option>
                  {Array.from({ length: 11 }, (_, i) => {
                    const index = (i+24).toString().padStart(2, '0');
                    return <option key={index} value={index}>{index}</option>
                  })}
                </select>
              </>
            )
          }}
          hints={(
            <>
              <span>MM/YY</span>
              {ErrorOn(card.expiration.value?.length > 2, card.expiration.errors)}
            </>
          )}
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
