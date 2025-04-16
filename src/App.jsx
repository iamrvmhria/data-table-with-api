import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { Routes, Route } from "react-router-dom"
import PostMethod from "./components/PostMethod"
import Table from "./components/Table"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div className="container">
        <Nav />
        <Outlet />
        {/* <Routes>
          <Route path='' element={<Home />} />
          <Route path='/get-method' element={<Table />} />
          <Route path='/post-method' element={<PostMethod />} />
        </Routes> */}
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='get-method' element={<Table />} />
            <Route path='post-method' element={<PostMethod />} />
          </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
