import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const FaleConosco = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = { nome: "", email: "", mensagem: "" };

    let formValid = true;

    // Validação do nome
    if (!form.nome.trim() || form.nome.trim().split(' ').length < 2) {
      newErrors.nome = "Por favor, insira seu nome completo (com sobrenome).";
      formValid = false;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
      formValid = false;
    }

    // Validação da mensagem
    if (!form.mensagem.trim() || form.mensagem.length < 30 || form.mensagem.length > 500) {
      newErrors.mensagem = "A mensagem deve ter entre 30 e 500 caracteres.";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      alert("Formulário enviado com sucesso!");
      setForm({ nome: "", email: "", mensagem: "" }); // Resetar formulário
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
  };

  return (
    <>
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
                <Link className="nav-link active" to="/faleconosco">
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

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center text-success">Fale conosco</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">
                    Nome Completo:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                    id="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                  />
                  <div className="invalid-feedback">{errors.nome}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Digite seu e-mail"
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mensagem" className="form-label">
                    Descrição da Mensagem:
                  </label>
                  <textarea
                    className={`form-control ${errors.mensagem ? 'is-invalid' : ''}`}
                    id="mensagem"
                    rows="4"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua mensagem (30 a 500 caracteres)"
                  ></textarea>
                  <div className="invalid-feedback">{errors.mensagem}</div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Enviar
                </button>
              </form>
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
                <li><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
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
    </>
  );
};

export default FaleConosco;