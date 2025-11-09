import React from "react";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full pt-[60px] mobile:pt-[70px] 
      laptop:pt-[100px] px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] 
      flex flex-col justify-center items-center gap-8 mobile:gap-10 
      tablet:gap-12 laptop:gap-16"
    >
      {/* Camera Image - Hidden on mobile */}
      <img
        src="/assets/portfolio/Cam.svg"
        alt="camera"
        className="hidden tablet:block absolute left-[5%] laptop:left-[10%] 
        top-[15%] laptop:top-[20%] w-[150px] tablet:w-[180px] 
        laptop:w-[200px] desktop:w-[225px] -z-10 opacity-80"
      />

      <div className="flex flex-col items-center gap-6 mobile:gap-8 
      tablet:gap-10 w-full">
        {/* Heading */}
        <div className="text-center">
          <h3 className="font-sub-heading text-[#252729] text-[28px] 
          mobile:text-[32px] tablet:text-[36px] laptop:text-[40px]">
            The Highlight Reel
          </h3>
          <p className="font-text text-[16px] mobile:text-[18px] 
          tablet:text-[20px] laptop:text-[24px]">
            Watch the magic we've captured.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-[95%] mobile:max-w-[500px] 
        tablet:max-w-[700px] laptop:max-w-[900px] desktop:max-w-[980px]">
          <img
            src="/assets/portfolio/portfolio.svg"
            alt="video"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src="/assets/portfolio/Play.svg"
            alt="playbtn"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 z-10 hover:scale-110 transition-transform 
            cursor-pointer w-[50px] mobile:w-[60px] tablet:w-[80px] 
            laptop:w-[100px]"
          />
        </div>
      </div>

      {/* Bottom circle decoration */}
      <img
        src="/assets/Footerircle.svg"
        alt="footercircle"
        className="absolute -z-10 right-0 top-1/2 -translate-y-1/2 
        translate-x-1/4 w-[150px] tablet:w-[200px] laptop:w-[250px] 
        opacity-50"
      />
    </section>
  );
}

export default Portfolio;
