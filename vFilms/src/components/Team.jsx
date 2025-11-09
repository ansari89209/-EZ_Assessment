import React from "react";

function Team() {
  return (
    <section
      id="aboutTeam"
      className="relative min-h-screen w-full pt-[60px] mobile:pt-[70px] 
      laptop:pt-[100px] px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] 
      flex flex-col justify-center items-center overflow-hidden"
    >
      {/* India Gate - Hidden on mobile/small tablets */}
      <img
        src="/assets/team/Indiagate.svg"
        className="hidden laptop:block absolute left-10 desktop:left-20 
        bottom-10 w-[300px] desktop:w-[442px] opacity-80"
        alt="Indiagate image"
      />
      
      {/* Paper with text */}
      <div className="relative w-full max-w-[95%] mobile:max-w-[450px] 
      tablet:max-w-[600px] laptop:max-w-[700px] desktop:max-w-[800px] 
      mb-8 tablet:mb-16 laptop:mb-20 z-10">
        <img
          src="/assets/team/paperClip.svg"
          alt="paper clip"
          className="w-full rotate-0 tablet:-rotate-6 laptop:-rotate-10"
        />
        <p className="absolute inset-0 p-6 mobile:p-8 tablet:p-12 laptop:p-16 
        desktop:p-20 text-[14px] mobile:text-[16px] tablet:text-[20px] 
        laptop:text-[22px] desktop:text-[24px] text-left tracking-wide 
        font-sub-heading leading-tight flex items-center">
          Some craft films. Some build brands. Some curate art. We bring it all
          together — a collective of storytellers driven by one belief: every
          project deserves to be more than just a message; it should become a
          masterpiece. <br className="hidden tablet:block" /> 
          <br className="hidden tablet:block" />
          From first spark to final frame, from raw ideas to
          timeless visuals — we shape stories that stay with you.
        </p>
      </div>

      {/* People illustration with labels */}
      <div className="relative w-full max-w-[95%] mobile:max-w-[500px] 
      tablet:max-w-[700px] laptop:max-w-[900px] desktop:max-w-[1050px] 
      mt-8 tablet:mt-12">
        <img
          src="/assets/team/People.svg"
          alt="People image"
          className="w-full"
        />
        
        {/* Film Makers label */}
        <p className="absolute font-heading text-[18px] mobile:text-[22px] 
        tablet:text-[32px] laptop:text-[38px] desktop:text-[42px] text-[#103255] 
        left-[15%] tablet:left-[20%] -top-6 mobile:-top-8 tablet:-top-12 
        laptop:-top-14 desktop:-top-16">
          Film Makers
        </p>
        
        {/* Branding Experts label */}
        <p className="absolute font-heading text-[18px] mobile:text-[22px] 
        tablet:text-[32px] laptop:text-[38px] desktop:text-[42px] text-[#103255] 
        -left-2 mobile:-left-4 tablet:-left-8 laptop:-left-16 desktop:-left-20 
        -bottom-4 mobile:-bottom-6 tablet:-bottom-8 laptop:-bottom-10 
        desktop:-bottom-12">
          Branding Experts
        </p>
        
        {/* Art Curators label */}
        <p className="absolute font-heading text-[18px] mobile:text-[22px] 
        tablet:text-[32px] laptop:text-[38px] desktop:text-[42px] text-[#103255] 
        -top-2 mobile:-top-3 tablet:-top-4 laptop:top-6 desktop:top-10 
        -right-2 mobile:-right-4 tablet:-right-8 laptop:-right-16 desktop:-right-20">
          Art Curators
        </p>
      </div>
    </section>
  );
}

export default Team;
