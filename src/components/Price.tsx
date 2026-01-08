import './Price.css';

const Price = () => {
  return (
    <section className="price" id="price">
      <div className="price__inner">
        <div className="price__inner__title">Забронировать место на курсе</div>
        <div className="info__describe">
          Первые 30 человек получат одну бесплатную консультацию или собеседование, а так же материал по поиску работы
        </div>
        <div className="price__inner__variants">
          <div className="price__inner__block">
            <div className="price__amount">ПЕРВЫЕ 30 ЧЕЛОВЕК<br />6850₽ / 84$</div>
            <div className="price__amount_sub">ПОСЛЕДУЮЩИЕ<br />8850₽ / 107$</div>
            <div className="price__text">Пишите мне для покупки @HelloMeanOfficial</div>
            <a href="https://t.me/HelloMeanOfficial" className="button-black">
              Купить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;

