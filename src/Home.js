import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box display='flex' justifyContent='center'>
        <Stack direction='column'>
        <Typography variant='h2'>Tic-Tac-Toe Game</Typography>

        <Box sx={{height:200}}></Box>

        <Box sx={{border:'solid 2px black' , borderRadius:'10px' , padding:5}}>
            <Typography variant='h4' textAlign='center'>Choose the mode of gameplay</Typography>
            <br/>
            <Stack direction='row' spacing='5' display='flex' justifyContent='space-evenly'  alignItems='center'>
                <Button variant='outlined' component={Link}  to=''>Single</Button>
                <Button variant='contained' component={Link} to='/multi-player-game'>Multiple</Button>
            </Stack>
        </Box>

        </Stack>
      </Box>
    </>
  )
}

export default Home
