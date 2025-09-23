import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoriteUsers from './Components/PTIT_CNTT4_IT104_Session35_Exercises07/FavoriteUsers' 
import LanguageSwitcher from './Components/PTIT_CNTT4_IT104_Session35_Exercises06/LanguageSwitcher' 
 import SidebarMenu from './Components/PTIT_CNTT4_IT104_Session35_Exercises05/SidebarMenu' 
import ThemeToggle from './Components/PTIT_CNTT4_IT104_Session35_Exercises03/ThemeToggle' 
import DisplaySwitcher from './Components/PTIT_CNTT4_IT104_Session35_Exercises04/DisplaySwitcher' 
 import Counter from './Components/Counter' // import StudentManager from './component/StudentManager' 
 import Random from './Components/PTIT_CNTT4_IT104_Session35_Exercises02/Random'
export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <StudentManager /> */}
      {/* <Random /> */}
      {/* <ThemeToggle /> */}
      {/* <DisplaySwitcher /> */}
      {/* <SidebarMenu /> */}
      {/* <LanguageSwitcher /> */}
      {/* <FavoriteUsers /> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}