import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import "../styles/style3.css";
import logo from "../assets/image.png";

const Funcionalidades = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Logo" width="150" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/funcionalidades">
                  Funcionalidades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faleconosco">
                  Fale Conosco
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">
                  Sobre Nós
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12">
            <div className="back" id="gestao">
              <div className="title">Gestão de Produção e Insumos</div>
              <div className="text-content">
                <p>
                  Chega de complicação para cuidar da sua produção! Com a nossa funcionalidade de Gestão de Produção e Insumos, você tem tudo o que precisa em um só lugar. Planeje o que vai plantar, saiba exatamente quais insumos usar e tenha uma visão clara dos custos e dos ganhos esperados. Além disso, com informações atualizadas sobre o clima e o mercado, fica mais fácil evitar surpresas e garantir que você está sempre no caminho certo para uma colheita de sucesso. Esse controle total da produção não só economiza tempo e dinheiro, mas também traz a tranquilidade de saber que você está fazendo o melhor para sua lavoura. Planeje e calcule a quantidade ideal na compra de insumos. Descubra o melhor momento para plantar e vender. Utilizamos algoritmos avançados de previsão de mercado e análise de dados que o ajudarão a otimizar sua produção, reduzindo custos e maximizando seus lucros.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="back" id="planejamento">
              <div className="title">Planejamento de Colheita</div>
              <div className="text-content">
                <p>
                  Planejar a colheita nunca foi tão simples! Nossa ferramenta de Planejamento de Colheita ajuda você a escolher o momento certo para colher, com base no clima e na demanda do mercado. Imagine poder evitar desperdícios e colher no ponto certo, garantindo que seu produto chegue ao mercado fresquinho e valorizado. Assim, você evita perdas, ganha mais e ainda tem a segurança de que está sempre um passo à frente. Com nossa tecnologia, você tem o controle e a previsibilidade que sempre quis para aproveitar ao máximo cada colheita. Utilize dados climáticos e de mercado para identificar os melhores períodos de plantio e colheita. Utilizamos a análise de tendências e padrões históricos para ajudar o produtor na tomada de decisões, melhorando o timing das colheitas, reduzindo desperdícios e oferecendo previsibilidade aos produtores na sua gestão.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="back" id="redistribuicao">
              <div className="title">Redistribuição e Aproveitamento de Alimentos Descartados</div>
              <div className="text-content">
                <p>
                  Imagine transformar o que antes era descartado em lucro! Com nossa funcionalidade de Redistribuição e Aproveitamento de Alimentos Descartados, você pode dar um destino inteligente para aqueles produtos que não foram vendidos. Conectamos você a empresas que utilizam esses alimentos, como fábricas de ração ou instituições de caridade. É uma maneira de reduzir o desperdício, fazer a diferença e ainda ganhar uma renda extra. Tenha contato direto com parceiros interessados em reaproveitar alimentos não comercializados. Criamos uma Rede de Contatos ao conectar PRODUTORES e PARCEIROS para a venda de produtos não comercializados, reduzindo o desperdício de alimentos, gerando economia ao produtor e contribuindo, ainda, com o meio-ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="back" id="plataforma">
              <div className="title">Plataforma de Venda</div>
              <div className="text-content">
                <p>
                  Chegou a hora de levar sua produção para mais longe! Com nossa Plataforma de Venda, você coloca seus produtos diretamente à vista de quem quer comprar, como supermercados e feiras, sem intermediários. Imagine ter uma vitrine digital para sua colheita, alcançando mais clientes e melhorando suas vendas. Você tem o controle de negociar diretamente, garantindo preços justos e acessíveis. Nossa plataforma foi feita para dar voz e visibilidade aos pequenos e médios produtores, valorizando seu trabalho e trazendo novas oportunidades. Conecte-se diretamente com compradores interessados na sua produção. Liste seus produtos e negocie diretamente em nossa Plataforma de forma fácil e intuitiva. Utilize nossa plataforma de pagamentos com segurança e precisão. A tecnologia desenvolvida em nossa Plataforma de Venda aumenta o alcance de mercado para seus produtos, possibilitando maior visibilidade e facilidade na comercialização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-success text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Agro Optimizer</h5>
              <p>Uma plataforma voltada para otimização e gestão no agronegócio.</p>
            </div>
            <div className="col-md-4">
              <h5>Links Úteis</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/sobre" className="text-white text-decoration-none">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/funcionalidades" className="text-white text-decoration-none">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faleconosco" className="text-white text-decoration-none">
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-md-end text-center">
              <h5>Redes Sociais</h5>
              <a href="https://www.instagram.com/" className="text-white me-3">
                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
              </a>
              <a href="https://www.youtube.com/" className="text-white">
                <i className="bi bi-youtube" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <small>&copy; 2024 Agro Optimizer. Todos os direitos reservados.</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Funcionalidades;