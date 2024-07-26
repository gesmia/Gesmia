'use client';

import { Header } from '@/stories/header/Header';
import './page.css';

export default function CheckoutPage() {
  return (
    <>
      <Header hideWaitingList />

      <div className='info-container'>
        <h1>Preguntas Frecuentes</h1>
        <div className='faq'>
          <h2>¿Qué es Thappie?</h2>
          <p>
            Thappie es una aplicación de seguridad personal diseñada para mejorar la seguridad de los usuarios a través de funcionalidades como seguimiento en tiempo real, alertas SOS, geofencing y reportes de incidentes.
          </p>
          <h2>¿Cuáles son las características principales de Thappie?</h2>
          <p>
            - Registro y verificación por SMS<br />
            - Configuración inicial y administración de contactos de emergencia<br />
            - Seguimiento y localización en tiempo real<br />
            - Historial de ubicaciones<br />
            - Notificaciones de zonas peligrosas y seguras<br />
            - Alertas SOS<br />
            - Reporte de incidentes<br />
            - Configuración de perfil
          </p>
          <h2>¿Cómo puedo cancelar mi suscripción?</h2>
          <p>
            Puedes cancelar tu suscripción enviando un correo o WhatsApp a nuestro soporte con el número/email con el cual te registraste en la app y canceleramos tu suscripción de forma eficaz y rápida.
          </p>
          <h2>¿Cuánto cuesta usar Thappie?</h2>
          <p>
            - Tarifa individual: $3.99 USD por usuario al mes. <br />
            - Plan familiar: $9.99 USD al mes por cada 4 usuarios y $2.29 USD por usuario adicional (límite de 10 usuarios).<br />
            - Contratos para empresas y early adopters también están disponibles. <br />
            Pueden cambiar las tarifas con previo aviso a tu cuenta e email de forma progresiva con tiempo de anticipación de 30 días.
          </p>
          <h2>¿Cómo me registro en Thappie?</h2>
          <p>
            Descarga la aplicación y sigue estos pasos:<br />
            1. Introduce tu número de teléfono y correo electrónico.<br />
            2. Verifica tu cuenta mediante un código SMS.<br />
            3. Completa tu perfil y configura tus contactos de emergencia. <br/>

            Si aún no está disponible puedes entrar al pre-registro
          </p>
          <h2>¿Qué es una alerta SOS y cómo funciona?</h2>
          <p>
            Una alerta SOS envía una notifición bullisiosa y precisa a tus contactos de emergencia y a personas cercanas en caso de peligro. Puedes activarla mediante un botón en la aplicación o un dispositivo externo.
          </p>
          <h2>¿Qué dispositivos son compatibles con Thappie?</h2>
          <p>
            Thappie es compatible con dispositivos Android e iOS. También ofrecemos un dispositivo de hardware llamado Tapp que se integra con la aplicación para mayor seguridad.
          </p>
          <h2>¿Cómo funciona el seguimiento en tiempo real?</h2>
          <p>
            Puedes ver la ubicación en tiempo real de tus contactos en un mapa dentro de la aplicación. La ubicación se actualiza periódicamente para mantenerte informado.
          </p>
          <h2>¿Qué tan segura es la información que proporciono a Thappie?</h2>
          <p>
            Thappie utiliza protocolos de cifrado robustos y medidas estrictas de privacidad para proteger la información de los usuarios.
          </p>
          <h2>¿Cómo puedo reportar un incidente?</h2>
          <p>
            Accede a la sección de mapas en la aplicación, selecciona la opción para reportar un incidente, y proporciona los detalles necesarios.
          </p>
          <h2>¿Thappie funciona en mi país?</h2>
          <p>
            Thappie está disponible en múltiples países, incluyendo España, México, Brasil, Argentina, Centro America y varios más en América Latina y Europa Occidental.
          </p>
          <h2>¿Qué debo hacer si tengo problemas con la aplicación?</h2>
          <p>
            Puedes contactar al soporte de Thappie a través de la sección de ayuda en la aplicación o enviando un correo electrónico a nuestro equipo de soporte. (soporte@thappie.com)
          </p>
        </div>
      </div>
    </>
  );
}
