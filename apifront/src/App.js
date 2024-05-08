import Navbar from "./Navbar"
import Home from "./pages/home"
import Meistrid from "./pages/meistrid"
import Tooted from "./pages/tooted"
import SignIn from "./pages/signin"
import Broneering from "./pages/broneering"
import ToodeAdmin from "./pages/tootedAdmin"
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
        </Routes>
      </div>
    </>
  )
}

export default App