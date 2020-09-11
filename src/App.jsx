import React from 'react'
let curDate=new Date();
curDate=curDate.getHours();
let greeting='';
const cssStyle={}
if(curDate<12){
  greeting='Good morning';
  cssStyle.color='green'

}
else if(curDate<18 ){
  greeting='Good afternoon';
  cssStyle.color='orange'
  
 
}
else if(curDate<20){
  greeting='Good evening'
  cssStyle.color='#ff4b5c'

}
else 
{
  greeting='Good night'
  cssStyle.color='#d92027'
 
}
const App=()=>{
  return(
    <div className='greeting'>
    <h1>Hello buddy <span style={cssStyle}>{greeting}</span> 😃</h1>
    </div>
  );
}
export default App;