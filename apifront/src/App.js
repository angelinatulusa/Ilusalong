import Navbar from "./Navbar"
import Home from "./pages/home"
import Meistrid from "./pages/meistrid"
import Tooted from "./pages/tooted"
import SignIn from "./pages/signin"
import Broneering from "./pages/broneering"
import ToodeAdmin from "./pages/tootedAdmin"
import BroneeringAdmin from "./pages/broneeringAdmin"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tooted" element={<Tooted />} />
          <Route path="/meistrid" element={<Meistrid />} />
          <Route path="/broneering" element={<Broneering />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/tootedAdmin" element={<ToodeAdmin/>} />
          <Route path="/broneeringAdmin" element={<BroneeringAdmin/>} />
        </Routes>
      </div>
      <footer class="footer">
        <div class="container">
            <div class="row">
                <div className="adress">
                    <h4>Me asume siin:</h4>
                    <p>Aadress: Vesivärava 53c</p>
                    <p>Ajakava: E-R: 9:00 - 19:00, L: 10:00 - 17:00</p>
                </div>
                <div className="info">
                    <h4>Kontaktandmed:</h4>
                    <p>Telefon: +372 53 73 0917</p>
                    <p>Email: kolomoets.anna86@gmail.com</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App