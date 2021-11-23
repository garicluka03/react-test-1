import React from 'react'
import { useState } from 'react'
const App = ({className,st}) => {
    const [change, setChange] = useState(true)
    if (!localStorage.getItem("storedalgs")){
        localStorage.setItem("storedalgs", JSON.stringify([]))
      }
    let currList = JSON.parse(localStorage.getItem("storedalgs"))
    const deleteEl = (num)=>{
        const curr = JSON.parse(localStorage.getItem("storedalgs"))
        curr.splice(num, 1)
        for(let i =0;i<curr.length;i++){
            curr[i][3]=i;
        }
        localStorage.setItem("storedalgs", JSON.stringify(curr))
        setChange((prev)=>{
            if (prev===true){
              return false
      
            }
            else{
              return true
            }
          })
        
    }
    const changeCheck = (num, check)=>{
        const curr = JSON.parse(localStorage.getItem("storedalgs"))
        curr[num][4] = !check
        localStorage.setItem("storedalgs", JSON.stringify(curr))
        setChange((prev)=>{
            if (prev===true){
              return false
      
            }
            else{
              return true
            }
          })
    }
    return (
        <div className={className}>
            {currList.map(item=>{
                return(
                    <div className={"individual"} key={item[3]}>
                        <p className={"desc"}>type: </p>
                        <p className={"real"}>{item[0]}</p>
                        <p className={"desc"}>name: </p>
                        <p className={"real"}>{item[1]}</p>
                        <p className={"desc"}>algorithm: </p>
                        <p className={"real"}>{item[2]}</p>
                        <input onClick={()=>deleteEl(item[3])} type="button" value={"delete"}></input>
                        {item[4]?<input className={"green check"} onClick={()=>changeCheck(item[3],item[4])}  type="button" value={" "}></input>:<input className={"red check"} onClick={()=>changeCheck(item[3], item[4])}  type="button" value={" "}></input>}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default App
