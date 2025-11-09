import React, { useState } from "react";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "film",
      title: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
      heading: "Film Production",
      img: "/assets/film.png",
      content: `
Art isn't meant to sit on distant walls — it's meant to breathe, to travel, to belong.<br/>
Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br/><br/>
V curates:<br/>
<ul class="list-disc list-inside">
  <li>Art Festivals</li>
  <li>Live Performances</li>
  <li>Community Events</li>
  <li>Cultural Storytelling</li>
</ul>
`,
    },
    {
      id: "branding",
      title: `"A brand is a voice, and a product is a souvenir." - Lisa Gansky`,
      heading: "Branding",
      img: "/assets/branding.png",
      content: `
A brand isn't just what you see — it's what you remember, what you carry home, and what you trust.<br/>
We shape brands that people remember, return to, and fall in love with.<br/><br/>
V creates:<br/>
<ul class="list-disc list-inside">
  <li>Branding & Communication</li>
  <li>Market Mapping</li>
  <li>Content Management</li>
  <li>Social Media Management</li>
  <li>Rebranding</li>
</ul>
`,
    },
    {
      id: "art",
      title: `"Art enables us to find ourselves and lose ourselves at the same time." - Thomas Merton`,
      heading: "Art Curation",
      img: "/assets/art.png",
      content: `
Art isn't meant to sit on distant walls — it's meant to breathe, to travel, to belong.<br/>
Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br/><br/>
V curates:<br/>
<ul class="list-disc list-inside">
  <li>Art Festivals</li>
  <li>Live Performances</li>
  <li>Community Events</li>
  <li>Cultural Storytelling</li>
</ul>
`,
    },
  ];

  const handleClick = (service) => {
    const selected = services.find((el) => el.id === service);
    setActiveService(selected);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full pt-[60px] mobile:pt-[70px] 
      laptop:pt-[100px] px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] 
      text-center flex flex-col"
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mobile:gap-3 mb-8 
      mobile:mb-10 tablet:mb-12 laptop:mb-16">
        <h2 className="font-sub-heading text-[18px] mobile:text-[20px] 
        tablet:text-[28px] laptop:text-[36px] desktop:text-[40px] 
        tracking-tight leading-tight max-w-[95%] tablet:max-w-[700px] 
        laptop:max-w-[900px]">
          {activeService
            ? activeService.title
            : "The storyboard reveals the breadth of our craft."}
        </h2>
        <img
          src="/assets/service/stroke.svg"
          alt="stroke"
          className={`${
            activeService
              ? "w-[200px] tablet:w-[400px] laptop:w-[500px] desktop:w-[600px]"
              : "w-[150px] tablet:w-[250px] laptop:w-[350px] desktop:w-[450px]"
          }`}
        />
      </div>

      {/* Service Detail View */}
      {activeService ? (
        <div className="relative flex flex-col items-center justify-center 
        w-full flex-1 gap-8 tablet:gap-12 laptop:gap-16">
          {/* Background images - Hidden on mobile */}
          <div className="absolute inset-0 -z-10 hidden tablet:block pointer-events-none">
            <img
              src={`/assets/service/${activeService.id}/1.svg`}
              alt="decoration"
              className="absolute bottom-4 left-4 laptop:bottom-10 laptop:left-20 
              w-[80px] tablet:w-[100px] laptop:w-[120px]"
            />
            <img
              src={`/assets/service/${activeService.id}/2.svg`}
              alt="decoration"
              className="absolute top-4 right-4 laptop:top-10 laptop:right-20 
              w-[80px] tablet:w-[100px] laptop:w-[120px]"
            />
            <img
              src={`/assets/service/${activeService.id}/3.svg`}
              alt="decoration"
              className="absolute top-1/2 right-[10%] laptop:right-[20%] 
              -translate-y-1/2 w-[80px] tablet:w-[100px] laptop:w-[120px]"
            />
            <img
              src={`/assets/service/${activeService.id}/4.svg`}
              alt="decoration"
              className="absolute bottom-4 right-4 laptop:bottom-10 laptop:right-20 
              w-[80px] tablet:w-[100px] laptop:w-[120px]"
            />
          </div>

          {/* Main content */}
          <div className="flex flex-col laptop:flex-row items-center 
          justify-center gap-6 mobile:gap-8 tablet:gap-10 laptop:gap-12 
          desktop:gap-16 z-10 w-full max-w-[1400px]">
            {/* Image card */}
            <div className="w-[250px] mobile:w-[300px] tablet:w-[350px] 
            laptop:w-[400px] desktop:w-[430px] bg-white flex flex-col 
            items-center justify-center p-4 mobile:p-6 tablet:p-8 
            shadow-[0px_11.4px_38px_0px_#00000040] rounded-lg">
              <div className="w-full flex justify-center items-center overflow-hidden">
                <img
                  src={`/assets/service/${activeService.id}/main.png`}
                  alt={activeService.heading}
                  className="max-w-full max-h-[200px] mobile:max-h-[250px] 
                  tablet:max-h-[300px] laptop:max-h-[400px] object-contain"
                />
              </div>
              <p className="font-text text-[18px] mobile:text-[20px] 
              tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] 
              pt-4 text-center">
                {activeService.heading}
              </p>
            </div>

            {/* Text content */}
            <div
              className="w-full max-w-[90%] mobile:max-w-[400px] 
              tablet:max-w-[500px] laptop:max-w-[600px] font-text 
              text-[14px] mobile:text-[16px] tablet:text-[20px] 
              laptop:text-[22px] desktop:text-[24px] text-left 
              leading-relaxed text-[#252729]"
              dangerouslySetInnerHTML={{ __html: activeService.content }}
            />
          </div>

          {/* Back button */}
          <button
            onClick={() => setActiveService(null)}
            className="w-[100px] mobile:w-[120px] tablet:w-[140px] 
            text-[16px] mobile:text-[18px] tablet:text-[20px] 
            py-2 mobile:py-2.5 tablet:py-3 px-3 mobile:px-4 tablet:px-5 
            rounded-3xl border-2 border-[#F15D2B] text-[#F15D2B] 
            hover:bg-[#F15D2B] hover:text-white transition-all 
            flex items-center justify-center gap-2 cursor-pointer z-10 
            mb-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mobile:w-6 mobile:h-6"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>
      ) : (
        // Main Service Cards Grid
        <>
          <div className="flex flex-col tablet:flex-row justify-center 
          items-center tablet:items-stretch gap-6 mobile:gap-8 tablet:gap-10 
          laptop:gap-16 desktop:gap-20 w-full flex-1 pb-20 tablet:pb-0">
            {/* Film Production Card */}
            <div
              className="cursor-pointer hover:scale-105 transition-transform 
              w-[250px] mobile:w-[280px] tablet:w-[300px] laptop:w-[350px] 
              desktop:w-[430px] bg-white flex flex-col items-center 
              relative tablet:rotate-8 p-4 mobile:p-5 tablet:p-6 
              shadow-[0px_11.4px_38px_0px_#00000040]"
              onClick={() => handleClick("film")}
            >
              <img
                src="/assets/service/FilmProduction.png"
                alt="Film Production"
                className="w-full h-[250px] mobile:h-[300px] tablet:h-[350px] 
                laptop:h-[400px] desktop:h-[465px] object-cover"
              />
              <img
                src="/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block -left-[60px] 
                desktop:-left-[90px] -top-8 desktop:-top-10 -rotate-25 
                w-[180px] desktop:w-60 h-[80px] desktop:h-[110px]"
              />
              <p className="font-text text-[18px] mobile:text-[20px] 
              tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] 
              pt-4">
                Film Production
              </p>
            </div>

            {/* Branding Card */}
            <div
              className="cursor-pointer hover:scale-105 transition-transform 
              w-[250px] mobile:w-[280px] tablet:w-[300px] laptop:w-[350px] 
              desktop:w-[430px] bg-white flex flex-col items-center 
              relative p-4 mobile:p-5 tablet:p-6 
              shadow-[0px_11.4px_38px_0px_#00000040]"
              onClick={() => handleClick("branding")}
            >
              <img
                src="/assets/service/Branding.png"
                alt="Branding"
                className="w-full h-[250px] mobile:h-[300px] tablet:h-[350px] 
                laptop:h-[400px] desktop:h-[465px] object-cover"
              />
              <img
                src="/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block w-[180px] 
                desktop:w-60 h-[80px] desktop:h-[110px] rotate-15 
                right-[40px] desktop:right-[60px] -top-[50px] 
                desktop:-top-[65px]"
              />
              <p className="font-text text-[18px] mobile:text-[20px] 
              tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] 
              pt-4">
                Branding
              </p>
            </div>

            {/* Art Curation Card */}
            <div
              className="cursor-pointer hover:scale-105 transition-transform 
              w-[250px] mobile:w-[280px] tablet:w-[300px] laptop:w-[350px] 
              desktop:w-[430px] bg-white flex flex-col items-center 
              relative tablet:-rotate-8 p-4 mobile:p-5 tablet:p-6 
              shadow-[0px_11.4px_38px_0px_#00000040]"
              onClick={() => handleClick("art")}
            >
              <img
                src="/assets/service/ArtCuration.png"
                alt="Art Curation"
                className="w-full h-[250px] mobile:h-[300px] tablet:h-[350px] 
                laptop:h-[400px] desktop:h-[465px] object-cover"
              />
              <img
                src="/assets/service/tape.png"
                alt="tape"
                className="absolute hidden laptop:block -right-[60px] 
                desktop:-right-[90px] -top-8 desktop:-top-10 rotate-25 
                w-[180px] desktop:w-60 h-[80px] desktop:h-[110px]"
              />
              <p className="font-text text-[18px] mobile:text-[20px] 
              tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] 
              pt-4">
                Art Curation
              </p>
            </div>
          </div>

          {/* Footer strip */}
          <img
            src="/assets/service/Footer.svg"
            alt="footer-design"
            className="absolute bottom-0 left-0 w-full -z-20 object-cover 
            h-[80px] mobile:h-[100px] tablet:h-[120px]"
          />
        </>
      )}
    </section>
  );
}

export default Services;
