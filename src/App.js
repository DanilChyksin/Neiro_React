import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Experts from "./pages/experts/Experts";
import Faqs1 from "./pages/faqs/Faqs1";
import Faqs2 from "./pages/faqs/Faqs2";
import InputApplication from "./pages/input_application/InputApplication";
import Main from "./pages/main/Main";
import Partners from "./pages/partners/Partners";
import Project from "./pages/project/Project";
import Question from "./pages/question/Question";
import Reviews from "./pages/reviews/Reviews";
import Sector from "./pages/sector/Sector";
import Agreement from "./pages/agreement/Agreement";
import { useState } from "react";

function App() {
  const [active, isActive] = useState(false);
  return (
    <div className={active ? "active" : ""}>
      <Header />
      <Main />
      <Agreement />
      <Faqs1 />
      <Faqs2 />
      <Sector />
      <Question />
      <About />
      <Experts />
      <Project active={active} isActive={isActive} />
      <Partners />
      <Reviews />
      <InputApplication />
      <Footer />
    </div>
  );
}

export default App;
