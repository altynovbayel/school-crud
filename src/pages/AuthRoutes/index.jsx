import React from "react";
import * as AuthPages from '../../apps/Auth/pages'
import {Route, Routes, useNavigate} from "react-router-dom";
import { useAuth } from "../../providers/useAuth";

function AuthRoutes() {
  const navigate = useNavigate()
  const {users} = useAuth()
  
  React.useEffect(() => {
    !users && navigate('/auth/login')
  }, [users])
  
  return (
    <React.Fragment>
      <Routes>
        <Route path={'/auth/login'} element={<AuthPages.Login/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default AuthRoutes;