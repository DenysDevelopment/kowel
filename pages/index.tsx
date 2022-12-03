import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <section className="intro section">
        <div className="container">
          <div className="intro__body">
            <div className="intro__text">
              <h1 className="intro__title">Вітаємо друже 👋</h1>
              <p className="intro__desc">My Kowel завжди до твоїх послуг</p>
            </div>
            <div className="intro__img">
              <Image
                src={"/images/intro-img.jpg"}
                alt="my kowel"
                width={540}
                height={337}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="category">
        <div className="container">
          <div className="category__body">
            <div className="category__section section-category">
              <div className="section-category__text">
                <h2 className="section-category__title">
                  Будь завжди у курсі подій завдяки “Новин міста”
                </h2>
                <Button href="/a" className="section-category__btn">
                  Детальніше
                </Button>
              </div>
              <div className="section-category__img">
                <Image
                  src="/images/home-1.jpg"
                  alt="Будь завжди у курсі подій завдяки “Новин міста”"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="category__section section-category">
              <div className="section-category__text">
                <h2 className="section-category__title">
                  Купуй/Продавай будь який товар в два кліка в “Ковель - Базар”
                </h2>
                <Button href="/a" className="section-category__btn">
                  Детальніше
                </Button>
              </div>
              <div className="section-category__img">
                <Image
                  src="/images/home-2.jpg"
                  alt="Будь завжди у курсі подій завдяки “Новин міста”"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="category__section section-category">
              <div className="section-category__text">
                <h2 className="section-category__title">
                  Майбутні події вже у твої кишені завдяки “Афіша подій”
                </h2>
                <Button href="/a" className="section-category__btn">
                  Детальніше
                </Button>
              </div>
              <div className="section-category__img">
                <Image
                  src="/images/home-3.jpg"
                  alt="Будь завжди у курсі подій завдяки “Новин міста”"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="category__section section-category">
              <div className="section-category__text">
                <h2 className="section-category__title">
                  Усі потрібні для тебе номери знаходяться у “Телефонна книга”
                </h2>
                <Button href="/a" className="section-category__btn">
                  Детальніше
                </Button>
              </div>
              <div className="section-category__img">
                <Image
                  src="/images/home-4.jpg"
                  alt="Будь завжди у курсі подій завдяки “Новин міста”"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
