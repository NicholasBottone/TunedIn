import { FunctionComponent } from "react";

const AppiconRectangle: FunctionComponent = () => {
  return (
    <div className="w-[1356px] flex flex-row items-start justify-start gap-[29px] max-w-full text-left text-45xl text-white font-lexend lg:flex-wrap">
      <div className="h-[441px] w-[441px] flex flex-row items-start justify-start py-2.5 pr-[35px] pl-2.5 box-border min-w-[441px] max-w-full lg:flex-1 mq750:min-w-full">
        <img
          className="h-[396px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover lg:flex-1"
          loading="eager"
          alt=""
          src="/album6-2@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[576px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 h-[91px] flex-1 relative text-inherit lowercase font-semibold font-inherit inline-block max-w-full mq1050:text-32xl mq450:text-19xl">
            album name
          </h1>
          <img
            className="h-[2.7px] w-[942px] absolute my-0 mx-[!important] right-[-42px] bottom-[-2.5px] object-contain z-[1]"
            loading="eager"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <h3 className="m-0 w-[483px] h-14 relative text-17xl lowercase font-semibold font-inherit inline-block shrink-0 max-w-full mq1050:text-10xl mq450:text-3xl">
          artist name
        </h3>
        <div className="w-[451px] flex flex-col items-start justify-start gap-[27px] max-w-full text-5xl">
          <div className="self-stretch relative capitalize mq450:text-lgi">
            <span className="font-extralight">Release Date:</span>
            <span className="font-semibold whitespace-pre-wrap">{`     {release_date}`}</span>
          </div>
          <div className="self-stretch h-[22px] relative capitalize inline-block shrink-0 mq450:text-lgi">
            <span className="font-extralight">Genres:</span>
            <span className="font-semibold whitespace-pre-wrap">{`     {genres}`}</span>
          </div>
          <div className="self-stretch relative capitalize mq450:text-lgi">
            <span className="font-extralight">Description:</span>
            <span className="font-semibold whitespace-pre-wrap">{`     {descriptions}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppiconRectangle;
