import React from 'react'


import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { api } from '~/trpc/server';





export default async function AlbumInfoPage({params}:{params: {albumId:string}}) {

    const album = await api.album.getAlbumById.query({id:params.albumId})
    console.log(album?.image)
    return (
    
    <Box style={{backgroundColor:"#391F67",display:"flex"}}>
      

      <Stack
        sx={{height: '100vh',width:"100vw" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{ color:"#391F67", height: '100vh',width:"30vw" }}>
        <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src={album.image}
        />
        <Typography variant="h1" component="h2" color={"#FFFFFF"}>
        Track List
        </Typography>
        <List>
              {
                <ListItem>
                  <ListItemText
                    style={{color:"#FFFFFF"}}
                    primary="Single-line item"
                  />
                </ListItem>
              }
            </List>
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
