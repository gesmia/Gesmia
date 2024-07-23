'use client';

import { Header } from '@/stories/header/Header';
import './page.css';

export default function CheckoutPage() {
  return (
    <>
      <Header hideWaitingList />

      <div className='container'>
        <h1>Términos y Condiciones</h1>
        <div className='terms'>
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar la aplicación Thappie, usted acepta y está de acuerdo con estos Términos y Condiciones. Si no está de acuerdo con estos términos, no debe utilizar la aplicación.
          </p>

          <h2>2. Uso de la Aplicación</h2>
          <p>
            Thappie se proporciona para su uso personal y no comercial. No debe utilizar la aplicación para ningún propósito ilegal o no autorizado.
          </p>

          <h2>3. Registro y Seguridad de la Cuenta</h2>
          <p>
            Usted es responsable de mantener la confidencialidad de su información de inicio de sesión y de cualquier actividad que ocurra bajo su cuenta. Notifique inmediatamente a Thappie de cualquier uso no autorizado de su cuenta.
          </p>

          <h2>4. Privacidad</h2>
          <p>
            Su privacidad es importante para nosotros. Por favor, revise nuestra <a href="#privacy-policy">Política de Privacidad</a> para obtener información sobre cómo recopilamos, utilizamos y divulgamos su información personal.
          </p>

          <h2>5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, marcas comerciales, logotipos y datos de Thappie son propiedad de sus respectivos propietarios. No se otorga ningún derecho o licencia para usar cualquiera de estas marcas sin el permiso previo por escrito del propietario.
          </p>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>
            Thappie no será responsable por cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar la aplicación.
          </p>

          <h2>7. Modificaciones a los Términos</h2>
          <p>
            Thappie se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en la aplicación.
          </p>

          <h2>8. Terminación</h2>
          <p>
            Thappie puede suspender o terminar su acceso a la aplicación en cualquier momento, sin previo aviso, por cualquier razón, incluyendo pero no limitado a una violación de estos Términos y Condiciones.
          </p>

          <h2>9. Ley Aplicable</h2>
          <p>
            Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del país en el que se ofrece la aplicación, sin dar efecto a ningún principio de conflictos de leyes.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos a través de la sección de ayuda en la aplicación o enviando un correo electrónico a <a href="mailto:soporte@thappie.com">soporte@thappie.com</a>.
          </p>
        </div>

        <h1 id="privacy-policy">Política de Privacidad</h1>
        <div className='privacy'>
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información que usted nos proporciona directamente, como su nombre, correo electrónico, número de teléfono y detalles de contacto de emergencia.
          </p>

          <h2>2. Uso de la Información</h2>
          <p>
            Utilizamos la información para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted.
          </p>

          <h2>3. Compartir la Información</h2>
          <p>
            No compartimos su información personal con terceros, excepto cuando sea necesario para cumplir con la ley, proteger nuestros derechos, o en caso de emergencia.
          </p>

          <h2>4. Seguridad de la Información</h2>
          <p>
            Implementamos medidas de seguridad para proteger su información personal contra el acceso no autorizado y la divulgación.
          </p>

          <h2>5. Sus Derechos</h2>
          <p>
            Usted tiene el derecho de acceder, corregir o eliminar su información personal. Puede ejercer estos derechos contactándonos en <a href="mailto:soporte@thappie.com">soporte@thappie.com</a>.
          </p>

          <h2>6. Cambios a esta Política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política en nuestra aplicación.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de la sección de ayuda en la aplicación o enviando un correo electrónico a <a href="mailto:soporte@thappie.com">soporte@thappie.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
