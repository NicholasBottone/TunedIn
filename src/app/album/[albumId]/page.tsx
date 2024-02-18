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
  return (<div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
  <div className="flex flex-row items-start justify-start  box-border max-w-full">
  <header
  className="flex-1 bg-gray-200 flex flex-row items-start justify-between pt-[37px] pb-[35px] pr-[30px] pl-[75px] box-border gap-[20px] max-w-full z-[1] text-left text-5xl text-white font-lexend mq750:pl-[37px] mq750:box-border"

>
  <NavsComponent/>
  <div className="w-[239px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start pt-2 pb-[9px] pr-0 pl-[26px]">
      <img
        className="h-6 w-[27px] relative"
        alt=""
        src="/sign-in-button-frame.svg"
      />
      <h2
        className="m-0 h-[34.2px] flex-1 relative text-inherit capitalize font-normal font-inherit flex items-center whitespace-nowrap"
  
      >
        Sign In
      </h2>
    </div>
  </div>
</header>
</div>
  <main className="w-[1466px] flex flex-row items-start justify-start py-0 pr-12 pl-5 box-border max-w-full shrink-0 lg:pr-6 lg:box-border">
    <section className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-13xl text-white font-lexend">
    <div className="w-[1356px] flex flex-row items-start justify-start gap-[29px] max-w-full text-left text-45xl text-white font-lexend lg:flex-wrap">
      <div className="h-[441px] w-[441px] flex flex-row items-start justify-start py-2.5 pr-[35px] pl-2.5 box-border min-w-[441px] max-w-full lg:flex-1 mq750:min-w-full">
        <img
          className="h-[396px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover lg:flex-1"
          loading="eager"
          alt=""
          src={album.image ?? undefined}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[576px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 h-[91px] flex-1 relative text-inherit lowercase font-semibold font-inherit inline-block max-w-full mq1050:text-32xl mq450:text-19xl">
          {album?.name}
          </h1>
        </div>
        <h3 className="m-0 w-[483px] h-14 relative text-17xl lowercase font-semibold font-inherit inline-block shrink-0 max-w-full mq1050:text-10xl mq450:text-3xl">
        {album?.artist}

        </h3>
        <div className="w-[451px] flex flex-col items-start justify-start gap-[27px] max-w-full text-5xl">
          <div className="self-stretch relative capitalize mq450:text-lgi">
            <span className="font-extralight">{"Release Date: "+album.releaseDate}</span>
          </div>
        </div>
        <div className="w-[451px] flex flex-col items-start justify-start gap-[27px] max-w-full text-5xl">
          <AlbumReviewForm albumId={album.id}/>

        </div>

      </div>
    </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[78px] max-w-full lg:flex-wrap mq750:gap-[78px] mq450:gap-[78px]">
          <div className="w-[365px] flex flex-col items-start justify-start gap-[24px] min-w-[365px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="w-[356px] h-[60px] relative capitalize font-medium flex items-end shrink-0 max-w-full mq1050:text-7xl mq450:text-lgi">
              Track List
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-5xl overflow-scroll	">
                {album.tracks.map((track,index)=>{
                  return (
                <div className="h-[72px] flex-1 relative capitalize font-light text-left flex items-center min-w-[106px] mq450:text-lgi">
                 {track}
                 </div>)


                })}
                
              
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[614px] max-w-full mq750:min-w-full">
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
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="self-stretch flex flex-row items-start justify-between pt-[57px] pb-[147px] pr-[140px] pl-[95px] box-border relative gap-[20px] max-w-full text-left text-xl text-neutral-900 font-body-xl-medium mq1050:flex-wrap mq750:pl-[47px] mq750:pr-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
  <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-darkslategray-200" />
  <div className="flex flex-row items-start justify-start pt-0 pb-[19px] pr-[35px] pl-0 relative gap-[8px] z-[1]">
    <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
      TunedIn is a private product
    </div>
    <div className="absolute my-0 mx-[!important] bottom-[-16.3px] left-[0px] leading-[28px] font-medium text-neutral-500 mq450:text-base mq450:leading-[22px]">
      https://
      <a
        className="text-[inherit]"
        href="https://landify.design/?ref=landifyuikit"
        target="_blank"
      >
        <span className="[text-decoration:underline]">w</span>
      </a>
      ww.tunedin.vercel.app
    </div>
  </div>
  <div className="w-[400px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[32px]">
    <img
      className="h-28 w-[134px] relative object-cover z-[1] mq450:flex-1"
      alt=""
      src="/appicon-1@2x.png"
    />
    <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[152px]">
      <img
        className="self-stretch h-[55px] relative max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/tunedinlogo-11.svg"
      />
    </div>
  </div>
</footer>
</div>);
  
  
  
  
  (
    <Box style={{ backgroundColor: "#391F67" }}>
      <Stack
        sx={{ height: "100vh", width: "100vw" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{ color: "#FFFFFF", height: "100vh", width: "30vw" }}>
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
