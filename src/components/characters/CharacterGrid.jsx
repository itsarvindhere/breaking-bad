import React from 'react';
import Character from "./Character";
import Spinner from "../ui/Spinner";
const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />) : (
        <section className="cards">
            {items.map(item => {
                return (
                    <Character key={item.char_id} item={item}/>
                )
            })}
        </section>
    )
}

export default CharacterGrid;
