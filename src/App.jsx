import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Service from "./pages/Service"
import Home from "./pages/Home"
import Analytic from "./pages/Analytic"
import Pricing from "./pages/Pricing"
import Profile from "./pages/Profile"
import Artical from "./pages/Artical"
import Conatct from "./pages/Conatct"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aricle" element={<Artical />} />
          <Route path="/contact" element={<Conatct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
