import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__inner__column">
          <div className="footer__title">Связь:</div>
          <div className="footer__contact">
            <span className="footer__label">Электронный адрес:</span>
            <a href="mailto:poznkirill3@gmail.com" className="footer__link">
              poznkirill3@gmail.com
            </a>
          </div>
          <div className="footer__contact">
            <span className="footer__label">Телеграм для связи:</span>
            <a href="https://t.me/HelloMeanOfficial" className="footer__link">
              @HelloMeanOfficial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
