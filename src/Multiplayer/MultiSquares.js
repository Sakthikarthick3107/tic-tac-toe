import { Typography } from '@mui/material'
import React, { useState } from 'react'

const MultiSquares = ({value , gameplay , endGame}) => {
    const [isHovered , setIsHovered] = useState(false)
  return (
    <div style={{
        color: value==='X'?'red':'blue',
        height:100,
        width:100, 
        backgroundColor: isHovered&& !endGame ? '#eeeeee':'transparent',
        border: 'solid 1px black' ,
        display:'flex' , 
        alignItems:'center' , 
        cursor: endGame? 'help' :'pointer',
        justifyContent:'center',
        '&:hover':{
            backgroundColor: 'green'
        }
        }} onClick={gameplay} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} >
      <Typography variant='h2'> {value}</Typography>
    </div>
  )
}

export default MultiSquares
