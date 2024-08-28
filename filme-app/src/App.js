import React, { useState } from 'react';
import FilmeList from './components/FilmeList';
import FilmeDetail from './components/FilmeDetail';
import './App.css';

const App = () => {
    const [selectedFilmeId, setSelectedFilmeId] = useState(null);

    return (
        <div className="app-container">
            <FilmeList onSelectFilme={setSelectedFilmeId} />
            <FilmeDetail FilmeId={selectedFilmeId} />
        </div>
    );
};

export default App;
