import Memotest from './components/Memotest';
import WordsPerMinute from './components/WordsPerMinute';
import Pokemon from './components/Pokemon';
import { BrowserRouter, Routes , Route } from 'react-router-dom';



const App = () => {
  

  return (
	<BrowserRouter>
		<Routes>
		
			<Route 
				path="/memotest" 
				element={<Memotest />}
			/>
			<Route 
				path="/wpm" 
				element={<WordsPerMinute />}
			/>
			<Route 
				path="/pokemon" 
				element={<Pokemon />}
			/>
		
		</Routes>
	</BrowserRouter>
  )
}

export default App
