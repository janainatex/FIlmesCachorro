import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilmeList = ({ onSelectFilme }) => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/filmes')
            .then(response => setFilmes(response.data))
            .catch(error => console.error('Erro ao buscar Filmes:', error));
    }, []);

    return (
        <div>
            <h1>Filmes</h1>
            <ul>
                {filmes.map(filme => (
                    <li key={filme.filme_id} onClick={() => onSelectFilme(filme.filme_id)}>
                        <img src={filme.filme_capa} alt={filme.filme_titulo} width="100" />
                        <p>{filme.filme_titulo} - {filme.filme_genero} </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmeList;