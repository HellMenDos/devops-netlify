import Header from './components/Header';
import MainBanner from './components/MainBanner';
import About from './components/About';
import TextSection from './components/TextSection';
import Plan from './components/Plan';
import Price from './components/Price';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <About />
      <TextSection
        title="Бесплатная консультация и метериал в подарок"
        description="Первые 30 купивших получат бесплатную консультацию либо собеседование со мной. На консультации можно задать абсолютно любые вопросы или задачи которые надо решить. Длительность консультации или собеседования равна 30 минут. Так же будет предоставлен в подарок материал по поиску работы"
      />
      <TextSection
        title="Для кого этот материал ?"
        description="Для разработчиков разных уровней и стеков. В этом материале мы рассмотрим что нужно знать по DevOps для разработчика."
      />
      <TextSection
        title="Как проходит материал ?"
        description="После покупки материала вы будете добавлены в закрытый telegram канал."
      />
      <Plan />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
