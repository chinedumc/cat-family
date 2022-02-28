import React from 'react'
import  './card.style.css'

export const Card = (props) => {
  return (
		<div className='card-container' >
			<img src={`https://robohash.org/${props.monstera.id}?set=set4&size=150x150`} alt="monster" />
			<h3 >{props.monstera.name} </h3>
			<p>{props.monstera.email}</p>
		</div>
	);
}