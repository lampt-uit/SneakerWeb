import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPages from './components/mainpages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<MainPages />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
