'use client';

import CardForm, { useMainForm } from './(components)/card-form/CardForm';
import { Header } from '@/stories/header/Header';
import { getRandomNumber } from './(lib)/utils';
import Stepper from './(components)/stepper/Stepper';
import { useState } from 'react';

import './page.css';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import Modal from './(components)/modal/Modal';
import PhoneInput from './(components)/phone-input/PhoneInput';
import { Input } from '@/stories/input/Input';
import EmailInput from './(components)/email-input/EmailInput';

export default function CheckoutPage() {
  const [cardFormState, setCardFormState] = useState<unknown>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const mainForm = useMainForm();

  const [processing, setProcessing] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  async function onSubmit() {
    if (mainForm.hasErrors()) return;

    setProcessing(true);
    setModalShown(true);
    setTimeout(() => setProcessing(false),
      getRandomNumber(5000, 10000) // 5s >=< 10s
    );

    await createRegisterTry({
      email: mainForm.email.value,
      cardProvider: mainForm.cardProvider!.name,
      cardHolder: mainForm.card.holder.value,
      phone: mainForm.phone.value,
    });
  }

  return (
    <>
      <Modal
        processing={processing}
        setShown={setModalShown}
        shown={modalShown}
      />
      <Header hideWaitingList />

      <div style={{ marginInline: '0.5rem' }}>
        <Stepper
          currentStep={currentStep}
          steps={[
            {
              label: 'Información de contacto',
              component: (
                <>
                  <>
                    <Input
                      label="Nombre Completo"
                      id="Nombre Completo"
                      hints={
                        <>
                          <span>Nombre y Apellido</span>
                        </>
                      }
                    />
                    <EmailInput email={mainForm.email} />
                    <PhoneInput phone={mainForm.phone} />
                  </>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span></span>
                    <button className='btn btn--primary' onClick={() => setCurrentStep(1)}>
                      Siguiente
                    </button>
                  </div>
                </>
              )
            },
            {
              label: 'Información de pago',
              component: (
                <>
                  <CardForm {...mainForm} />
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <button className='btn' onClick={() => setCurrentStep(0)}>
                        Atras
                      </button>
                      <button className='btn btn--primary' onClick={() => setCurrentStep(1)}>
                        Siguiente
                      </button>
                    </div>
                  </div>
                </>
              )
            },
          ]}
        />

        <br />

      </div>

    </>
  );
}
