import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <div>
            <span>DevOps ДЛЯ РАЗРАБА</span>
          </div>
        </div>
        <nav className={`navigate ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#plan" onClick={() => setIsMobileMenuOpen(false)}>Программа</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Обо мне</a>
          <a href="#advantages" onClick={() => setIsMobileMenuOpen(false)}>Преимущества</a>
          <a href="https://t.me/HelloMeanOfficial" onClick={() => setIsMobileMenuOpen(false)}>Связаться</a>
        </nav>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
