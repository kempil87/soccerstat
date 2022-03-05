import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage";
import {CompetitionsIn} from "./pages/CompetitionsIn/CompetitionsIn";
import {Team} from "./pages/Team/Team";
import {NotificationContainer} from "react-notifications";
import {Footer} from "./components/Footer/Footer";
import {Menu} from "./components/Menu/Menu";
import Teams from "./pages/Teams/Teams";
import {useState} from "react";


function App() {

    const [menuActive, setMenuActive] = useState(false)



    return (
        <div className="App d-flex flex-column flex-fill">
            <Header  active={menuActive} clickBurger={() => setMenuActive(!menuActive)}/>
            <Menu active={menuActive} click={() => setMenuActive(false)}/>
            {menuActive === false && (
                <div className="flex-fill container body-content" style={{marginTop: 70}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/club" element={<Teams/>}/>
                        <Route path="/competition/:id" element={<CompetitionsIn/>}/>
                        <Route path="/team/:id" element={<Team/>}/>
                    </Routes>
                </div>
            )}
            <Footer/>
            {/*<NotificationContainer/>*/}
        </div>
    );
}

export default App;
