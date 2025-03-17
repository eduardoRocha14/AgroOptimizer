import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../assets/image.png";
import foto1 from "../assets/Foto1.jpg";
import foto2 from "../assets/Foto2.jpg";
import foto3 from "../assets/Foto3.jpg";
import foto4 from "../assets/Foto4.jpg";
import { Link, useLocation } from "react-router-dom";
import "../styles/style4.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState('gestao');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveTab(hash);
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const showTab = (tab) => {
    setActiveTab(tab);
    window.location.hash = `#${tab}`; 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            <img src={logo} alt="Logo" width="140" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/funcionalidades">Funcionalidades</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faleconosco">Fale Conosco</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-md-12">
          <div className="centro">
            <div className="centro-principal">
              <div className="video-apresentacao">
                <iframe
                  className="w-100"
                  height="auto"
                  src="https://www.youtube.com/embed/Z63v0Jboat8?si=LM0CDbbBIlEynqyB"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="titulo-subtitulo">
                <div className="titulo">
                  <h1>Transforme Sua Produção com AgroOptimizer</h1>
                </div>
                <div className="subtitulo">
                  <h2>Soluções inovadoras para otimizar sua produtividade e reduzir custos na agricultura</h2>
                </div>
                <div className="botao-saibaMais">
                  <Link to="/sobre"><p>Saiba mais </p></Link>
                </div>
              </div>
            </div>

            <div className="tabela-funcionalidade">
              <div className="tab-titles">
                <div
                  className={`tab-title ${activeTab === 'gestao' ? 'active' : ''}`}
                  onClick={() => showTab('gestao')}
                >
                  Gestão de Produção e Insumos
                </div>
                <div
                  className={`tab-title ${activeTab === 'planejamento' ? 'active' : ''}`}
                  onClick={() => showTab('planejamento')}
                >
                  Planejamento de Colheita
                </div>
                <div
                  className={`tab-title ${activeTab === 'redistribuicao' ? 'active' : ''}`}
                  onClick={() => showTab('redistribuicao')}
                >
                  Redistribuição e Aproveitamento de Alimentos Descartados
                </div>
                <div
                  className={`tab-title ${activeTab === 'plataforma' ? 'active' : ''}`}
                  onClick={() => showTab('plataforma')}
                >
                  Plataforma de Venda
                </div>
              </div>

              <div className={`tab-content ${activeTab === 'gestao' ? 'show' : 'd-none'}`} id="gestao">
                <img src={foto1} className="float-start" alt="Imagem Gestão de Produção e Insumos" />
                <p>Com essa funcionalidade, gestores podem planejar a compra de insumos, calcular a quantidade ideal e definir os melhores momentos para plantar e vender. Usando algoritmos de previsão de mercado e análise de dados, o sistema otimiza a produção, reduz custos e maximiza lucros.</p>
                <Link to="/funcionalidades#gestao" className="btn-saibaMais">Saiba Mais</Link>
              </div>

              <div className={`tab-content ${activeTab === 'planejamento' ? 'show' : 'd-none'}`} id="planejamento">
                <img src={foto2} className="float-start" alt="Imagem Planejamento de Colheita" />
                <p>Essa funcionalidade usa dados climáticos e de mercado para oferecer recomendações sobre os melhores períodos para plantar e colher. O sistema analisa tendências e padrões históricos para fazer previsões que auxiliam na tomada de decisões.</p>
                <Link to="/funcionalidades#planejamento" className="btn-saibaMais">Saiba Mais</Link>
              </div>

              <div className={`tab-content ${activeTab === 'redistribuicao' ? 'show' : 'd-none'}`} id="redistribuicao">
                <img src={foto3} className="float-start" alt="Imagem Redistribuição e Aproveitamento" />
                <p>Após a colheita, o software facilita a conexão entre produtores e parceiros para o reaproveitamento de alimentos não comercializados. Esses produtos podem ser transformados em ração animal ou outros itens, promovendo a economia circular.</p>
                <Link to="/funcionalidades#redistribuicao" className="btn-saibaMais">Saiba Mais</Link>
              </div>

              <div className={`tab-content ${activeTab === 'plataforma' ? 'show' : 'd-none'}`} id="plataforma">
                <img src={foto4} className="float-start" alt="Imagem Plataforma de Venda" />
                <p>Uma interface digital que conecta produtores diretamente a compradores interessados, simplificando o processo de venda. Os produtores podem listar seus produtos, negociar e fechar negócios diretamente na plataforma.</p>
                <Link to="/funcionalidades#plataforma" className="btn-saibaMais">Saiba Mais</Link>
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
                <li><Link to="/sobre" className="text-white text-decoration-none">Sobre Nós</Link></li>
                <li><Link to="/funcionalidades" className="text-white text-decoration-none">Funcionalidades</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Blog</Link></li>
                <li><Link to="/faleconosco" className="text-white text-decoration-none">Fale Conosco</Link></li>
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Home;