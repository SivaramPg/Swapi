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
                            homeworld = {characters[i].homeworld}
                            films = {characters[i].films}
                            species = {characters[i].species}
                            vehicles = {characters[i].vehicles}
                            starships = {characters[i].starships}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

