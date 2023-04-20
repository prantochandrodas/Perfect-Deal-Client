import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
