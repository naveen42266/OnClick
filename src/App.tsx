import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages";
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
