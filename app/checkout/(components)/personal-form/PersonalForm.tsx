'use client';

import EmailInput from "../email-input/EmailInput";
import PhoneInput from "../phone-input/PhoneInput";
import { useMainForm } from "../lib/use-main-form";
import { Input } from "@/stories/input/Input";

type CardFormProps = ReturnType<typeof useMainForm>;
export default function PersonalForm({
  email, phone, fullName
}: Pick<CardFormProps, 'email' | 'phone' | 'fullName'>) {
  const ErrorOn = (v: boolean, e?: any) => (
    v && e ? (
      <span style={{ color: '#F77', textAlign: 'end' }}>
        {e}
      </span>
    ) : null
  )

  return (
    <>

      <h4 className='title-head'>
        Gracias por tu interés en Thappie. Te garantizamos acceso exclusivo a los primeros 3 meses gratis una vez que la aplicación sea lanzada. ¡Te notificaremos cuando estemos listos para el lanzamiento! <u>No se te cobrará nada hoy.</u>
      </h4>

      <br />

      <Input
        {...fullName}
        label="Nombre"
        id="Nombre Completo"
        hints={
          <>
          <span>Nombre y Apellido</span>
            {ErrorOn(fullName.value?.length > 0, fullName.errors)}
          </>
        }
      />
      <PhoneInput phone={phone} />
      <EmailInput email={email} />
    </>
  );
}
