import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from './components/Heading';
//import Home from './components/Home';
import AddUser from './components/AddUser';
import Login from './components/Login';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';
import UpdateUser from './components/UpdateUser';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <>
    <Heading />
    <BrowserRouter>
    <div className="content">
    <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:id" element={<SingleUser/>}></Route>
        <Route path="/:id/update/" element={<UpdateUser/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;