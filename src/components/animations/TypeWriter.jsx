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
       
       .typeString("Périphériques")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Ordinateurs")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Tablettes")
       .pauseFor(1000)
       .deleteAll()
       .start();
       }}
       />
    </div>
  );
}
  
export default TypeWriter;