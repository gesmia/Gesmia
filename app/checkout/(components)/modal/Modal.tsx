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
             Tu cueta de thappie está reservada
            </h2>
            <div className="modal__text">
              Tu cuenta de Thappie ha sido creada, pronto se te notificará cuando Thappie sea lanzado. No se te cobrará antes sin ser notificado.
            </div>
            <button onClick={() => setShown?.(false)}>
              Cerrar
            </button>
          </>
        )
      }
    </dialog>
  )
}