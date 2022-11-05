import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
