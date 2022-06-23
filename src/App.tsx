import React from 'react'
import './App.css'
import Registration from './Components/Registration'
import {Box} from '@mui/material'

function App() {
    return (
        <Box
            className="App"
            width="100vw"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{backgroundImage: 'linear-gradient(to bottom right, #b077ee, #59d1f2)'}}>
            <Registration />
        </Box>
    )
}

export default App
