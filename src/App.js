import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage";
import {AboutPage} from "./pages/About/AboutPage";
import {CompetitionsIn} from "./pages/CompetitionsIn/CompetitionsIn";
import {Team} from "./pages/Team/Team";
import {NotificationContainer} from "react-notifications";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
    <div className="App container">
        <Header/>

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/competition/:id" element={<CompetitionsIn/>} />
            <Route path="/team/:id" element={<Team/>} />
        </Routes>
        {/*<NotificationContainer/>*/}
        <Footer/>
    </div>

);
}

export default App;
