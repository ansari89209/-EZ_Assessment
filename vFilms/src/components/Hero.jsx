import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full pt-[60px] mobile:pt-[70px] laptop:pt-[100px] 
      px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] flex flex-col laptop:flex-row 
      justify-center laptop:justify-around items-center gap-8 mobile:gap-10 
      tablet:gap-12 laptop:gap-16"
    >
      <img
        src="/assets/HeroLogo.svg"
        className="w-[180px] mobile:w-[200px] tablet:w-[400px] desktop:w-[565px] 
        flex-shrink-0"
        alt="VFilms Logo"
      />
      
      <div className="flex flex-col items-center justify-center gap-6 mobile:gap-8 
      tablet:gap-10 max-w-[90%] tablet:max-w-[700px] laptop:max-w-[800px]">
        <h1 className="font-heading text-[40px] mobile:text-[50px] tablet:text-[70px] 
        laptop:text-[90px] desktop:text-[100px] text-center leading-[0.95] 
        tracking-tight text-[#0F3255]">
          Varnan is where stories find <br className="hidden tablet:block" /> 
          their voice and form
        </h1>
        
        <p className="font-sub-heading text-[#F15D2B] text-[28px] mobile:text-[32px] 
        tablet:text-[36px] laptop:text-[40px] text-center">
          Films . Brands . Art
        </p>
        
        <p className="font-text text-[#252729] text-[14px] mobile:text-[16px] 
        tablet:text-[18px] leading-[1.5] text-center max-w-[100%] tablet:max-w-[487px]">
          Since 2009, V've been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn't just tell stories - V honors them.
        </p>
      </div>
    </section>
  );
}

export default Hero;
