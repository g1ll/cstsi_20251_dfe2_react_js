/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useRef } from "react"
import "./searchBar.css"
// import { useState } from "react"

const SearchBar = ({filterFunction, disabled}) => {

//  const [searchInputState, setsearchInputState] = useState('')
 const searchInputRef = useRef(null)

 useEffect(() => {
    filterFunction('')
    searchInputRef.current.disabled = disabled
    // filterFunction(searchInputState)
 } , [disabled])

//  useEffect(() => { 
//     filterFunction(searchInputState)
//  }, [searchInputState])

 console.log('renderiza seachBar')
  return (
    <div className="search_bar">
        <input 
            type="search" 
            placeholder="Pesquisar produtos"
            disabled={disabled}
            
            ref={searchInputRef}
            onChange={()=>{
             console.log(searchInputRef.current.value)
             filterFunction(searchInputRef.current.value)
            }}
            
            // value={searchInputState}
            // onChange={(e)=>setsearchInputState(e.target.value)}
        
            />
        <button
            onClick={() => {
                console.log(searchInputRef.current.value)
                filterFunction(searchInputRef.current.value)
            }}
        > Pesquisar</button>
    </div>
  )
}

export default SearchBar