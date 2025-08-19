import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RenderAuth from './pages/AuthPage.js';
import Login from './components/SingIn.js';
import CreateUser from './components/CreateUser.js';
import Dashboard from './pages/DashboardPage.js';
import Schedule from './components/schedule.js';
import ToDoList from './components/toDoList.js';

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
            <Route path='/dashboard/' element={<Dashboard/>}>
              <Route path='schedule' element={<Schedule/>}/>
              <Route path='task' element={<ToDoList/>}/>
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
