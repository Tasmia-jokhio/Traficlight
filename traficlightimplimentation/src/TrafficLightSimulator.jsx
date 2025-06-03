import React from "react";
import { useEffect,useRef } from "react";

export const TrafficLightSimulator = () => {

    const {state}=useState();
    const divforgreen=useRef();
    function toggleHandlerforgrean(){
    if(divref.current.style.backgroundColor==="lightslategray"){
      divref.current.style.backgroundColor="green"

    }
    else if(divrefred.current.style.backgroundColor==="lightslategray"){
      divref.current.style.backgroundColor="red"

    }

    else if(divrefyellow.current.style.backgroundColor==="lightslategray"){
      divref.current.style.backgroundColor="yellow"

    }

    else{
      divref.current.style.backgroundColor="lightslategray"
    }
  }

  return (
    <>
      <div
        className="outer"
        
      >
        <div
          className="inner" ref={divforgreen}
         
        ></div>
        <div
          className="inner"  ref={divforyellow}
         
        ></div>
        <div
          className="inner" ref={divforred}
        
        ></div>
      </div>
    </>
  );
};
