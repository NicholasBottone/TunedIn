

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { api } from '~/trpc/server';

import React from 'react';
import { Typography, TextField, Grid, Stack, List, ListItem } from '@mui/material';
export default async function AlbumInfoPage({params}:{params: {albumId:string}}) {

    const album = await api.album.getAlbumById.query({id:params.albumId})

    console.log(album?.image)

    return (
      <Box width="100%" bgcolor="midnightblue" overflow="hidden" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" letterSpacing="normal">
        <Box className="header" bgcolor="gray.200" display="flex" flexDirection="row" alignItems="start" justifyContent="space-between" pt="37px" pb="35px" pr="30px" pl="75px" gap="20px" maxWidth="100%" zIndex="1" textAlign="left" fontSize="5xl" color="white" fontFamily="lexend">
          <Grid container justifyContent="space-between" alignItems="start">
            <Grid item>
              <Box display="flex" flexDirection="row" alignItems="start" justifyContent="start" gap="25px" maxWidth="100%">
                <img className="h-[68px] w-[76px] relative object-cover" alt="" src="/appicon@2x.png" />
                <Box height="14" flex="1" display="flex" flexDirection="column" alignItems="start" justifyContent="start" pt="3px" px="0" pb="0" boxSizing="border-box">
                  <img className="self-stretch flex-1 relative max-w-full overflow-hidden" alt="" />
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box className="search-bar" width="325px" bgcolor="darkslategray.100" borderRadius="xl" display="flex" flexDirection="row" alignItems="center" justifyContent="start" py="15px" px="10" gap="12px">
                <img className="h-[23px] w-[23px] relative overflow-hidden shrink-0" alt="" src="/empty-space.svg" />
                <TextField className="search-input" variant="standard" placeholder="Search for albums, artists, users..." />
              </Box>
            </Grid>
          </Grid>
          <Box className="sign-in" width="239px" display="flex" flexDirection="column" alignItems="start" justifyContent="start" pt="5px" px="0" pb="0" boxSizing="border-box">
            <Box className="sign-in-button" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" display="flex" flexDirection="row" alignItems="center" justifyContent="start" pt="2" pb="9px" pr="0" pl="26px" gap="16px" position="relative">
              <img className="h-6 w-[27px] relative" alt="" src="/sign-in-button-frame.svg" />
              <Box m="0" height="34.2px" flex="1" position="relative" fontFamily="inherit" fontSize="inherit" display="flex" alignItems="center" whiteSpace="nowrap">
                Sign In
              </Box>
              <Box className="sign-in-border" height="calc(100% + 2px)" width="184.6px" position="absolute" my="0" mx="!important" top="0" bottom="-2px" left="0" boxSizing="border-box" zIndex="1" border="1px solid white" />
            </Box>
          </Box>
        </Box>
        <Box className="main" display="flex" flexDirection="row" alignItems="start" justifyContent="start" py="0" pr="12" pl="5" boxSizing="border-box" maxWidth="100%" flexShrink="0">
          <Grid container justifyContent="start" alignItems="start">
            <Grid item>
              {/* Content */}
            </Grid>
            <Grid item>
              {/* Content */}
            </Grid>
          </Grid>
        </Box>
        <Box className="footer" width="100%" display="flex" flexDirection="row" alignItems="start" justifyContent="between" pt="57px" pb="147px" pr="140px" pl="95px" gap="20px" position="relative" textAlign="left" fontSize="xl" color="neutral.900" fontFamily="body-xl-medium">
          <Box className="overlay" height="100%" width="100%" position="absolute" my="0" mx="!important" top="0" right="0" bottom="0" left="0" bgcolor="darkslategray.200" />
          <Grid container justifyContent="start" alignItems="start">
            <Grid item>
              <Box className="tunedin-product" display="flex" flexDirection="row" alignItems="start" justifyContent="start" pt="0" pb="19px" pr="35px" pl="0" position="relative" gap="8px" zIndex="1">
                <Box className="tunedin-text" position="relative" lineHeight="28px" fontFamily="medium">
                  TunedIn is a private product
                </Box>
                <Box className="tunedin-link" position="absolute" my="0" mx="!important" bottom="-16.3px" left="0" lineHeight="28px" fontFamily="medium" color="neutral.500">
                  https://
                  <a className="tunedin-link" href="https://landify.design/?ref=landifyuikit" target="_blank">
                    <Box component="span" >w</Box>
                  </a>
                  ww.tunedin.vercel.app
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" flexDirection="row" alignItems="start" justifyContent="start" gap="32px">
                <img className="h-28 w-[134px] relative object-cover z-[1]" alt="" src="/appicon-1@2x.png" />
                <Box className="tunedin-logo" flex="1" display="flex" flexDirection="column" alignItems="start" justifyContent="start" pt="3.5" px="0" pb="0" boxSizing="border-box" minWidth="152px">
                  <img className="self-stretch h-[55px] relative max-w-full overflow-hidden shrink-0 z-[1]" alt="" src="/tunedinlogo-11.svg" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
    return (
      <Box style={{ backgroundColor: "#391F67"}}>

      <Stack
        sx={{ height: '100vh', width: "100vw" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{ color: "#FFFFFF", height: '100vh', width: "30vw", }}>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src={album!.image ?? undefined}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
          <Typography variant="h3" component="h2">
            Track List
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Single-line item" style={{ color: "#FFFFFF" }} />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ color: "#FFFFFF", height: '100vh', width: "70vw", padding: '20px' }}>

          <Stack
            sx={{ height: '100vh', width: "100vw" }}
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <Typography variant="h3" component="h2">
              {album?.name}
            </Typography>
            <Typography variant="h4" component="h2">
              {"Artist: "+album?.artist}
            </Typography>
            <Typography variant="h4" component="h2">
              {"Release Date: "+album?.releaseDate}
            </Typography>
          </Stack>

        </Box>
      </Stack>
    
    </Box>
    
  )
}
