

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './style/main.scss';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import Error from './pages/Error';
import Logements from './pages/Logements';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Acceuil/>
  },
  {
    path: '/src/pages/Logements',
    element: <Logements/>
  },
  {
    path: '/src/pages/About',
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
