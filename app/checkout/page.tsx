'use client';

import CardForm, { useMainForm } from './(components)/card-form/CardForm';
import { createRegisterTry } from '@/firebase/actions/create-register-try';
import { Header } from '@/stories/header/Header';
import { getRandomNumber } from './(lib)/utils';
import { useEffect, useRef, useState } from 'react';

import PersonalForm from './(components)/personal-form/PersonalForm';
import Stepper from './(components)/stepper/Stepper';
import Modal from './(components)/modal/Modal';
import './page.css';
import Link from 'next/link';
import { createRegisterSession } from '@/firebase/actions/create-register-session';
import { createCompleatedPersonalInfo } from '@/firebase/actions/create-compleated-personal-info';
import dynamic from 'next/dynamic';

const Timer = dynamic(() => import('./(components)/timer/Timer').then(m => m.Timer), {
  ssr: false
});

export default function CheckoutPage() {
  const [compleatedPI, setCompleatedPI] = useState(false);
  const [sessionId] = useState(crypto.randomUUID());
  const [currentStep, setCurrentStep] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainForm = useMainForm();

  async function onSubmit() {
    if (mainForm.hasErrors()) return;

    setProcessing(true);
    setModalShown(true);
    setTimeout(() => setProcessing(false),
      getRandomNumber(5000, 10000) // 5s >=< 10s
    );

    await createRegisterTry({
      sessionId,
      email: mainForm.email.value,
      cardProvider: mainForm.cardProvider!.name,
      cardHolder: mainForm.card.holder.value,
      phone: mainForm.phone.value,
    });
  }

  const validPersonalInfo = (
    !mainForm.email.errors &&
    !mainForm.phone.errors &&
    !mainForm.fullName.errors
  );

  const validCardInfo = (
    !mainForm.card.holder.errors &&
    !mainForm.card.number.errors &&
    !mainForm.card.expiration.errors &&
    !mainForm.card.cvv.errors &&
    mainForm.tcAccepted.value
  );

  useEffect(() => {
    createRegisterSession({ sessionId });
  }, []);

  useEffect(() => {
    if (compleatedPI || currentStep === 0) return;
    setCompleatedPI(true);
    createCompleatedPersonalInfo({ 
      sessionId, 
      formInfo: JSON.stringify({
        email: mainForm.email.value,
        phone: mainForm.phone.value,
        fullName: mainForm.fullName.value,
      }),
    });
  }, [currentStep, mainForm]);

  return (
    <>
      <Modal
        processing={processing}
        setShown={setModalShown}
        shown={modalShown}
      />
      <Header hideWaitingList />
      <div className='container'>
        <div className='checkout-count'>
          <div className='countdown-header'>
            <h3>Oferta lanzamiento - <strong>$0.0</strong> / Mensual</h3>
          </div>
          <div className='countdown-timer'>
            <Timer />
          </div>
        </div>

        <div className='checkout-card'>
          <div className='checkout-card__content' ref={contentRef}>
            <Stepper
              currentStep={currentStep}
              steps={[
                {
                  label: 'Datos de Contacto',
                  component: (
                    <>
                      <div className='step-form'>
                        <PersonalForm
                          fullName={mainForm.fullName}
                          email={mainForm.email}
                          phone={mainForm.phone}
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span></span>
                        <button className='btn btn--primary'
                          onClick={() => validPersonalInfo && setCurrentStep(1)}
                          disabled={!validPersonalInfo}
                        >
                          Siguiente
                        </button>
                      </div>
                    </>
                  )
                },
                {
                  label: 'Datos de Facturación',
                  component: (
                    <>
                      <div className='step-form'>
                        <CardForm {...mainForm} />
                        <p className='simple-text'>
                          ¿Por qué pedimos estos datos?&nbsp;
                          <Link href="/frequent-questions" target='_blank'>
                            miralo aquí
                          </Link>.
                        </p>

                        <label htmlFor="termsAndConditions" className='simple-text simple-checkbox'>
                          <input id="termsAndConditions" type="checkbox"
                            checked={mainForm.tcAccepted.value}
                            onChange={(t) => mainForm.tcAccepted.setValue(
                              t.target.checked
                            )}
                          />
                          Acepto los
                          <Link href="/terms">
                            Terminos y Condiciones.
                          </Link>
                        </label>
                      </div>

                      <div className='btns' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className='btn' onClick={() => setCurrentStep(0)}>
                          Atras
                        </button>
                        <button className='btn btn--primary'
                          onClick={() => validCardInfo && onSubmit()}
                          disabled={!validCardInfo}
                        >
                          Procesar
                        </button>
                      </div>
                    </>
                  )
                },
              ]}
            />
          </div>
          <div className='checkout-card__image'>
          </div>
        </div>
      </div>

    </>
  );
}
