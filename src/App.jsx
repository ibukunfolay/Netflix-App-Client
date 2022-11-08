import React from 'react';
import { Home, Login, Register, Watch } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './app.scss';

const App = () => {
  const { user } = useSelector((state) => state.userSignin);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
