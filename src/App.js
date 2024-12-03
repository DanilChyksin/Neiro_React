import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Experts from "./pages/experts/Experts";
import Faqs1 from "./pages/faqs/Faqs1";
import Faqs2 from "./pages/faqs/Faqs2";
import InputApplication from "./pages/input_application/InputApplication";
import Main from "./pages/main/Main";
import Project from "./pages/project/Project";
import Question from "./pages/question/Question";
import Reviews from "./pages/reviews/Reviews";
import Sector from "./pages/sector/Sector";
import Agreement from "./pages/agreement/Agreement";
import BtnScrollUp from "./components/btnScrollUp/BtnScrollUp";

function App() {
  return (
    <>
      <Header />
      <BtnScrollUp />
      <Main />
      <Agreement />
      <Faqs1 />
      <Faqs2 />
      <Sector />
      <Question />
      <About />
      <Experts />
      <Project />
      <Reviews />
      <InputApplication />
      <Footer />
    </>
  );
}

export default App;
