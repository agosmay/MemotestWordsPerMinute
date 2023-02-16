import React from 'react';
import { Link } from 'react-router-dom';

const android = "https://icongr.am/devicon/android-original.svg?size=26&color=currentColor";
const paw = "https://icongr.am/simple/baidu.svg?size=26&color=ffdd00&colored=false";
const ray = "https://icongr.am/material/flash.svg?size=26&color=bb00ff";
const karate = "https://icongr.am/material/karate.svg?size=26&color=00aaff";
const devil = "https://icongr.am/material/emoticon-devil.svg?size=26&color=ff0004";


const Home = () => {
	
	
	return (
		<>
			<div className="memoList">
				<h1>Welcome to Memotest Game</h1>
				<h2>Tap on Topic to Play</h2>
				<br />
					<ul className="homeList">
						<li><img src={android} /><Link to="/tech" className="link">{" "}Tech</Link></li>
						<br />
						<li><img src={paw} /><Link to="/animals" className="link">{" "}Animals</Link></li>
						<br />
						<li><img src={ray} /><Link to="/weather" className="link">{" "}Weather</Link></li>
						<br />
						<li><img src={karate} /><Link to="/sports" className="link">{" "}Sports</Link></li>
						<br />
						<li><img src={devil} /><Link to="/emoji" className="link">{" "}Emoji</Link></li>
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