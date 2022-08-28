import React from 'react';
import Typewriter from "typewriter-effect";
  
function TypeWriter() {
  return (
    <div className="typewriter">
      <Typewriter
      options={{
        loop:true,
      }}
       onInit={(typewriter)=> {
        
       typewriter
       
       .typeString("périphériques")
       .pauseFor(1000)
       .deleteAll()
       .typeString("ordinateurs")
       .pauseFor(1000)
       .deleteAll()
       .typeString("tablettes")
       .pauseFor(1000)
       .deleteAll()
       .start();
       }}
       />
    </div>
  );
}
  
export default TypeWriter;