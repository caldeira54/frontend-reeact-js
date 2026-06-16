import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
    const navigate = useNavigate();

    function navigateCidade() {
        return navigate("/cidade");
    }

    function navigatePessoa() {
        return navigate("/pessoa");
    }

    return (
        <>
            <Header />

            <div className='container-home'>
                <a
                    onClick={navigateCidade}
                >Manutenção de Cidades</a>
                <a
                    onClick={navigatePessoa}
                >Manutenção de Pessoas</a>
            </div>

            <Footer />
        </>
    );
}