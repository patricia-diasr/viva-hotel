import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Formulario from "../components/Formulario";

function Adicionar() {
  const navigate = useNavigate();

  const onSubmit = (hotelData) => {
    const storedHoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
    const updatedHoteis = [
      ...storedHoteis,
      {
        ...hotelData,
        id: Date.now(),
        imagens: hotelData.imagens.split(", "),
        servicos: hotelData.servicos.split(", "),
        favorito: false,
      },
    ];

    try {
      localStorage.setItem("hoteis", JSON.stringify(updatedHoteis));
      toast.success("Hotel cadastrado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error("Ocorreu um erro ao adicionar o hotel:", error);
      toast.error(
        "Houve um problema ao adicionar o hotel. Por favor, tente novamente."
      );
    }
  };

  return (
    <div>
      <h1>Adicionar Hotel</h1>
      <Formulario onSubmit={onSubmit} />
    </div>
  );
}

export default Adicionar;
