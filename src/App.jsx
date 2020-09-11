import React, { useState } from "react";

const App = ()=>
{
  let time=new Date().toLocaleTimeString();
  const [currenttime,setcurrentTime]=useState("time");
  const updateTime = () =>
  {
      let newtime =new Date().toLocaleTimeString();
      setcurrentTime(newtime);
     
  }
  setInterval(updateTime,1000);
  
    return (

        <>
        <h1>{currenttime}</h1>
        </>
    );
}
export default App;
