import { ProductProvider } from '../contexts/ProductProvider';
import { ShippingInfoProvider } from '../contexts/ShippingInfoProvider';
import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
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
