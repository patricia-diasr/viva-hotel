import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPencil, BsTrash, BsHeart, BsHeartFill } from "react-icons/bs";
import styles from "./Detalhe.module.css";

function Detail() {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedHoteis = localStorage.getItem("hoteis");
        if (storedHoteis) {
            const hoteis = JSON.parse(storedHoteis);
            setHotel(hoteis.find((h) => h.id == id));
        }
    }, [id]);

    if (!hotel) {
        return <p>Carregando...</p>;
    }

    const handleEditar = () => {
        navigate(`/editar/${id}`);
    };

    const handleDeletar = () => {
        const storedHoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
        const updatedHoteis = storedHoteis.filter((h) => h.id != id);
        localStorage.setItem("hoteis", JSON.stringify(updatedHoteis));

        try {
            localStorage.setItem("hoteis", JSON.stringify(updatedHoteis));
            toast.success("Hotel deletado com sucesso!");
            navigate("/home");
        } catch (error) {
            console.error("Ocorreu um erro ao deletar o hotel:", error);
            toast.error("Houve um problema ao deletar o hotel. Por favor, tente novamente.");
        }
    };

    const handleFavoritar = () => {
        const storedHoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
        const updatedHoteis = storedHoteis.map((h) => {
            if (h.id == id) {
                return { ...h, favorito: !h.favorito };
            }
            return h;
        });
        localStorage.setItem("hoteis", JSON.stringify(updatedHoteis));
        setHotel((prevHotel) => ({ ...prevHotel, favorito: !prevHotel.favorito }));
    };
    return (
        <div className={styles.detail}>
            <img className={styles.mainImage} src={hotel.imagens[0]} alt="Imagem do hotel" />
            <div className={styles.images}>
                {hotel.imagens.slice(1).map((imagem, index) => (
                    <img key={index} className={styles.otherImages} src={imagem} alt={`Imagem do hotel ${index + 2}`} />
                ))}
            </div>
            <div className={styles.options}>
                <button className={styles.editButton} onClick={handleEditar}>
                    <BsPencil /> Editar
                </button>
                <button className={styles.deleteButton} onClick={handleDeletar}>
                    <BsTrash /> Excluir
                </button>
                <button className={styles.favoriteButton} onClick={handleFavoritar}>
                    {hotel.favorito ? (
                        <>
                            <BsHeartFill /> Favoritado
                        </>
                    ) : (
                        <>
                            <BsHeart /> Favoritar
                        </>
                    )}
                </button>
            </div>
            <h1>{hotel.nome}</h1>
            <div className={styles.info}>
                <p>{hotel.cidade}</p>
                <p>R$ {hotel.precoDiaria} / dia</p>
            </div>
            <h2>Descrição</h2>
            <p>{hotel.descricao}</p>
            <h2>Serviços</h2>
            <ul>
                {hotel.servicos.map((servico, index) => (
                    <li key={index}>{servico}</li>
                ))}
            </ul>
        </div>
    );
}

export default Detail;
