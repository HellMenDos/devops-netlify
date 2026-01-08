import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__inner__h1">Обо мне</div>
        <div className="about__inner__blocks">
          <div className="about__inner__text">
            <div className="about__inner__title">
              Меня зовут Кирилл и я Senior FullStack разработчик
            </div>
            <div className="about__inner__describe">
              Большой опыт за плечами на разных позициях в том числе и руководящих. Провел порядка 100 собеседовний на различные позиции.
              <br />
              Создатель каналов: ДЖАВАСКРИПТИЗЕРЫ, ПИТОНИСТЫ, ПОРТАЛА A-LIT.RU, БОТА ALEX - твой IT Собеседник
            </div>
            <a href="#plan" className="button-black">
              Подробнее о курсе
            </a>
          </div>
          <div className="about__inner__image">
            <img 
              src="https://alitdevops.netlify.app/9ccdf6affc7ec8bbe371.png" 
              alt="Кирилл - Senior FullStack разработчик"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
