import React from 'react';
import '../css/Character.css';
import CharacterText from '../conponts/CharacterText';

const Character = () => {
    return (
        <div>
            <CharacterText />
            <div className="CharacterBack"></div>
        </div>
    );
}

export default Character;