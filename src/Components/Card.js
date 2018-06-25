import React, { Component } from 'react';

const Card = ({key, id, name, height, mass, birth_year, gender}) => {
    return(
        <div className = "tc grow w-20 bg-light-green br3 pa2 ma2 dib bw2 shadow-5">
            <img src = {`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2> { name } </h2>
                <p> height: {height} </p>
                <p> Mass: {mass} </p>
                <p> Birth Year: {birth_year} </p>
                <p> Gender: {gender} </p>
            </div>
        </div>
    );
}

export default Card;