import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// import all component
import Username from './component/Username/Username';
import Password from './component/Password/Password';
import Register from './component/Register/Register';
import Profile from './component/Profile/Profile';
import Recovery from './component/Recovery/Recovery';
import Reset from './component/Reset/Reset';
import PageNotFound from './component/PageNotFound/PageNotFound';



import './App.css';
// root routes
      const router= createBrowserRouter([{

        path:'/',
        element:<Username/>,
          },

        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
        ,
        {
          path:'/recovery',
          element:<Recovery/>
        },
        {
          path:'/password',
          element:<Password/>
        },
        {
          path:'*',
          element:<PageNotFound/>
        },
        {
          path:'/reset',
          element:<Reset/>
        }

      ])

function App() {
  return (
    
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    
  );
}

export default App;
