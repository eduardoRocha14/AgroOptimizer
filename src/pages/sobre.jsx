import React from 'react';
import logo from '../assets/image.png';
import quemSomosImg from '../assets/quemsomos.jpg';
import publicoAlvoImg from '../assets/publicoalvo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

const sobre = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="home.html">
                        <img src={logo} alt="Logo" width="150" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Funcionalidades">Funcionalidades</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FaleConosco">Fale Conosco</Link>
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

            {/* Main Content */}
            <div className="container my-5">
                <h1 className="text-center text-success mb-4">Sobre Nós</h1>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <h2>Quem Somos?</h2>
                        <p>Somos uma empresa formada por profissionais engajados na criação de soluções tecnológicas com o objetivo de solucionar problemas complexos relacionados a produção de alimentos no Brasil. O alto percentual de desperdício de alimentos em toda a cadeia produtiva nos levou a idealizar um sistema eficiente que impactasse positivamente os pequenos e médios produtores e a sociedade como um todo. Nossa solução melhora a eficiência da produção e o aproveitamento dos recursos, conectando fazendeiros a tecnologias e ferramentas que auxiliam no PLANEJAMENTO, MONITORAMENTO e REDISTRIBUIÇÃO dos alimentos de forma eficaz, ajudando na previsibilidade orçamentária, maximizando lucros e diminuindo desperdícios.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={quemSomosImg} alt="Quem Somos" className="img-fluid rounded" width="450" />
                    </div>
                </div>

                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6">
                        <h2>Nosso Público Alvo</h2>
                        <p>Nosso Público Alvo é formado por PEQUENOS e MÉDIOS produtores rurais, que enfrentam desafios no acesso a tecnologias capazes de melhorar o planejamento na produção, na gestão de insumos e na redistribuição de alimentos que não atendem a padrões de vendas ao consumidor final, mas que podem ser reaproveitados em outros segmentos.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={publicoAlvoImg} alt="Nosso Público Alvo" className="img-fluid rounded" width="450" />
                    </div>
                </div>
            </div>

            {/* Footer */}
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
        </div>
    );
}

export default sobre;