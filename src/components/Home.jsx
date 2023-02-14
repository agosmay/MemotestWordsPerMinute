import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
	
	
	return (
		<>
			<h1>Welcome to Memotest Game</h1>
			<h2>Tap on Topic to Play</h2>
			<Link to="/tech" className="link">Tech</Link>
			<br />
			<Link to="/animals" className="link">Animals</Link>
			<br />
			<Link to="/weather" className="link">Weather</Link>
			<br />
			<Link to="/sports" className="link">Sports</Link>
			<br />
			<Link to="/emoji" className="link">Emoji</Link>
			<br />
			<br/>
			<h2>Also Play...</h2>
			<Link to="/wpm" className="link">Go to Words Per Minute!</Link>
			
		</>
	
	);
	
	
}


export default Home;