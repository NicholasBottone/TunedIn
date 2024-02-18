import { FunctionComponent } from "react";
import NavsFrameInstance from "./NavsFrameInstance";
import AppiconRectangle from "./AppiconRectangle";
import ReviewComponent from "./ReviewComponent";
import LandingPageComponent1 from "./LandingPageComponent1";

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const AlbumInfoPage: FunctionComponent = () => {
  return (
    // <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
    //   <NavsFrameInstance />
    //   <main className="w-[1466px] flex flex-row items-start justify-start py-0 pr-12 pl-5 box-border max-w-full shrink-0 lg:pr-6 lg:box-border">
    //     <section className="flex-1 flex flex-col items-start justify-start max-w-full text-left text-13xl text-white font-lexend">
    //       <AppiconRectangle />
    //       <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
    //         <div className="flex-1 flex flex-row items-start justify-start gap-[78px] max-w-full lg:flex-wrap mq750:gap-[78px] mq450:gap-[78px]">
    //           <div className="w-[365px] flex flex-col items-start justify-start gap-[24px] min-w-[365px] max-w-full lg:flex-1 mq750:min-w-full">
    //             <div className="w-[356px] h-[60px] relative capitalize font-medium flex items-end shrink-0 max-w-full mq1050:text-7xl mq450:text-lgi">
    //               Track List
    //             </div>
    //             <div className="self-stretch flex flex-col items-start justify-start text-center text-5xl">
    //               <div className="self-stretch rounded-sm bg-midnightblue overflow-hidden flex flex-row items-center justify-start py-0 pr-2.5 pl-2 gap-[12px] border-[1px] border-solid border-white mq450:flex-wrap">
    //                 <div className="h-[45px] w-[54px] relative capitalize font-light flex items-center justify-center shrink-0 mq450:text-lgi">
    //                   1
    //                 </div>
    //                 <div className="h-[72px] flex-1 relative capitalize font-light text-left flex items-center min-w-[106px] mq450:text-lgi">
    //                   Song Name
    //                 </div>
    //               </div>
    //               <div className="self-stretch rounded-sm bg-midnightblue overflow-hidden flex flex-row items-center justify-start py-0 pr-2.5 pl-2 gap-[12px] z-[1] mt-[-1px] border-[1px] border-solid border-white mq450:flex-wrap">
    //                 <div className="h-[45px] w-[54px] relative capitalize font-light flex items-center justify-center shrink-0 mq450:text-lgi">
    //                   1
    //                 </div>
    //                 <div className="h-[72px] flex-1 relative capitalize font-light text-left flex items-center min-w-[106px] mq450:text-lgi">
    //                   Song Name
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex-1 flex flex-col items-start justify-start min-w-[614px] max-w-full mq750:min-w-full">
    //             <ReviewComponent />
    //             <ReviewComponent propMarginTop="-3px" />
    //             <ReviewComponent propMarginTop="-3px" />
    //             <ReviewComponent propMarginTop="-3px" />
    //             <ReviewComponent propMarginTop="-3px" />
    //             <ReviewComponent propMarginTop="-3px" />
    //             <ReviewComponent propMarginTop="-3px" />
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   <LandingPageComponent1 />
    // </div>

    <Container style={{  backgroundColor:"#391F67",overflow:"hidden",display:"flex"}}>
      

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
        
    </Container>
  );
};

export default AlbumInfoPage;
