import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(event) {
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no logon, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes" />
        </div>
    );
}

export default Logon;