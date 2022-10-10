import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import { cartAndProductData } from "./Loader/getCartProductData";
import Root from "./Root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage> ,
      element: <Root></Root>,
      loader:  cartAndProductData,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        },
        {
          path: '/home', 
          element:<Home></Home>
        },
        {
          path: '/shop',
          element: <Shop></Shop> 
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])

  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
