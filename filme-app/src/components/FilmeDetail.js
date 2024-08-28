import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilmeDetail = ({ FilmeId }) => {
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        if (FilmeId) {
            axios.get(`http://localhost:5000/api/filme/${FilmeId}`)
                .then(response => setFilme(response.data))
                .catch(error => console.error('Erro ao buscar detalhes do filme:', error));
        }
    }, [FilmeId]);

    if (!filme) return <p>Selecione um filme para ver os detalhes.</p>;

    return (
        <div>
            <h1>{filme.filme_titulo} - {filme.filme_genero}</h1>
            <h2>cachorros</h2>
            <img src={filme.filme_capa} alt={filme.filme_titulo} width="300" />
            <ul>
                {filme.cachorros.map(cachorro => (
                    <li key={cachorro.cachorro_id}>{cachorro.cachorro_titulo} </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmeDetail;