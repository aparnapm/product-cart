import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Product Catalogue</h1>
      <BrowserRouter>
      <AppRoutes/>   
      </BrowserRouter> 
    </div>
  );
}

export default App;
