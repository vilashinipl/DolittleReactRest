import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import EditPet from './Admin/EditPet';
import AddPet from './Admin/AddPet';
import ViewPet from './Pages/ViewPet';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditPet/>}/>
        <Route exact path='/Dashboard/add' element={<AddPet/>}/>
        <Route exact path='/View/:productId' element={<ViewPet/>}/>
      </Routes>
  );
}

export default App;
