import { useState, useEffect } from "react";
import styles from "./Formulario.module.css";

function Formulario({ hotelId, onSubmit }) {
    const [hotelData, setHotelData] = useState({
        nome: "",
        estrelas: "",
        cidade: "",
        descricao: "",
        imagens: "",
        servicos: "",
        precoDiaria: "",
    });

    const [erro, setErro] = useState({});

    useEffect(() => {
        if (hotelId) {
            const storedHoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
            const hotel = storedHoteis.find((h) => h.id == hotelId);
            if (hotel) {
                setHotelData({
                    nome: hotel.nome,
                    estrelas: hotel.estrelas,
                    cidade: hotel.cidade,
                    descricao: hotel.descricao,
                    imagens: hotel.imagens.join(", "),
                    servicos: hotel.servicos.join(", "),
                    precoDiaria: hotel.precoDiaria,
                });
            }
        }
    }, [hotelId]);

    const validate = () => {
        const novoErro = {};

        if (hotelData.nome.length < 3) {
            novoErro.nome = "Nome deve ter pelo menos 3 caracteres.";
        }
        if (!hotelData.estrelas || parseInt(hotelData.estrelas) < 1 || parseInt(hotelData.estrelas) > 5) {
            novoErro.estrelas = "Estrelas deve ser um número entre 1 e 5.";
        }

        if (hotelData.cidade.length < 3) {
            novoErro.cidade = "Cidade deve ter pelo menos 3 caracteres.";
        }

        if (hotelData.descricao.length < 10) {
            novoErro.descricao = "Descrição deve ter pelo menos 10 caracteres.";
        }

        if (
            !hotelData.precoDiaria ||
            isNaN(parseFloat(hotelData.precoDiaria.replace(".", "").replace(",", "."))) ||
            parseFloat(hotelData.precoDiaria.replace(".", "").replace(",", ".")) <= 0
        ) {
            novoErro.precoDiaria = "Preço da diária deve ser um número positivo.";
        }

        setErro(novoErro);
        return Object.keys(novoErro).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(hotelData);
        }
    };

    return (
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="nome" value={hotelData.nome} onChange={handleChange} />
                {erro.nome && <span className={styles.erro}>{erro.nome}</span>}
            </label>
            <label>
                Estrelas:
                <input type="number" name="estrelas" value={hotelData.estrelas} onChange={handleChange} />
                {erro.estrelas && <span className={styles.erro}>{erro.estrelas}</span>}
            </label>
            <label>
                Cidade:
                <input type="text" name="cidade" value={hotelData.cidade} onChange={handleChange} />
                {erro.cidade && <span className={styles.erro}>{erro.cidade}</span>}
            </label>
            <label>
                Descrição:
                <textarea name="descricao" value={hotelData.descricao} onChange={handleChange} />
                {erro.descricao && <span className={styles.erro}>{erro.descricao}</span>}
            </label>
            <label>
                Imagens (separadas por vírgula):
                <input type="text" name="imagens" value={hotelData.imagens} onChange={handleChange} />
            </label>
            <label>
                Serviços (separados por vírgula):
                <input type="text" name="servicos" value={hotelData.servicos} onChange={handleChange} />
            </label>
            <label>
                Preço da Diária:
                <input type="text" name="precoDiaria" value={hotelData.precoDiaria} onChange={handleChange} />
                {erro.precoDiaria && <span className={styles.erro}>{erro.precoDiaria}</span>}
            </label>
            <button type="submit">{hotelId ? "Editar" : "Adicionar"} Hotel</button>
        </form>
    );
}

export default Formulario;
