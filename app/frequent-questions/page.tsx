'use client';

import { Header } from '@/stories/header/Header';
import './page.css';

export default function CheckoutPage() {
  return (
    <>
      <Header hideWaitingList />

      <div className='container'>
        <h1>
          Preguntas Frecuentes
        </h1>
      </div>
    </>
  );
}
