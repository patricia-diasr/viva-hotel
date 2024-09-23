import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Adicionar from "./pages/Adicionar";
import Detalhe from "./pages/Detalhe";
import Editar from "./pages/Editar";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
    useEffect(() => {
        const hoteis = [
            {
                id: 1,
                nome: "Hotel das Palmeiras",
                estrelas: 5,
                cidade: "São Paulo - SP",
                descricao:
                    "Um luxuoso hotel no coração de São Paulo, oferecendo serviços exclusivos para hóspedes exigentes.",
                imagens: [
                    "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.pexels.com/photos/11448503/pexels-photo-11448503.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                    "https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                servicos: ["Wi-Fi gratuito", "Piscina", "Academia", "Spa", "Restaurante gourmet"],
                precoDiaria: "850,00",
                favorito: false,
            },
            {
                id: 2,
                nome: "Pousada Vista do Mar",
                estrelas: 4,
                cidade: "Florianópolis - SC",
                descricao:
                    "Aconchegante pousada à beira-mar, perfeita para relaxar e curtir as belezas naturais de Florianópolis.",
                imagens: [
                    "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.unsplash.com/photo-1596252890311-caa6a004a6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                servicos: ["Café da manhã", "Estacionamento gratuito", "Serviço de quarto", "Área para churrasco"],
                precoDiaria: "400,00",
                favorito: true,
            },
            {
                id: 3,
                nome: "Resort Paraíso Tropical",
                estrelas: 5,
                cidade: "Porto Seguro - BA",
                descricao:
                    "Resort all-inclusive com vista para o mar, oferecendo uma experiência inesquecível no litoral baiano.",
                imagens: [
                    "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.unsplash.com/photo-1436018626274-89acd1d6ec9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
                    "https://images.unsplash.com/photo-1573663520878-8c38b10264fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                servicos: [
                    "Wi-Fi gratuito",
                    "Piscina",
                    "Entretenimento noturno",
                    "Esportes aquáticos",
                    "Serviço de babá",
                ],
                precoDiaria: "1.200,00",
                favorito: true,
            },
            {
                id: 4,
                nome: "Hotel Fazenda Serra Verde",
                estrelas: 3,
                cidade: "Campos do Jordão - SP",
                descricao:
                    "Hotel fazenda cercado por montanhas, ideal para quem busca contato com a natureza e tranquilidade.",
                imagens: [
                    "https://images.unsplash.com/photo-1533794939052-03f5ea84373b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/3755703/pexels-photo-3755703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                servicos: ["Café da manhã", "Caminhadas ecológicas", "Passeios a cavalo", "Piscina aquecida"],
                precoDiaria: "320,00",
                favorito: false,
            },
            {
                id: 5,
                nome: "Pousada Cantinho Mineiro",
                estrelas: 4,
                cidade: "Tiradentes - MG",
                descricao: "Charmosa pousada em estilo colonial, localizada no centro histórico de Tiradentes.",
                imagens: [
                    "https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
                    "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/3682238/pexels-photo-3682238.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/2220618/pexels-photo-2220618.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                servicos: ["Café da manhã", "Wi-Fi gratuito", "Jardim", "Estacionamento"],
                precoDiaria: "280,00",
                favorito: false,
            },
            {
                id: 6,
                nome: "Hotel Porto Real",
                estrelas: 3,
                cidade: "Rio de Janeiro - RJ",
                descricao:
                    "Localizado na zona sul do Rio de Janeiro, o Hotel Porto Real oferece conforto e praticidade.",
                imagens: [
                    "https://images.unsplash.com/photo-1580650897119-b47aad929934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
                    "https://images.pexels.com/photos/253419/pexels-photo-253419.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.unsplash.com/photo-1507125524815-d9d6dccda1dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfHwwfHx8Mg%3D%3D",
                    "https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNhZGVtaWF8ZW58MHx8MHx8fDI%3D",
                ],
                servicos: ["Wi-Fi gratuito", "Academia", "Restaurante", "Serviço de quarto", "Estacionamento"],
                precoDiaria: "350,00",
                favorito: false,
            },
            {
                id: 7,
                nome: "Eco Resort das Águas",
                estrelas: 5,
                cidade: "Foz do Iguaçu - PR",
                descricao: "Resort sustentável próximo às Cataratas do Iguaçu, com atividades de ecoturismo e lazer.",
                imagens: [
                    "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/623177/pexels-photo-623177.jpeg?auto=compress&cs=tinysrgb&w=600",
                ],
                servicos: ["Wi-Fi gratuito", "Piscina", "Passeios ecológicos", "Spa", "Serviço de transporte"],
                precoDiaria: "1.100,00",
                favorito: false,
            },
            {
                id: 8,
                nome: "Pousada do Sol",
                estrelas: 4,
                cidade: "Aracaju - SE",
                descricao:
                    "Pousada familiar a poucos metros da praia, ideal para relaxar e aproveitar o sol de Aracaju.",
                imagens: [
                    "https://images.pexels.com/photos/1658083/pexels-photo-1658083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.unsplash.com/photo-1532250327408-9bd6e0ce2c49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1557459325-b6733cbeae9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpc2NpbmF8ZW58MHx8MHx8fDI%3D",
                    "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                servicos: ["Café da manhã", "Piscina", "Wi-Fi gratuito", "Churrasqueira"],
                precoDiaria: "450,00",
                favorito: false,
            },
            {
                id: 9,
                nome: "Grand Hotel Royal",
                estrelas: 5,
                cidade: "Curitiba - PR",
                descricao: "Hotel de luxo no centro de Curitiba, com acomodações modernas e serviços de alto padrão.",
                imagens: [
                    "https://images.unsplash.com/photo-1474690455603-a369ec1293f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHwy",
                    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.unsplash.com/photo-1494194069000-cb794f31d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/161737/pedicure-massage-therapist-spa-161737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                servicos: ["Wi-Fi gratuito", "Spa", "Academia", "Piscina coberta", "Restaurante"],
                precoDiaria: "950,00",
                favorito: false,
            },
            {
                id: 10,
                nome: "Hotel Beira Rio",
                estrelas: 4,
                cidade: "Belém - PA",
                descricao:
                    "Com vista para o Rio Guamá, este hotel é perfeito para quem deseja explorar a cultura e gastronomia de Belém.",
                imagens: [
                    "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDI%3D",
                    "https://images.unsplash.com/photo-1535479939465-f597a4f58943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0JTIwaG90ZWx8ZW58MHx8MHx8fDI%3D",
                    "https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.unsplash.com/photo-1604348825621-22800b6ed16d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                servicos: ["Wi-Fi gratuito", "Restaurante", "Piscina", "Serviço de quarto", "Estacionamento gratuito"],
                precoDiaria: "400,00",
                favorito: false,
            },
        ];

        localStorage.setItem("hoteis", JSON.stringify(hoteis));

        const temaSalvo = localStorage.getItem("tema") || "light";
        document.documentElement.setAttribute("data-theme", temaSalvo);
        localStorage.setItem("tema", temaSalvo);
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/detalhe/:id" element={<Detalhe />} />
                        <Route path="/adicionar" element={<Adicionar />} />
                        <Route path="/editar/:id" element={<Editar />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
