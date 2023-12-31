
import { Navigate, Outlet } from 'react-router-dom'
import useToken from '../hooks/useToken';

export default function PrivateRoutes() {

  const { token } = useToken();

  return (
    token ? <Outlet/> : <Navigate to='/login'/>
  )
}