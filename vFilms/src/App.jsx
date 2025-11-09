import { forActiveSection } from "./hooks/forActiveSection";
import {
  Team,
  AboutUs,
  Contact,
  Hero,
  Header,
  Portfolio,
  Services,
} from "./components/index.components";

function App() {
  const activeSection = forActiveSection([
    "hero",
    "aboutUs",
    "aboutTeam",
    "services",
    "portfolio",
    "contact",
  ]);
  
  return (
    <>
      <Header active={activeSection} />
      <div className="w-full min-h-screen">
        <Hero />
        <Team />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
