

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './style/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logements from './pages/Logements';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/src/pages/Logements/:id',
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
