import Algs from "./algs";
import Sub from "./submiting";
import { useState } from "react";
function App() {
  const [state, setstate] = useState(true)
  const cFun = ()=>{
    setstate((prev)=>{
      if (prev===true){
        return false

      }
      else{
        return true
      }
    })
  }
  return (
    <>
      <Sub getAlgs={cFun}/>
      <Algs st={state}/>
      
    </>
  );
}

export default App;
