import Memotest from './components/Memotest';
import WordsPerMinute from './components/WordsPerMinute';
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
			
		</Routes>
	</BrowserRouter>
  )
}

export default App
