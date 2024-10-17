

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './style/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logements from './pages/Logements';

// Définition des routes
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Logements/:id',
    element: <Logements/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '*', 
    element: <Error/>
                   
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
