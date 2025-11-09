import React from "react";

function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="min-h-screen w-full pt-[60px] mobile:pt-[70px] laptop:pt-[100px] 
      px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] flex flex-col-reverse 
      laptop:flex-row gap-8 tablet:gap-12 laptop:gap-16 items-center justify-center"
    >
      {/* Left Content */}
      <div className="w-full laptop:w-1/2 flex flex-col items-center gap-6 
      mobile:gap-8 tablet:gap-10 laptop:gap-12">
        <h2 className="font-sub-heading text-[24px] mobile:text-[28px] 
        tablet:text-[36px] laptop:text-[40px] text-center max-w-[90%] 
        tablet:max-w-[550px]">
          A montage of familiar faces and names.
        </h2>
        
        <p className="font-text text-[14px] mobile:text-[16px] tablet:text-[20px] 
        laptop:text-[24px] text-center max-w-[90%] tablet:max-w-[550px]">
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We've been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </p>
        
        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-4 mobile:gap-6 
        tablet:gap-8 laptop:gap-4">
          {/* Card 1 */}
          <div className="w-[120px] mobile:w-[150px] tablet:w-[200px] 
          laptop:w-[180px] desktop:w-[235px] rotate-6 laptop:rotate-10 
          relative flex-shrink-0">
            <img src="/assets/Note-Page.svg" alt="notesPage" className="w-full" />
            <span className="absolute inset-0 flex flex-col items-center 
            justify-center pt-2 mobile:pt-4">
              <p className="text-[32px] mobile:text-[40px] tablet:text-[60px] 
              laptop:text-[70px] desktop:text-[80px] font-text text-[#103255] 
              leading-none">
                85+
              </p>
              <p className="font-text text-[12px] mobile:text-[14px] 
              tablet:text-[20px] laptop:text-[22px] desktop:text-[24px] 
              text-[#F15D2B]">
                Projects
              </p>
            </span>
          </div>

          {/* Card 2 */}
          <div className="w-[120px] mobile:w-[150px] tablet:w-[200px] 
          laptop:w-[180px] desktop:w-[235px] rotate-6 laptop:rotate-10 
          relative flex-shrink-0">
            <img src="/assets/Note-Page.svg" alt="notesPage" className="w-full" />
            <span className="absolute inset-0 flex flex-col items-center 
            justify-center pt-2 mobile:pt-4">
              <p className="text-[32px] mobile:text-[40px] tablet:text-[60px] 
              laptop:text-[70px] desktop:text-[80px] font-text text-[#103255] 
              leading-none">
                50+
              </p>
              <p className="font-text text-[12px] mobile:text-[14px] 
              tablet:text-[20px] laptop:text-[22px] desktop:text-[24px] 
              text-[#F15D2B]">
                Happy Clients
              </p>
            </span>
          </div>

          {/* Card 3 */}
          <div className="w-[120px] mobile:w-[150px] tablet:w-[200px] 
          laptop:w-[180px] desktop:w-[235px] rotate-6 laptop:rotate-10 
          relative flex-shrink-0">
            <img src="/assets/Note-Page.svg" alt="notesPage" className="w-full" />
            <span className="absolute inset-0 flex flex-col items-center 
            justify-center pt-2 mobile:pt-4">
              <p className="text-[32px] mobile:text-[40px] tablet:text-[60px] 
              laptop:text-[70px] desktop:text-[80px] font-text text-[#103255] 
              leading-none">
                10+
              </p>
              <p className="font-text text-[12px] mobile:text-[14px] 
              tablet:text-[20px] laptop:text-[22px] desktop:text-[24px] 
              text-[#F15D2B]">
                Experts Team
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full laptop:w-1/2 flex flex-col items-center gap-6 
      mobile:gap-8">
        <h1 className="font-heading text-[#0F3255] text-center tracking-tight 
        leading-[0.95] text-[36px] mobile:text-[44px] tablet:text-[60px] 
        laptop:text-[70px] desktop:text-[80px] max-w-[95%] tablet:max-w-[600px] 
        laptop:max-w-[700px]">
          Every project is more than just a brief - it's a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </h1>

        <img
          src="/assets/About.svg"
          alt="mountainImage"
          className="hidden laptop:block w-full max-w-[700px] desktop:max-w-[960px] 
          relative -bottom-8 desktop:-bottom-[100px]"
        />
      </div>
    </section>
  );
}

export default AboutUs;
