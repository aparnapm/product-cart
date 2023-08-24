import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { ProductProvider } from '../contexts/ProductProvider';
import { ShippingInfoProvider } from '../contexts/ShippingInfoProvider';
import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ToastContainer
      position='top-left'
      autoClose={2000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      newestOnTop={false}
      hideProgressBar={false}
      theme='colored'
      />
      <h1>Product Catalogue</h1>
      <ShippingInfoProvider>
      <ProductProvider>
      <BrowserRouter>
      <AppRoutes/>   
      </BrowserRouter> 
      </ProductProvider>
      </ShippingInfoProvider>
    </div>
  );
}

export default App;
