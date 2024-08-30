import React, { useState, useEffect } from 'react';
import CharactersCard from './CharactersCard';
import CharacterDetails from './CharacterDetails';
import '../styles.css';

export default function CharactersGrid() {
    const [characters, setCharacters] = useState([]);
    const [findCharacter, setFindCharacter] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setCharacters(data);
            })
            .catch(error => console.error('Erro:', error));
    }, []);

    const handleFindChange = (e) => {
        setFindCharacter(e.target.value);
    };

    const handleSelectCharacter = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseDetails = () => {
        setSelectedCharacter(null);
    };

    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(findCharacter.toLowerCase())
    );

    return (
        <div className='container-input'>
            <input 
                type='text'
                placeholder='Find character...'
                className='find-input'
                value={findCharacter}
                onChange={handleFindChange}
            />
            <div className='container'>
                {filteredCharacters.map((character) => (
                    <CharactersCard 
                        key={character.id} 
                        character={character} 
                        onSelect={handleSelectCharacter} //
                    />
                ))}
            </div>
            {selectedCharacter && (
                <CharacterDetails 
                    character={selectedCharacter} 
                    onClose={handleCloseDetails} 
                />
            )}
        </div>
    );
}
