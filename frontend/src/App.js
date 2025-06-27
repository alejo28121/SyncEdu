import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/App.css';
import RenderAuth from './pages/AuthPage.js';
import Login from './components/SingIn.js';
import CreateUser from './components/CreateUser.js';
import Dashboard from './pages/DashboardPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/auth/" element={<RenderAuth/>}>
              <Route path="login" element={<Login/>}/>
              <Route path='register' element={<CreateUser/>}/>
            </Route>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
