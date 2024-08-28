import React from 'react';
import '../styles.css';

export default function CharacterDetails({ character, onClose }) {
    if (!character) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='character-details' onClick={(e) => e.stopPropagation()}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p className='date-of-birth'>Date of birth: {character.dateOfBirth}</p>
                <p><strong>House:</strong> <span>{character.house === '' ? 'No information' : character.house}</span></p>
                <p>Scecies: <span>{character.species === '' ? 'No information' : character.species}</span></p>
                <p>Patronus: <span>{character.patronus === '' ? 'No information' : character.patronus}</span></p>
            </div>
        </div>
    );
}
