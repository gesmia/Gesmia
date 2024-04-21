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
  { id: 1, name: 'Catalina', text: 'Una app que me mantiene más segura a mi y a mi hija', date: 'Abril 15' },
  { id: 2, name: 'Matthew', text: 'Una app que me mantiene más segura a mi y a mi hija', date: 'Abril 15' },
  { id: 3, name: 'Yordan', text: 'Una app que me mantiene más segura a mi y a mi hija', date: 'Abril 15' },
  { id: 4, name: 'Joshua', text: 'Una app que me mantiene más segura a mi y a mi hija', date: 'Abril 15' },
];
const features = [
  { number: 1, title: 'Diseño Innovador', description: 'Nuestra aplicación combina tecnología de vanguardia con un diseño intuitivo, asegurando que la seguridad personal nunca sea complicada.' },
  { number: 2, title: 'Rápido y Eficaz', description: 'Recibe y envía alertas de emergencia con la rapidez que solo nuestra tecnología te puede ofrecer.' },
  { number: 3, title: 'Tu Familia, Siempre Contigo', description: 'Nuestra aplicación mantiene a tu familia unida y segura, sin importar dónde estén.' },
];

const prices = [
  {
    type: "standard",
    value: 3.99,
    label: "For Individual / mes",
    buttonLabel: "Unirme",
    items: [
      "Solo un usuario",
      "Alerta de Emergencia via SMS",
      "Botón de Pánico Silencioso",
      "Acceso a Líneas de Asistencia",
      "Historial de Ubicaciones"
    ]
  },
  {
    type: "family",
    value: 16.99,
    label: "For families / mes",
    buttonLabel: "Unirme",
    items: [
      "Hasta 10 usuarios",
      "Todo lo del plan individual",
      "Alertas de Zonas Inseguras",
      "Control Parental",
      "Monitero de varios usuarios"
    ]
  }
];


export default function Home() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <InformationWithContent type={1} title={"Toda tu familia siempre presente"} description={"Mantén a tu familia conectada y segura en todo momento con EmergentApp, que utiliza tecnología de vanguardia para ofrecer localización en tiempo real y comunicación directa en situaciones de emergencia."} label={"Get the App"}>
            <VideoEmbed url={"/videos/contentmp4.mp4"} height={"100%"} />
          </InformationWithContent>

          <InformationWithContent type={2} title={"Comentarios de personas que usan EmergentApp"} description={"Explora el entusiasmo y las expectativas de futuros usuarios que están listos para adoptar EmergentApp como su solución de seguridad personal, destacando su potencial para mejorar la tranquilidad y la seguridad diaria."} label={"Leer más"}>
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
          <label className="subtitle">Descubre cómo EmergentApp puede hacer que tú y tus seres queridos vivan más tranquilos.</label>

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
