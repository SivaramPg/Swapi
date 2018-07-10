import React from 'react';
import Card from './Card';

const CardList = ( { characters } ) => {
    return (
        <div className = "tc ma2">
            {
                characters.map((person, i) => {
                    return(
                        <Card
                            key = {i}
                            id = {i}
                            name = {characters[i].name}
                            height = {characters[i].height}
                            mass = {characters[i].mass}
                            hair_color = {characters[i].hair_color}
                            skin_color = {characters[i].skin_color}
                            eye_color = {characters[i].eye_color}
                            birth_year = {characters[i].birth_year}
                            gender = {characters[i].gender}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

