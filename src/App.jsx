import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './Header.jsx';
import ThreadsList from './ThreadsList.jsx';
import New from './threads/New.jsx';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/threads/new" element={<New />} />
            <Route path="/" element={<ThreadsList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
