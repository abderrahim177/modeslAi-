import Dashboard from "./Components/pages/Dashboard";
  import { Routes, Route, Navigate } from 'react-router-dom';
  import LoginPage from './Components/Auth/Login'
function App() {

  return (
  <Routes>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/" element ={<Dashboard />}/>
  </Routes>
);
}
export default App;