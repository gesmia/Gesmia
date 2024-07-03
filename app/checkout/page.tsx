'use client';

import CardForm, { useCardForm } from './(components)/CardForm';
import { Header } from '@/stories/header/Header';
import { getRandomNumber } from './(lib)/utils';
import Stepper from './(components)/Stepper';
import { useState } from 'react';

import './page.css';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import Modal from './(components)/Modal';

export default function CheckoutPage() {
  const [cardFormState, setCardFormState] = useState<unknown>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const mainForm = useCardForm();
  
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
      <Header hideWaitingList/>

      <div style={{ marginInline: '1rem' }}>
        <Stepper 
          currentStep={currentStep}
          steps={[
            {
              label: 'Información de contacto',
              component: (
                <>
                  <CardForm {...mainForm} />
                  <div>
                    <button>
                      Back
                    </button>
                    <button onClick={() => setCurrentStep(1)}>
                      Next
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
                    <button onClick={() => setCurrentStep(0)}>
                      Back
                    </button>
                    <button>
                      Next
                    </button>
                  </div>
                </>
              )
            },
          ]}
        />

        
      </div>

      {/* <br/>
      <pre>{JSON.stringify(cardFormState, null, 2)}</pre> */}
    </>
  );
}
