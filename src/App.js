import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, createContext } from "react";
import Event from "./Components/Event";
// import Faq from "./Components/Faq";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import BlogContent from "./Pages/BlogContent";
import { useNavigate } from "react-router-dom";
// ren .git .git_backup
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Team from "./Components/Team";

const CountriesContext = createContext();

function App() {
  const countries = [
    {
      name: "nigeria",
    },
    {
      name: "afghanistan",
    },
  ];

  const [tripInfo, setTripInfo] = useState([]);
  console.log(tripInfo);

  const [date, setDate] = useState("");

  // getting trip info to save to localStorage
  useEffect(() => {
    const savedTrip = localStorage.getItem("tripInfo");
    if (savedTrip) {
      const parsedTrip = JSON.parse(savedTrip);
      setTripInfo(parsedTrip);
    }
  }, []);

  // trip info initial object
  const travelInfo = {
    id: new Date(),
    date: date,
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  // save travel info
  const saveTravelInfo = () => {
    if (date.trim() == "") {
      console.log("=>>>" + " pick a date");
    } else {
      setTripInfo((prev) => {
        localStorage.setItem("tripInfo", JSON.stringify([...prev, travelInfo]));
        return [...prev, travelInfo];
      });
    }
  };

  // delete trip
  const deleteTrip = (id) => {
    const newTrip = tripInfo.filter((item) => item.id !== id.id);
    console.log("deleted =>> " + id.id);
    setTripInfo(newTrip);
    localStorage.setItem("tripInfo", JSON.stringify(newTrip));
  };

  
  return (
    <section className="App">
    

      




      <CountriesContext.Provider value={countries}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />


            <Route path="/Blog/:id" element={<BlogContent />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CountriesContext.Provider>
    </section>
  );
}

export default App;
