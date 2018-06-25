import React, { Component } from 'react';
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

