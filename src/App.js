import React from "react";
import './App.css';
import AuthRoutes from "./pages/AuthRoutes";
import LayoutRoutes from "./pages/LayoutRoutes";
import {useAuth} from "./providers/useAuth";
import axios from "axios";

axios.defaults.baseURL = 'https://school-crud-afc34-default-rtdb.asia-southeast1.firebasedatabase.app'

function App() {
  const {users} = useAuth()
  return users ? <LayoutRoutes/> : <AuthRoutes/>
}

export default App;
