import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import api from '../../services/api';

export default function Pessoa() {
    const [nome, setNome] = useState("");
    const [salario, setSalario] = useState(0.0);
    const [nascimento, setNascimento] = useState("");
    const [cidade, setCidade] = useState(null);
    const [idEdicao, setIdEdicao] = useState(null);
    const [pessoas, setPessoas] = useState([]);
    const navigate = useNavigate();
    return (
        <>
            <Header />
                <div className='container'>
                    <h1>Cadastro de Pessoas</h1>
                </div>
            <Footer />
        </>
    );
}