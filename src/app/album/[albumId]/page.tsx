import React from 'react'


import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function AlbumInfoPage({params}:{params: {albumId:string}}) {
  return (
    
    <Box style={{backgroundColor:"#391F67",display:"flex"}}>
      

      <Stack
        sx={{height: '100vh',width:"100vw" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{ color:"#391F67", height: '100vh',width:"30vw" }}>
        
        <Typography variant="h1" component="h2" color={"#FFFFFF"}>
        Track List
        </Typography>
        </Box>
        <Box sx={{ color:"#391F67", height: '100vh',width:"70vw" }}>
        <Typography variant="h1" component="h2" color={"#FFFFFF"}>
          h1
        </Typography>
          
        </Box>
        
      </Stack>
        
    </Box>
  )
}
