import React from 'react';
import '../styles.css';

export default function CharactersCard({ character, onSelect }) {
    return (
        <div className='character-card'>
            <ul>
                <li>
                    <div className='character-card-info'>
                        <img 
                            src={`${character.image}`}
                            alt={character.name}
                            onClick={() => onSelect(character)} 
                        />
                        <h3>{character.name}</h3>
                        <p>{character.house === '' ? 'Não consta' : character.house}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
