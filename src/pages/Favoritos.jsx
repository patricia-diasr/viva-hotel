import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./Favoritos.module.css";

function Favoritos() {
    const [hoteis, setHoteis] = useState([]);

    useEffect(() => {
        const storageHoteis = localStorage.getItem("hoteis");
        if (storageHoteis) {
            setHoteis(JSON.parse(storageHoteis).filter((h) => h.favorito));
        }
    }, []);

    return (
        <div className={styles.favoritos}>
            <h1>Hotéis Favoritos</h1>
            <div className={styles.cards}>
                {hoteis.length > 0 ? (
                    hoteis.map((hotel) => <Card key={hotel.id} {...hotel} />)
                ) : (
                    <p>Nenhum hotel encontrado</p>
                )}
            </div>
        </div>
    );
}

export default Favoritos;
