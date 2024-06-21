

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './style/main.scss';
import Header from './composants/Header';
import Bandeau from './composants/Bandeau';
import Gallery from './composants/Gallery';
import Footer from './composants/Footer';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <>
              <Header/>
              <Bandeau/>
              <Gallery/>
              <Footer/>
              </>
  },

]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
