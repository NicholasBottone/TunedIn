import { FunctionComponent } from "react";
import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText,Box } from '@mui/material';
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { TextField, Button,  Rating } from '@mui/material';

export default async function ProfilePage({params}: {params: { profileId: string };}){
  // return (
  //   // <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[166px] box-border gap-[34px] tracking-[normal] mq750:gap-[34px]">
  //   //   <Navs1 />
  //   //   <section className="w-[1345px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-white font-lexend">
  //   //     <div className="w-[1167px] flex flex-col items-start justify-start gap-[158px] max-w-full lg:gap-[158px] mq750:gap-[158px] mq450:gap-[158px]">
  //   //       <div className="w-[385px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
  //   //         <img
  //   //           className="h-52 w-[205px] relative rounded-71xl object-cover mq450:flex-1"
  //   //           loading="eager"
  //   //           alt=""
  //   //           src="/bba1f5779848452287574848905bfa139838c3da68b2474c8a7a0b4d78fe79bf-1@2x.png"
  //   //         />
  //   //         <div className="w-[107px] flex flex-col items-start justify-start pt-[43px] px-0 pb-0 box-border min-w-[107px] mq450:flex-1">
  //   //           <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
  //   //             <h3 className="m-0 h-[35px] relative text-inherit capitalize font-extralight font-inherit flex items-center shrink-0 mq450:text-base">
  //   //               Friends
  //   //             </h3>
  //   //             <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[25px] text-13xl">
  //   //               <b className="flex-1 relative capitalize mq1050:text-7xl mq450:text-lgi">
  //   //                 999
  //   //               </b>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //       <div className="self-stretch flex flex-row items-start justify-end max-w-full">
  //   //         <AlbumRowComponenet />
  //   //       </div>
  //   //     </div>
  //   //   </section>
  //   //   <section className="w-[1038px] my-0 mx-[!important] absolute h-full top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-[45px] text-white font-lexend mq1050:flex-wrap">
  //   //     <div className="w-[245px] flex flex-row items-start justify-start relative min-w-[245px] mq1050:flex-1">
  //   //       <h1 className="my-0 mx-[!important] h-8 w-[309px] absolute top-[185px] left-[-92px] text-inherit capitalize font-bold font-inherit flex items-center mq1050:text-17xl mq450:text-[27px]">
  //   //         Username
  //   //       </h1>
  //   //       <img
  //   //         className="h-px w-[451px] absolute my-0 mx-[!important] top-[241px] left-[-120px] object-contain"
  //   //         loading="eager"
  //   //         alt=""
  //   //         src="/line-4.svg"
  //   //       />
  //   //       <div className="flex-1 flex flex-col items-start justify-start pt-[273px] px-0 pb-0 text-xl">
  //   //         <div className="self-stretch flex flex-col items-end justify-start gap-[114px]">
  //   //           <div className="w-[215px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[10px]">
  //   //             <h3 className="m-0 self-stretch h-[35px] relative text-inherit capitalize font-extralight font-inherit flex items-center shrink-0 mq450:text-base">
  //   //               Album’s Reviewed
  //   //             </h3>
  //   //             <div className="w-36 flex flex-row items-start justify-start py-0 px-[31px] box-border text-13xl">
  //   //               <b className="flex-1 relative capitalize z-[1] mq1050:text-7xl mq450:text-lgi">
  //   //                 999
  //   //               </b>
  //   //             </div>
  //   //           </div>
  //   //           <div className="self-stretch h-[37px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border text-21xl">
  //   //             <h1 className="m-0 self-stretch flex-1 relative text-inherit capitalize font-extralight font-inherit flex items-center mq1050:text-13xl mq450:text-5xl">
  //   //               Reviewed
  //   //             </h1>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //     <div className="h-[17px] w-[13px] hidden z-[1]" />
  //   //     <div className="w-[586px] flex flex-row items-start justify-start relative min-w-[586px] max-w-full mq1050:flex-1 mq750:min-w-full">
  //   //       <img
  //   //         className="h-[1517.7px] flex-1 relative max-w-full overflow-hidden object-contain mq1050:flex-1"
  //   //         alt=""
  //   //         src="/untitled-design-1-2@2x.png"
  //   //       />
  //   //       <img
  //   //         className="h-6 w-6 absolute my-0 mx-[!important] bottom-[154px] left-[224px] z-[2]"
  //   //         loading="eager"
  //   //         alt=""
  //   //         src="/star-41.svg"
  //   //       />
  //   //       <img
  //   //         className="h-6 w-6 absolute my-0 mx-[!important] bottom-[154px] left-[190px] z-[2]"
  //   //         loading="eager"
  //   //         alt=""
  //   //         src="/star-41.svg"
  //   //       />
  //   //       <img
  //   //         className="h-6 w-6 absolute my-0 mx-[!important] bottom-[154px] left-[156px] z-[2]"
  //   //         loading="eager"
  //   //         alt=""
  //   //         src="/star-41.svg"
  //   //       />
  //   //     </div>
  //   //     <img
  //   //       className="h-6 w-[27px] absolute my-0 mx-[!important] bottom-[154px] left-[381px] z-[2]"
  //   //       loading="eager"
  //   //       alt=""
  //   //       src="/stars.svg"
  //   //     />
  //   //     <img
  //   //       className="h-6 w-[120px] absolute my-0 mx-[!important] bottom-[154px] left-[162px] z-[2]"
  //   //       loading="eager"
  //   //       alt=""
  //   //       src="/stars-1.svg"
  //   //     />
  //   //     <img
  //   //       className="h-6 w-[120px] absolute my-0 mx-[!important] bottom-[154px] left-[-82px] z-[2]"
  //   //       loading="eager"
  //   //       alt=""
  //   //       src="/stars-1.svg"
  //   //     />
  //   //   </section>
  //   //   <div className="w-[697px] h-px absolute my-0 mx-[!important] bottom-[474px] left-[166px] box-border border-t-[1px] border-solid border-white" />
  //   //   <img
  //   //     className="w-[120px] h-6 absolute my-0 mx-[!important] bottom-[154px] left-[174px] z-[2]"
  //   //     loading="eager"
  //   //     alt=""
  //   //     src="/rating-stars.svg"
  //   //   />
  //   // </div>
  // );
  console.log(params.profileId);
  const session = await getServerAuthSession();
  
  const user = await api.user.getUserById.query({id:params?.profileId})


  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {user?.name}'s Profile
      </Typography>
      <Avatar alt={user?.name ?? undefined}
              src={user?.image ?? undefined}/>
      <Typography variant="h5" gutterBottom>
        Comments Made:
      </Typography>
      <List>
        {user?.reviews.map(
          (review, index) => 
        {
          return(
          <Box display="flex" marginBottom="16px" key={review.id}>
          <Avatar
            alt={user?.name ?? undefined}
            src={user?.image ?? undefined}
          />
          <div>
            <Typography variant="subtitle1">
              {user.name}
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
                  precision={1}
                  readOnly
                />
                <Typography variant="body1">{review.rating}/10</Typography>
              </div>
              <Typography variant="body1">{review.message}</Typography>
            </div>
          </div>
          </Box>)

        })}
      </List>
    </div>
  );
};
