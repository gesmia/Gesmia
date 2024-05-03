'use client'

import { InformationWithContent } from '@/stories/informationWithContent/InformationWithContent'
import { Feauture } from "@/stories/feature/feature";
import { Comment } from "@/stories/comment/Comment";

import image_step_one from '@/public/steps/image-one.svg'
import image_step_two from '@/public/steps/image-two.svg'
import image_step_three from '@/public/steps/image-three.svg'

import imageM_step_one from '@/public/steps/IMG1m.svg'
import imageM_step_two from '@/public/steps/IMG2m.svg'
import imageM_step_three from '@/public/steps/IMG3m.svg'

import tapp_device from '@/public/device/image_tapp.png'
import tappCollar from '@/public/head/tapp_collar.jpg'
import { VideoEmbed } from "@/stories/video/video";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "@/stories/header/Header";
import { Button } from "@/stories/button/Button";
import { Footer } from "@/stories/footer/Footer";
import pattern from '@/public/head/Pattern.png'
import { Price } from "@/stories/prices/Price";
import Image from "next/image";
import './page.css'

const clients = [
  'catita',
  'matthew'
]

const comments = [
  { id: 5, name: 'Camila', text: 'Estoy emocionada por probar Thappie para sentirme más segura en mi ciudad.', date: 'Mayo' },
  { id: 6, name: 'Andrés', text: 'Como padre, la seguridad de mis hijos es lo más importante. Ansío la llegada de esta app.', date: 'Julio'},
  { id: 7, name: 'Sofía', text: 'Vivo sola y a menudo vuelvo tarde del trabajo. Thappie suena como la solución perfecta.', date: 'Diciembre'},
  { id: 8, name: 'Juan', text: 'Espero que Thappie me ofrezca la tranquilidad que necesito cuando estoy fuera de casa.', date: 'Julio' },
  { id: 9, name: 'Luisa', text: 'Estoy interesada en las funciones de geolocalización de Thappie. ¡No puedo esperar para usarla!', date: 'Mayo' },
  { id: 10, name: 'Carlos', text: 'La seguridad es una prioridad para mí cuando viajo por trabajo. Thappie podría ser de gran ayuda.', date: 'Agosto' },
  { id: 11, name: 'Elena', text: 'Me gusta la idea de una app que me ayude a sentirme segura en cualquier lugar.', date: 'Agosto' },
  { id: 12, name: 'Tomás', text: 'Esperando ansiosamente la beta de Thappie para probar sus características de seguridad.', date: 'Enero' },
  { id: 13, name: 'Mariana', text: 'Siento que esta app podría cambiar la forma en que manejo mi seguridad personal diariamente.', date: 'Mayo' },
  { id: 14, name: 'Roberto', text: 'Como ciclista, necesito una solución que me proteja en las calles. Thappie suena prometedora.', date: 'Marzo' }
];

const features = [
  { number: 1, title: 'Diseño Innovador', description: 'Nuestra aplicación combina tecnología de vanguardia con un diseño intuitivo, asegurando que la seguridad personal nunca sea complicada.' },
  { number: 2, title: 'Rápido y Eficaz', description: 'Recibe y envía alertas de emergencia con la rapidez que solo nuestra tecnología te puede ofrecer.' },
  { number: 3, title: 'Tu Familia, Siempre Contigo', description: 'Nuestra aplicación mantiene a tu familia unida y segura, sin importar dónde estén.' },
];

const prices = [
  {
    type: "standard",
    value: 0,
    label: "GRATIS",
    buttonLabel: "Unirme",
    items: [
      "Solo un usuario",
      "Mapa con zonas riesgosas",
      "Alerta de Emergencia a contactos",
      "Historial de Ubicaciones",
      "SOS silencioso"
    ]
  },
  {
    type: "family",
    value: 10.99,
    label: "Por cada 5 usuarios / mes",
    buttonLabel: "Unirme",
    items: [
      "Sin limite de usuarios",
      "Todo lo del plan individual",
      "Creación de circulos de usuarios",
      "Conexión con Thapp",
      "Monitero de usuarios y alertas"
    ]
  }
];

export default function Home() {

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (windowWidth === null) {
    return <div> </div>;
  }

  const isMobile = windowWidth <= 768;

  const image1 = isMobile ? imageM_step_one : image_step_one;
  const image2 = isMobile ? imageM_step_two : image_step_two;
  const image3 = isMobile ? imageM_step_three : image_step_three;

  return (
    <>
      {/* header */}

      <Header />

      {/* head */}
      <div className="content-wrapper">
        <section className="head">
          <Image src={pattern} alt={"pattern decoration wallpaper"} className="pattern" />
          <h1 className="title">Una app que puede <br /> salvarte la vida</h1>
          <p className="subtitle">Conecta en tiempo real con tu familia, asegura su ubicación y acciona <br /> alertas
            de emergencia con un click.</p>

          <Button size="large" label="Unirme a la lista de espera" />

          <div className="content">
            <div className="app">
              <div>
                <VideoEmbed url={"/videos/headmp4.mp4"} height={"400px"} />
              </div>
            </div>
            <div className="tapp">
              <Image src={tappCollar} alt={"pattern decoration wallpaper"} className="tapp-image" />
            </div>
          </div>
        </section>

        {/* features */}
        <section className="features">
          {features.map(feature => (
            <Feauture key={feature.number} number={feature.number} title={feature.title} description={feature.description} />
          ))}
        </section>

        {/* steps */}
        <section className="steps">
          <h2>3 pasos para mantener <br />tu familia más segura</h2>
          <p>Pero antes debes entrar a nuestra lista de espera</p>
          <div>
            <div className="steps-lines">
              <span className="step-line" id="line1">
              </span>
              <span className="step-line" id="line2">
              </span>
              <span className="step-line" id="line3">
              </span>
            </div>

            <div className="steps-images">
              <div className="step-image-container" id="image1">
                <Image src={image1} alt={"pattern decoration wallpaper"} className="step-image" />
              </div>
              <div className="step-image-container" id="image2">
                <Image src={image2} alt={"pattern decoration wallpaper"} className="step-image" />
              </div>
              <div className="step-image-container" id="image3">
                <Image src={image3} alt={"pattern decoration wallpaper"} className="step-image" />
              </div>
            </div>

          </div>
        </section>

        {/* tapp */}
        <section className="tapp-device">
          <h2>Seguridad al Alcance de tu Mano</h2>
          <p>Un dispositivo portátil y discreto, mejora tu seguridad permitiéndote enviar alertas <br /> de emergencia con un clic, conectándote rápidamente con servicios de emergencia y familiares.</p>

          {/* <div className="device-styles">
            <div className="style two">
              Llavero
            </div>
            <div className="style three">
              Joyería
            </div>
          </div> */}

          <div className="device_image">
            <Image src={tapp_device} alt={"pattern decoration wallpaper"} className="step-image" />
          </div>
        </section>

        {/* image and descriptions */}
        <section className="imageAndContent">
          <InformationWithContent type={1} title={"Toda tu familia siempre presente"} description={"Mantén a tu familia conectada y segura en todo momento con Thappie, que utiliza tecnología de vanguardia para ofrecer localización en tiempo real y comunicación directa en situaciones de emergencia."} label={"Get the App"}>
              <VideoEmbed url={"/videos/contentmp4.mp4"} height={"100%"} />
          </InformationWithContent>

          <InformationWithContent type={2} title={"Comentarios de personas que usan Thappie"} description={"Explora el entusiasmo y las expectativas de futuros usuarios que están listos para adoptar Thappie como su solución de seguridad personal, destacando su potencial para mejorar la tranquilidad y la seguridad diaria."} label={"Leer más"}>
            <div className="comments-animation">
              <div className="comments-animation-inner">
                {comments.map(comment => (
                  <Comment key={comment.id} name={comment.name} label={comment.text} date={comment.date} image={""} />
                ))}
                {comments.map(comment => (
                  <Comment key={`repeat-${comment.id}`} name={comment.name} label={comment.text} date={comment.date} image={""} />
                ))}
              </div>
            </div>
          </InformationWithContent>

        </section>

        {/* prices */}
        <section className="pricesBox">
          <h4>Rediseña tu sentido de seguridad</h4>
          <label className="subtitle">Descubre cómo Thappie puede hacer que tú y tus seres queridos vivan más tranquilos.</label>

          <div className="prices">

            {prices.map((price, index) => (
              <Price
                key={index}
                type={price.type}
                value={price.value}
                label={price.label}
                buttonLabel={price.buttonLabel}
                items={price.items}
              />
            ))}
          </div>
        </section>

        {/* trusted by */}
        {/* <section>
          <h4>Trusted by the World's Best Hardware Teams</h4>
          {
            clients.map((client: string, key: number) => (
              <p>{client}</p>
            ))
          }
        </section> */}

      </div>
      {/* footer */}
      <Footer />

    </>

  );
}
