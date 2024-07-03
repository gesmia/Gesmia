'use client';

import { Input } from '../../../../stories/input/Input';
import { useMainForm } from '../lib/use-main-form';

type CardFormProps = ReturnType<typeof useMainForm>;
export default function EmailInput({ email }: { email: CardFormProps['email'] }) {
  const ErrorOn = (v: boolean, e?: any) => (
    v && e ? (
      <span style={{ color: '#F77', textAlign: 'end' }}>
        {e}
      </span>
    ) : null
  )

  return (
    <>
      <Input {...email} label="Correo Electrónico" id="Correo Electrónico"
        className='input--monospaced-control'
        inputProps={{
          type: 'email',
        }}
        hints={
          <>
            <span>Correo al que se envia el comprobante</span>
            {ErrorOn(email.value?.length > 0, email.errors)}
          </>
        }
      />
    </>
  );
}
