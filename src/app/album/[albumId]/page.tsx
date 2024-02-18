


import React from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import { TextField, Typography, Button, Box, Rating } from '@mui/material';
import NavsComponent from "../../_components/NavsComponent";

import AlbumReviewForm from "./reviewform";

export default async function AlbumInfoPage({
  params,
}: {
  params: { albumId: string };
}) {
  const album = await api.album.getAlbumById.query({ id: params.albumId });
  const session = await getServerAuthSession();

  const reviews = await api.review.getReviewsByAlbumId.query({
    albumId: params.albumId,
  });
  console.log(album?.image);
  return(
    <Box style={{ backgroundColor: "#391F67" , overflow:"hidden"}}>
      <NavsComponent/>
      <Stack
        sx={{ height: "100vh", width: "100vw", overflow:"hidden"}}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{ color: "#FFFFFF", height: "100vh", width: "30vw",overflow:"hidden" }}>
          <img
            className="relative max-h-full max-w-full flex-1 self-stretch overflow-hidden"
            alt=""
            src={album.image ?? undefined}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
          <Typography variant="h3" component="h2">
            Track List
          </Typography>
          <List>
            {album?.tracks.map((track) => {
              return (
                <ListItem key={track}>
                  <ListItemText primary={track} style={{ color: "#FFFFFF" }} />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",
            height: "100vh",
            width: "70vw",
            padding: "20px",
          }}
        >
          <Stack
            sx={{ height: "100vh", width: "100vw" }}
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <Typography variant="h3" component="h2">
              {album?.name}
            </Typography>
            <Typography variant="h4" component="h2">
              {"Artist: " + album?.artist}
            </Typography>
            <Typography variant="h4" component="h2">
              {"Release Date: " + album?.releaseDate}
            </Typography>
            <AlbumReviewForm albumId={album.id}/>
            <List>
              {reviews?.map((review) => {
                return (
                  <Box display="flex" marginBottom="16px" key={review.id}>
                    <Avatar
                      alt={session?.user?.name ?? undefined}
                      src={session?.user.image ?? undefined}
                    />
                    <div>
                      <Typography variant="subtitle1">
                        {session?.user.name}
                      </Typography>
                      <Typography>{review.rating}</Typography>
                      <Typography fontStyle="italic">
                        {review.message}
                      </Typography>

                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                          <Typography variant="body1">User Rating:</Typography>
                          <Rating
                            name="user-rating"
                            value={review.rating}
                            precision={0.5}
                            readOnly
                          />
                          <Typography variant="body1">{review.rating}/10</Typography>
                        </div>
                        <Typography variant="body1">{review.message}</Typography>
                      </div>
                    </div>
                  </Box>
                );
              })}
            </List>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
