import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import DisplayAllUsers from './Users/DisplayAllUsers';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/adduser' element={<AddUser/>}/>
          <Route exact path='/user/:id' element={<EditUser/>}/>
          <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
          <Route exact path='/users/viewall' element={<DisplayAllUsers/>}/>
        </Routes>
    </div>
  );
}

export default App;
