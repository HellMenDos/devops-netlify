import './MainBanner.css';

const MainBanner = () => {
  return (
    <section className="mainBanner" id="mainBanner">
      <div className="mainBanner__inner">
        <div className="mainBanner__inner__title">
          Концентрированный, дополняемый материал DevOps для разработчиков
        </div>
        <div className="mainBanner__inner__describe">
          В этом материале мы разберём всё, что нужно знать по теме DevOps для разработчиков.
        </div>
        <div className="info__describe">
          Первые 30 человек получат одну бесплатную консультацию или собеседование, а так же материал по поиску работы
        </div>
        <a href="#plan" className="button-light">
          Подробнее
        </a>
      </div>
    </section>
  );
};

export default MainBanner;


