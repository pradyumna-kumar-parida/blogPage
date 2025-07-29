import React from 'react'
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import Blog_form from './Blog_form';
import { useState } from "react";
import App from './App';
import { useNavigate } from 'react-router-dom';

 export const Nav =()=>{

  //  const navigate = useNavigate()
  const [isOpen, setIsOpen] =useState(false);
    const handleClick = () => {
    if (isOpen) {
      // navigate(-1); // 👈 back to previous page
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav>
        <span>
          <h1>blog page</h1>
          <Fab color="primary" aria-label="add" id="add_btn" onClick={() =>handleClick()}>
            {isOpen ? <NavigationIcon /> : <AddIcon />}
          </Fab>
        </span>
      </nav>
    
      {isOpen ? <App/> : <Main />}
    </>
  );
 }
 export const Main =()=>{
   return(
     <main>
       <span>
         <h2>Welcome to the Blog Page</h2>
       </span>
     </main>
   )
 }
  
