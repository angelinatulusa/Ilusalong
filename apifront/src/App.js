import Navbar from "./Navbar"
import Home from "./pages/home"
import Meistrid from "./pages/meistrid"
//import Tooted from "./pages/tooted"
import SignIn from "./pages/signin"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meistrid" element={<Meistrid />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  )
}

export default App