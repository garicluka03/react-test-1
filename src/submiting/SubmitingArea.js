import React, { useState } from 'react'
import App from '../algs/App'
import { useEffect } from 'react'
const SubmitingArea = ({className, getAlgs2}) => {
    const [nameAlg, setNameAlg]=useState("")
    const [realAlg, setRealAlg]=useState("")
    const [typeAlg, setTypeAlg]=useState("oll")
    const changeType = (e) =>{
        setTypeAlg(e.target.value)
    }
    if (!localStorage.getItem("storedalgs")){
        getAlgs2()
      }

    const changeName = (e) =>{
        setNameAlg(e.target.value)
    }
    const changeReal = (e) =>{
        setRealAlg(e.target.value)
    }

    const submitAll = (e) =>{
        if (!localStorage.getItem("storedalgs")){
            localStorage.setItem("storedalgs", JSON.stringify([]))
          }
        e.preventDefault()
        const curr = JSON.parse(localStorage.getItem("storedalgs"))
        let idNum = curr.length
        let saveAll = [typeAlg, nameAlg, realAlg, idNum, false]
        setTypeAlg("oll")
        setNameAlg("")
        setRealAlg("")
        curr.push(saveAll)
        localStorage.setItem("storedalgs", JSON.stringify(curr))
        getAlgs2()
        

    }
    return (
        <div className={className}>
            <form onSubmit={(e)=>submitAll(e)}>
                <label htmlFor="typeAlg">choose type: </label>
                <select onChange={(e)=>changeType(e)} name='typeAlg' id="typeAlg" value={typeAlg}>
                    <option value="OLL">OLL</option>
                    <option value="PLL">PLL</option>
                    <option value="f2L">F2L</option>
                    <option value="other">other</option>
                </select>
                <label htmlFor="name1">name: </label>
                <input type="text" name="name1" onChange={(e)=>changeName(e)} value={nameAlg}></input>
                <label htmlFor="alg" >type algorithm: </label>
                <input type="text" name="alg" onChange={(e)=>changeReal(e)} value={realAlg}></input>
                <input type="submit" value=" + " />
            </form>
        </div>
    )
}

export default SubmitingArea
