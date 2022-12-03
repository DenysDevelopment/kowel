import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { NewsPost } from "../types/NewsPost";

type NewsProps = {
  newsPosts: NewsPost[];
};

const News = ({ newsPosts }: NewsProps): JSX.Element => {
  return (
    <>
      <Header />
      <section className="intro section">
        <div className="container">
          <div className="intro__body">
            <div className="intro__text">
              <h1 className="intro__title">Новини міста</h1>
              <p className="intro__desc">Будь завжди у курсі подій</p>
            </div>
            <div className="intro__img intro__img--shadow">
              <Image
                src={"/images/news-img.png"}
                alt="Новости"
                width={540}
                height={337}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="news section">
        <div className="container">
          <div className="news__body">
            {newsPosts &&
              newsPosts.map((post) => (
                <article className="news__card card-news" key={post.id}>
                  <div className="card-news__img">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="card-news__body">
                    <h2 className="card-news__title">{post.title}</h2>
                    <a
                      href={post.author.url}
                      target="_blank"
                      className="card-news__source"
                      rel="noreferrer"
                    >
                      {post.author.name}
                    </a>
                    <p className="card-news__desc">{post.content_html}</p>
                    <Button className="card-news__btn" href={post.url}>
                      Детальніше
                    </Button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`https://kovel.media/feed/json`);
  const data = await res.json();

  return {
    props: {
      newsPosts: data.items,
    },
  };
}

export default News;
