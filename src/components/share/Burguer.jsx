import React from 'react'

function Burguer(props) {
  return (
    <>
        <input type="checkbox" id="menu_checkbox" onClick={props.handleClick}/>
          <label htmlFor="menu_checkbox" >
            <div></div>
            <div></div>
            <div></div>
          </label>
    </>
  )
}

export default Burguer