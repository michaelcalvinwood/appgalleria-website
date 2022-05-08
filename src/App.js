import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import SerenityRegardlessTimer from './pages/SerenityRegardlessTimer/SerenityRegardlessTimer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Main />} />
          <Route 
            path="/apps/serenity-regardless-timer" 
            element={<SerenityRegardlessTimer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
