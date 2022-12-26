import React from 'react'
import {AppBar, Toolbar} from '@mui/material';
import "./Header.css"

function Header() {
  return (
    <div>

<AppBar sx={{backgroundColor:"transparent",height:"100px"}}>
  
        <div className='todo'>
<p>TODO APP</p>
</div>
 
</AppBar>


    </div>
  )
}

export default Header