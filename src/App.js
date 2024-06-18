import { } from 'react-icons/di';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from './composants/header/Header'
const router = createBrowserRouter([
  {
    path: '/',
    element:  <div>
                   <Header/>
                   <h1>ok</h1>
              </div>
  }
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
