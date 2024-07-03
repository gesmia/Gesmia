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
      <Input
        {...fullName}
        label="Nombre Completo"
        id="Nombre Completo"
        hints={
          <>
            <span>Nombre y Apellido</span>
            {ErrorOn(fullName.value?.length > 0, fullName.errors)}
          </>
        }
      />
      <EmailInput email={email} />
      <PhoneInput phone={phone} />

      <p className='simple-text simple-text--center'>
        Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Nisi distinctio ab praesentium quisquam
        mollitia, voluptate culpa iusto dolore facere, quos
        quod. Natus numquam facere esse, rerum officia a
        repellat.
      </p>
    </>
  );
}
