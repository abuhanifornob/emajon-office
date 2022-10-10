import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import { productAndCartLoaders } from './loaders/productAndCartLoaders';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'orders',
          loader:productAndCartLoaders,
          element:<Orders></Orders>        
        },
        {
          path:'about',
          element:<About></About>
        }

      ]
    },
     ]);
  return (
    <div>
    
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
