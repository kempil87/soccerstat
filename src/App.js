import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/Home/HomePage";
import {AboutPage} from "./pages/About/AboutPage";
import {CompetitionsIn} from "./pages/CompetitionsIn/CompetitionsIn";
import {Team} from "./pages/Team/Team";
import {NotificationContainer} from "react-notifications";
import {Footer} from "./components/Footer/Footer";
import {Contacts} from "./pages/Contacts/Contacts"


function App() {
    return (
        <div className="App d-flex flex-column flex-fill" style={{}}>
            <Header/>
            <div className="flex-fill container ">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
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
