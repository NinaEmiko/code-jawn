import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routing/Home"

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
