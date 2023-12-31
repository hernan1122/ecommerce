import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import ShoppingCartProvider from '../context/Context';
import Home from './Home';
import MyAccount from './MyAccount';
import MyOrder from './MyOrder';
import MyOrders from './MyOrders';
import SignIn from './SignIn';
import NotFound from './NotFound';
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
