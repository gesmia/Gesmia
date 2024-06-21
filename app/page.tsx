'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import './page.css'

import BrevoScript from '../stories/Brevo/brevo';


import pattern from '@/public/head/Pattern.png'
import location_view from '@/public/head/location_view.png'
import incident_view from '@/public/head/incident_view.png'
import report_view from '@/public/head/report_view.png'
import image_step_one from '@/public/steps/image-one.svg'
import image_step_two from '@/public/steps/image-two.svg'
import image_step_three from '@/public/steps/image-three.svg'

import imageM_step_one from '@/public/steps/IMG1m.svg'
import imageM_step_two from '@/public/steps/IMG2m.svg'
import imageM_step_three from '@/public/steps/IMG3m.svg'

import tapp_device from '@/public/device/image_tapp.png'
import tappCollar from '@/public/head/tapp_collar.jpg'

import { InformationWithContent } from '@/stories/informationWithContent/InformationWithContent'
import { Feauture } from "@/stories/feature/feature";
import { Comment } from "@/stories/comment/Comment";
import { VideoEmbed } from "@/stories/video/video";
import { Header } from "@/stories/header/Header";
import { Button } from "@/stories/button/Button";
import { Footer } from "@/stories/footer/Footer";
import { Price } from "@/stories/prices/Price";

import { comments, features, prices } from './data'

export default function Home() {

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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

      <BrevoScript />
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
              <div className="views">
                <Image src={location_view} alt={"location view mobile app"} className="view" />
                <Image src={report_view} alt={"location view mobile app"} className="view" />
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
          <InformationWithContent type={1} title={"Todo tu circulo siempre presente"} description={"No importa si eres un viajero, los usuarios de Thappie siempre pueden reportar incidentes, ayudandonos a mantener a tu familia segura. Notificando en cada lugar donde están tus familiares o amigos"} label={"Unirme"}>
            <Image src={incident_view} alt={"location view mobile app"} className="function" />
          </InformationWithContent>

          <InformationWithContent type={2} title={"Comentarios de personas que usan Thappie"} description={"Explora el entusiasmo y las expectativas de futuros usuarios que están listos para adoptar Thappie como su solución de seguridad personal, destacando su potencial para mejorar la tranquilidad y la seguridad diaria."} label={"Unirme"}>
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
