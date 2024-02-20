import "../styles/SideNav.scss"
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Designs from "../Components/Designs"
import Menu from "../Components/Menu"
import logo from "../assets/logo.png";
import SideProfile from "../Components/SideProfile"

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className={`side-nav ${isSidebarOpen ? 'open' : ''}`} >
      {/* <div className="nav-logo">
        <button >
          <BiMenu />
          {/* <BiMenu {onClick={toggleSidebar}} /> }
        </button>     
      
        <img src={logo} alt="nopic" />
        <h2>Social-M</h2>
      </div> */}
      <SideProfile />
      <Menu />
      <h5>SHORTCUTS</h5> 
      <Designs />

    </div>
  )
}

export default SideNav

