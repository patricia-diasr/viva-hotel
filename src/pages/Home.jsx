import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./Home.module.css";

function Home() {
    const [hoteis, setHoteis] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [ordenacao, setOrdenacao] = useState("nenhum");

    useEffect(() => {
        const storageHoteis = localStorage.getItem("hoteis");
        if (storageHoteis) {
            const parsedHoteis = JSON.parse(storageHoteis);
            setHoteis(parsedHoteis);
        }
    }, []);

    const hoteisFiltrados = hoteis.filter((hotel) => hotel.nome.toLowerCase().includes(pesquisa.toLowerCase()));

    const hoteisOrdenados = [...hoteisFiltrados].sort((a, b) => {
        if (ordenacao === "preco") {
            const precoA = parseFloat(a.precoDiaria.replace(".", "").replace(",", "."));
            const precoB = parseFloat(b.precoDiaria.replace(".", "").replace(",", "."));
            return precoA - precoB;
        } else if (ordenacao === "avaliacao") {
            return b.estrelas - a.estrelas;
        }
        return 0;
    });

    return (
        <div className={styles.home}>
            <h1>Listagem de Hotéis</h1>
            <div className={styles.filtros}>
                <input
                    type="text"
                    placeholder="Pesquisar hotel"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    className={styles.pesquisa}
                />

                <select value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)} className={styles.ordenacao}>
                    <option value="nenhum">Ordenar por...</option>
                    <option value="preco">Diária</option>
                    <option value="avaliacao">Avaliação</option>
                </select>
            </div>
            <div className={styles.cards}>
                {hoteisOrdenados.length > 0 ? (
                    hoteisOrdenados.map((hotel) => <Card key={hotel.id} {...hotel} />)
                ) : (
                    <p>Nenhum hotel encontrado</p>
                )}
            </div>
        </div>
    );
}

export default Home;
