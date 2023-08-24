import { ProductProvider } from '../contexts/ProductProvider';
import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Product Catalogue</h1>
      <ProductProvider>
      <BrowserRouter>
      <AppRoutes/>   
      </BrowserRouter> 
      </ProductProvider>
    </div>
  );
}

export default App;
