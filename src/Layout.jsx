import Navbar from "./Camponents/Navbar";
import Footer from "./Camponents/Footer";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
