import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Profile } from './Pages/Profile';
import { SelectedUsers } from './Pages/SelectedUsers';
import { Users } from './Pages/Users';



function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4' >
        <Routes>
          <Route path='/' exact element={<Users />} />
          <Route path='/selectedUsers' element={<SelectedUsers />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
