import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './Pages/Profile';
import { SelectedUsers } from './Pages/SelectedUsers';
import { Users } from './Pages/Users';
import { Sidebar } from './Components/Sidebar';



function App() {


  return (
    <BrowserRouter >
      <Sidebar />
      <div className='container p-4 ' >
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
