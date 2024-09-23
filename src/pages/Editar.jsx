import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Formulario from "../components/Formulario";

function Editar() {
    const navigate = useNavigate();
    const { id } = useParams();

    const onSubmit = (hotelData) => {
        const storedHoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
        const updatedHoteis = storedHoteis.map((hotel) =>
            hotel.id == id
                ? {
                      ...hotel,
                      ...hotelData,
                      imagens: hotelData.imagens.split(", "),
                      servicos: hotelData.servicos.split(", "),
                  }
                : hotel
        );
        try {
            localStorage.setItem("hoteis", JSON.stringify(updatedHoteis));
            toast.success("Hotel editado com sucesso!");
            navigate("/home");
        } catch (error) {
            console.error("Ocorreu um erro ao editar o hotel:", error);
            toast.error("Houve um problema ao editar o hotel. Por favor, tente novamente.");
        }
    };

    return (
        <div>
            <h1>Editar Hotel</h1>
            <Formulario onSubmit={onSubmit} hotelId={id} />
        </div>
    );
}

export default Editar;
