import React from "react";

import App from "./App";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import renderer from 'react-test-renderer';

import "@testing-library/jest-dom/extend-expect";

import * as rtl from "@testing-library/react";


it("Display" , ()=>{

  const score = 4;
  const displayComponent = renderer.create(<Display homeScore ={score} />)
  


  console.log(displayComponent)
  
  

})


