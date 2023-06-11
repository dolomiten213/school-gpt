
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoute';
import Chat from './components/Chat';

function App() {

  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path='/chat' element={<Chat/>} />
          </Route>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
    </Router>
  );
}

export default App;
