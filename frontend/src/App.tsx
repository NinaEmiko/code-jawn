import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./flow/1-home/Home"
import Controls from "./components/Controls"

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          {<Route key="home" path="/" element={<Home />} />}
        </Routes>
      </BrowserRouter> */}
      <Home />
    </>
  )
}

export default App
