import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import User from './Components/User';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Header/><Home/></> 
    },
    {
      path: "/service",
      element: <> <Header/><Service/></>
    },
    {
      path: "/about",
      element: <><Header/><About/></>
    },
    {
      path: "/user",
      element: <><Header/><User/></>
    }
  ]);

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
