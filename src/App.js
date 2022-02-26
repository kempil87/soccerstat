import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage";
import {CompetitionsIn} from "./pages/CompetitionsIn/CompetitionsIn";
import {Team} from "./pages/Team/Team";
import {NotificationContainer} from "react-notifications";
import {Footer} from "./components/Footer/Footer";
import {Menu} from "./components/Menu/Menu";
import Clubs from "./pages/Clubs/Clubs";


function App() {

    return (
        <div className="App d-flex flex-column flex-fill" >
            <Header/>
            <div className="flex-fill container " style={{marginTop :70}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/club" element={<Clubs/>}/>
                    <Route path="/competition/:id" element={<CompetitionsIn/>}/>
                    <Route path="/team/:id" element={<Team/>}/>
                </Routes>
            </div>
            {/*<NotificationContainer/>*/}
            <Footer/>
        </div>
    );
}

export default App;
