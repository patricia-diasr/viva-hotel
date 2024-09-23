import { useNavigate } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";
import styles from "./Card.module.css";

function Card({ id, nome, estrelas, precoDiaria, cidade, imagens }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalhe/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.img} src={imagens[0]} alt="Imagem do hotel" />
      <div className={styles.description}>
        <h3>{nome}</h3>
        <p>{cidade}</p>
        <p>R$ {precoDiaria} / dia</p>
        <div className={styles.stars}>
          {Array.from({ length: 5 }, (_, index) =>
            index < estrelas ? (
              <BsStarFill key={index} className={styles.icon} />
            ) : (
              <BsStar key={index} className={styles.icon} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
