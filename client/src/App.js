
import './App.css';
import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Button } from '@mui/material';
import Home from './Layout/Home';
import EdamamApi from './EdamamApi/EdamamApi';
import Ingredient from './EdamamApi/Ingredient';
import Recommend from './EdamamApi/Recommend';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import UserHome from './Layout/userHome';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AuthContext from './Context/AuthContext';

import { Protected } from './Components/Protected';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#432818',
      },
      secondary: {
        main: '#bb9457',
      },
      dark: {
        main: '#001d2f',
      },
      clear: {
        main: '#F4FAFC'
      },
      bar: {
        main: '#f9f8f2'
      }
    },
    typography: {

      fontFamily: ['Source Code Pro', 'monospace'].join(','), // Use a clean sans-serif font
      h1: {
        fontSize: '2.5rem', // Large headings
        fontWeight: 'bold', // Bold headings
      },
      h2: {
        fontSize: '2rem', // Subheadings
        fontWeight: 'bold',
      },
      body1: {
        fontSize: '1.3rem', // Regular text
      },
      button: {
        textTransform: 'none', // Don't uppercase button text
      },
    },
    shape: {
      borderRadius: 24, // Rounded corners for elements
    },
    // Customize spacing, shadows, and other properties as needed
  });


  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   axios.get('http://localhost:3001/api/recipes')
  //     .then((response) => setRecipes(response.data))
  //     .catch((error) => console.error(error));
  // }, []);
  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   axios.get('http://localhost:3001/api/edamam-recipes')
  //     .then((response) => setEdamamRecipes(response.data.hits)) // Access the "hits" array
  //     .catch((error) => console.error(error));
  // }, []);




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/edamamApi",
      element: <EdamamApi />
    },
    {
      path: "/ingredient",
      element: <Ingredient />
    },
    {
      path: "/recommend",
      element: <Recommend />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/userhome",
      element: <Protected><UserHome /></Protected>
    }
  ])

  return (
    <ThemeProvider theme={theme}>

      {/* <Routes>
        <Route path="" element={<Home />} />
        <Route path="/edamamApi" element={<EdamamApi />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes> */}
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>



    </ThemeProvider>
  );
}

export default App;
