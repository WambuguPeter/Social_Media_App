import '../styles/Major.scss'
import { Route, Routes} from 'react-router-dom'
import Friends from '../Pages/Friends'
import Events from '../Pages/Events'
import Groups from '../Pages/Groups'
import Photos from '../Pages/Photos'
import Timeline from '../Pages/Timeline'
import Videos from '../Pages/Videos'
import Navbar from '../Layout/Navbar'
import SideNav from '../Layout/SideNav'
// import Rightbar from '../Layout/Rightbar'
// import MainContent from '../Layout/MainContent'
import RightSideBar from './RightSideBar'
import MainLeft from './MainLeft'

const Major = () => {
  return (    
  <div className="main">
    <div className="navbar">      
      <Navbar/>
    </div>
    <div className="maincontent1">
      <div className="sidenav">
        <SideNav/>
      </div>
      <div className="content">        
        <div className='MainContent'>
          <div className="contentContainer">
          <Routes>          
            <Route path='/major' element={<MainLeft />} />          
            <Route path="/friends" element={<Friends />} />          
            <Route path="events" element={<Events />} />          
            <Route path="groups" element={<Groups />} />          
            <Route path="photos" element={<Photos />} />          
            <Route path="timelines" element={<Timeline />} />          
            <Route path="videos" element={<Videos />} />          
          </Routes>
          </div> 
              
          {/* <div className="rightbar">
            <RightSideBar />
            {/* <Rightbar/> 
          </div> */}
        </div>
      </div>
      <div className="rightbar">
            <RightSideBar />
            {/* <Rightbar/> */}
          </div>
    </div>
  </div>  
  )
}

export default Major