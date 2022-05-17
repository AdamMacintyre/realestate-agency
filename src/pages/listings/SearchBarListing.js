import React, { useRef, useEffect } from 'react'

import SearchIcon from '@material-ui/icons/Search';

function SearchBarListing({changeInput, onClicker, value, iconprop, iconfalse}) {

    const ref = useRef()
    useEffect(() => {

        const checkIfClickedOutside = e => {
    
          // If the menu is open and the clicked target is not within the menu,
    
          // then close the menu
    
          if (iconprop && ref.current && !ref.current.contains(e.target)) {
    
            iconfalse(false)
    
          }
    
        }
    
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
    
        return () => {
    
          // Cleanup the event listener
    
          document.removeEventListener("mousedown", checkIfClickedOutside)
    
        }
    
      }, [iconprop])

  return (

    <div className='searchBar' ref={ref}>
    <div className='searchBarInner'>
    <SearchIcon  className={"searchBarIcon" + ( !iconprop ?  " " : " searchBarIcon__open")} />
        <input
          className='header__searchInput'
          type='text'
          placeholder='Search By Address...'
          value={value}
          onChange={changeInput}
          onClick={onClicker}
        
          
        /> 

      {/* <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10l5 5 5-5z"></path></svg> */}
    </div>
  </div>
   
  )
}

export default SearchBarListing