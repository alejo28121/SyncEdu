import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RenderAuth from './pages/AuthPage.js';
import Login from './components/webCom/SingIn.js';
import CreateUser from './components/webCom/CreateUser.js';
import Dashboard from './pages/DashboardPage.js';
import Schedule from './components/dashboardCom/schedule.js';
import ToDoList from './components/dashboardCom/toDoList.js';
import AddTask from './components/dashboardCom/addTask.js'
import LandingPage from './pages/landingPage.js';
import TemporalView from './components/webCom/temporalPt.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path="/auth/">
              <Route path="login" element={<TemporalView/>}/>
            </Route>
            <Route path="/authdev/" element={<RenderAuth/>}>
              <Route path="logindev" element={<Login/>}/>
              <Route path='register' element={<CreateUser/>}/>
            </Route>
            <Route path='/dashboard/' element={<Dashboard/>}>
              <Route path='schedule' element={<Schedule/>}/>
              <Route path='task' element={<ToDoList/>}>
                <Route path='addTask' element={<AddTask/>}/>
              </Route>
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
