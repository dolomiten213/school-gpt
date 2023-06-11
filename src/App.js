
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoute';
import Chat from './components/Chat';
import useToken from './hooks/useToken';
import PublicRoutes from './components/PublicRoute';

function App() {

  const { token } = useToken();

  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Chat/>} />
          </Route>
          <Route element={<PublicRoutes/>}>
            <Route path='/sign-up' element={<SignUp/>}/>
          </Route>
          <Route element={<PublicRoutes/>}>
            <Route path='/login' element={<Login/>}/>
          </Route>     
        </Routes>
    </Router>
  );
}

export default App;
