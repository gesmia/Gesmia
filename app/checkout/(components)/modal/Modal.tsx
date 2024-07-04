'use client'

import { useEffect, useRef } from "react"
import './modal.css'

interface Props {
  processing?: boolean;
  setShown?(v: boolean): void;
  shown: boolean;
}
export default function Modal({ shown, processing, setShown }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (shown) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [ref, shown])

  return (
    <dialog ref={ref} className="modal">
      {processing
        ? (
          <>
            <h2 className="modal__title">
              Prosesando...
            </h2>
            <div className="modal__spinner">
              <div className="modal__spinner--inner">

              </div>
            </div>
          </>
        )
        : (
          <>
            <h2 className="modal__title">
              Fallo en la transacción!
            </h2>
            <div className="modal__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ipsum accusantium sapiente molestiae quibusdam cumque, 
              soluta minima debitis illo velit architecto consectetur,
              delectus officia eaque repellendus sint excepturi sit 
              maxime odit!
            </div>
            <div style={{ textAlign: 'end' }}>
              <button className="btn btn--primary" onClick={() => setShown?.(false)}>
                Cerrar
              </button>
            </div>
          </>
        )
      }
    </dialog>
  )
}