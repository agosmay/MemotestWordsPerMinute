import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/WordsPerMinute.css';


const words = [
'abdomen', 
'abrazo', 
'luz', 
'sol', 
'palabra', 
'diferencia', 
'lluvia', 
'paraguas', 
'avispa', 
'abeja', 
'anteojos',
'cebra',
'erizo',
'pulpo',
'ladrillo',
'golosina',
'zapatillas',
'alfajor',
'ventilador',
'banco',
'silla',
'mesa'
];

const WordsPerMinute = () => {
const [word, setWord]= useState(()=> words[Math.random() * words.length | 0])
	
	const [characterCount, setCharacterCount] =  useState(0);
	const [buffer, setBuffer]= useState("");
	const [time, setTime]=useState(0);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(buffer===word){
			setWord(words[(Math.random()* words.length) | 0]);
			setCharacterCount(characterCount => characterCount + word.length);
			setBuffer("");
		}
		
		setBuffer("");
		
	}
	
	
	useEffect(()=> {
		if(time!==0) {
			const timeout = setTimeout(()=> setTime(time - 1),1000);
			return () => clearTimeout(timeout);
		}
		
	},[time]);
	
	
	
	const handleClick = () => {
		if(buffer!==word && time===0) {
			setBuffer("");
			setCharacterCount(0);
			
			
		}
		
		setTime(60)
		
	}
	
	
	
	return (
		<>
			<div className="contenedor-words" style={{display:"flex", flexDirection: "column", gap: 12, textAlign: "center"}}>
				{Boolean(time) && <h1 style={{fontSize: 48}}>{word}</h1>}
				<h1>Characters typed: {characterCount}</h1>
				
				<h3>Remaining time: {time}</h3>
					{time!==0 ? (
						
						<form onSubmit={handleSubmit}>
							<input style={{backgroundColor:"pink"}}type="text" autoFocus value={buffer} onChange={(e)=> setBuffer(e.target.value.toLowerCase())} />
							<button type="submit">Submit</button>
						</form>
					): (
						
						<button onClick={()=> handleClick()}> Play</button>
					)
					}
			</div>
			<div className="link-container">
				<Link to="/" className="link">Back to Home</Link>
			</div>
		</>
	
	);
}

export default WordsPerMinute;