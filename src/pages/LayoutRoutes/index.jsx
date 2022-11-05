import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import * as LayoutPages from '../../apps/Layout/pages'
import {useAuth} from "../../providers/useAuth";
import Navbar from "../../components/Navbar";

function LayoutRoutes() {
  const navigate = useNavigate()
  const {users} = useAuth()

  React.useEffect(() => {
    users && navigate('/main')
  }, [])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/main'} element={<LayoutPages.Main/>}/>
        <Route path={'/admin'} element={<LayoutPages.Admin/>}/>
        <Route path={'/admin/add'} element={<LayoutPages.AddStudents/>}/>
        <Route path={'/admin/all'} element={<LayoutPages.AllStudents/>}/>
        <Route path={'*'} element={<LayoutPages.Main/>}/>
      </Routes>
    </>
  );
}

export default LayoutRoutes;