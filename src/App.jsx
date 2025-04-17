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
      </div>
    </>
  )
}

export default App
