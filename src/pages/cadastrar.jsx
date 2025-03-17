import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/cadastrar.css';
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const Cadastrar = () => {
    const [formData, setFormData] = useState({
        nome: '',
        producao: '',
        email: ''
    });

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        console.log('Chave pública:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
        console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            toast.error('Por favor, insira um email válido');
            return;
        }

        const templateParams = {
            to_name: formData.nome,
            to_email: formData.email,
            from_name: 'AgroOptimizer',
            producao: formData.producao,
            message: `Olá ${formData.nome}, seu cadastro foi realizado com sucesso! Você produz: ${formData.producao}`,
            reply_to: formData.email
        };

        try {
            console.log('Enviando email para:', formData.email);
            console.log('Parâmetros do template:', templateParams);
            
            const response = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            
            console.log('Resposta do EmailJS:', response);

            if (response.status === 200) {
                toast.success('Cadastro realizado com sucesso! Verifique seu email.');
                setFormData({ nome: '', producao: '', email: '' });
            } else {
                console.error('Erro na resposta:', response);
                toast.error(`Erro ao enviar email. Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Erro completo:', error);
            console.error('Mensagem de erro:', error.message);
            console.error('Texto do erro:', error.text);
            toast.error(`Erro ao enviar email: ${error.text || error.message || 'Verifique o console para mais detalhes'}`);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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

            <div className="cadastro-container">
                <div className="cadastro-form">
                    <h2>Cadastrar-se</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Nome Completo"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="producao"
                                name="producao"
                                value={formData.producao}
                                onChange={handleChange}
                                placeholder="O que você produz?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Seu email"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Cadastrar</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cadastrar;
