import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const [menuAberto,setMenuAberto] = useState(false);

  const abrirMenu = () =>setMenuAberto(!menuAberto);

  const mudarTema = () => {
    const temaAtual = localStorage.getItem('tema');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novoTema);
    localStorage.setItem('tema', novoTema);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        VivaHotel
      </Link>
      <div className={styles.menuIcon} onClick={abrirMenu}>
        {menuAberto ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`${styles.nav} ${menuAberto ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/adicionar">Adicionar hotel</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
          <li>
            <button onClick={mudarTema}>Mudar Tema</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
