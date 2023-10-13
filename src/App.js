import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { MasterData } from './Pages/MasterData';
import { AddButton } from './Pages/HomePageDown/AddButton';
import { HomeNewbar } from './Component/HomeNavebar';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/masterdata' element={<MasterData />}></Route>
          <Route path='/addbutton' element={<AddButton/>}></Route>
          <Route path='/homenavbar' element={<HomeNewbar/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
