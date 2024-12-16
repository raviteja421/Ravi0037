import MedicalBenefits from "./Modules/MedicalBenefits";
import HealthArticlesAndWellness from "./Modules/HealthArticlesAndWellness";
import FrequentlyAskedQuestions from "./Modules/FrequentlyAskedQuestions";
import Footer from "./Modules/Footer";
import FooterBottom from "./Modules/FooterBottom";
import WhyPeoplesChooseUs from "./Modules/WhyPeoplesChooseUs";
import NavBar from "./Modules/NavBar";
import DoctorAppointment from "./Modules/DoctorAppointment";

import "./main.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="body_mt">
        <DoctorAppointment />
        <WhyPeoplesChooseUs />
        <FrequentlyAskedQuestions />
        <MedicalBenefits />
        <HealthArticlesAndWellness />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}

export default App;
