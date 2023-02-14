import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
	
	
	return (
		<>
			<div className="memoList">
				<h1>Welcome to Memotest Game</h1>
				<h2>Tap on Topic to Play</h2>
				<br />
					<ul className="homeList">
						<li><Link to="/tech" className="link">Tech</Link></li>
						<br />
						<li><Link to="/animals" className="link">Animals</Link></li>
						<br />
						<li><Link to="/weather" className="link">Weather</Link></li>
						<br />
						<li><Link to="/sports" className="link">Sports</Link></li>
						<br />
						<li><Link to="/emoji" className="link">Emoji</Link></li>
					</ul>
					<br />
					<br/>
					<h2>Also Play...</h2>
					<ul className="homeList">
						<li><Link to="/wpm" className="link">Go to Words Per Minute!</Link></li>
					</ul>
			</div>
			
		</>
	
	);
	
	
}


export default Home;