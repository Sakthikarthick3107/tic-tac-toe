import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, TextField, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import StyleBox from '../styles/StyleBox'
import MultiSquares from './MultiSquares'


const MultiBoard = () => {
  
    const[player1 , setPlayer1] = useState('')
    const[player2 , setPlayer2] = useState('')
    const[playerInfoDialog , setPlayerInfoDialog] = useState(true)
    const[val , setVal] = useState(Array(9).fill(null))
    const[XTurn , setXTurn] = useState(true)
    const[winner , setWinner] = useState(null)
    const[XWins , setXWins] = useState(0)
    const[OWins , setOWins] = useState(0)
    const[matchFinish , setMatchFinish] = useState(false)

    const closeMenu = (e) =>{
        e.preventDefault()
        console.log(player1 ,  player2)
        setPlayerInfoDialog(!playerInfoDialog)
    }
    

    useEffect(() => {
        const interval = setInterval(() => {
            const winningLogic = [
                [0 , 1 , 2],
                [3 , 4 , 5],
                [6 , 7 , 8],
                [0 , 3 , 6],
                [1 , 4 , 7],
                [2 , 5 , 8],
                [0 , 4 , 8],
                [2 , 4 , 6]
            ]
        for(let logic of winningLogic){
            let [a , b , c] = logic
            if(val[a] !==null && val[a] === val[b] && val[a] === val[c]){
                setMatchFinish(true)
                if(val[a] === 'X'){
                    setWinner(player1)
                    setXWins((p) => p+1)
                    clearInterval(interval)
                }
                else{
                    setWinner(player2)
                    setOWins((p) => p+1)
                    clearInterval(interval)
                }
                
            }       
        }
        },30);
        return () => clearInterval(interval)
    },[player1,player2,val])

    const setGame = (e) =>{
        if(val[e] === null && winner === null){
            const copy = [...val]
            copy[e] = XTurn? 'X' : 'O'
            setVal(copy)
            setXTurn(!XTurn)
        }
        
        else if(matchFinish){
            alert("Game is already ended")
        }
        

    }
    const playNextMatch =() =>{
        setMatchFinish(false)
        setWinner(null)
        const copy = Array(val.length).fill(null)
        setVal(copy)
        setXTurn(true)
    }
    
  return (
    <>
    <StyleBox>
        <Typography variant='h2' m={8}>Multiplayer </Typography>
    </StyleBox>
    <Box>
            
            <Container  maxWidth='md'>
                <StyleBox>
                    <MultiSquares value={val[0]} gameplay={()=>setGame(0)} endGame={matchFinish} />
                    <MultiSquares value={val[1]} gameplay={()=>setGame(1)} endGame={matchFinish}/>
                    <MultiSquares value={val[2]} gameplay={()=>setGame(2)} endGame={matchFinish}/>
                </StyleBox>

                <StyleBox>
                    <MultiSquares value={val[3]} gameplay={()=>setGame(3)} endGame={matchFinish}/>
                    <MultiSquares value={val[4]} gameplay={()=>setGame(4)} endGame={matchFinish}/>
                    <MultiSquares value={val[5]} gameplay={()=>setGame(5)} endGame={matchFinish}/>
                </StyleBox>

                <StyleBox>
                    <MultiSquares value={val[6]} gameplay={()=>setGame(6)} endGame={matchFinish}/>
                    <MultiSquares value={val[7]} gameplay={()=>setGame(7)} endGame={matchFinish}/>
                    <MultiSquares value={val[8]} gameplay={()=>setGame(8)} endGame={matchFinish}/>
                </StyleBox>
            </Container>
            <br/>
            {!playerInfoDialog &&
            <Stack  direction='row' justifyContent='space-around'>
                <StyleBox>
                    <Stack direction='column' textAlign='center'>
                        <Typography variant='h4'>{player1}</Typography>
                        <Typography variant='h6'>{XWins}</Typography>
                    </Stack>
                </StyleBox>
                <Typography variant='h3'>Vs</Typography>

                <StyleBox>
                    <Stack direction='column' textAlign='center'>
                        <Typography variant='h4'>{player2}</Typography>
                        <Typography variant='h6'>{OWins}</Typography>
                    </Stack>
                </StyleBox>

            </Stack>}
     
        

      </Box>

      {matchFinish &&
        <StyleBox>
            <Stack direction='column' spacing={2}>
                <Typography variant='h2' >{winner} Wins</Typography>
                <Button color='error' variant='contained' onClick={playNextMatch}>Next Match</Button>
            </Stack>
        
            
        </StyleBox>}
        

        <Dialog open={playerInfoDialog} onClose={()=>closeMenu}>
            <DialogTitle>Player Details</DialogTitle>
            <form onSubmit={closeMenu}>
            <DialogContent>
                <Stack  direction='row' spacing={2}>
                    <TextField required label="Player 1" variant='standard' name='player1' value={player1} onChange={(e)=>setPlayer1(e.target.value)} />
                    <TextField required label="Player 2" variant='standard' name='player2' value={player2} onChange={(e)=>setPlayer2(e.target.value)} /> 
                </Stack>
                
            
            </DialogContent>
            <DialogActions>
                <Button variant='contained' type='submit' >Start Game</Button>
            </DialogActions>
            </form>
        </Dialog>
    </>
  )
}

export default MultiBoard
