import '../styles/MainContent.scss'
import { Route, Routes} from 'react-router-dom'
// import Rightbar from '../Layout/Rightbar'
import MainLeft from './MainLeft'
import Friends from '../Pages/Friends'
import Events from '../Pages/Events'
import Groups from '../Pages/Groups'
import Photos from '../Pages/Photos'
import Timeline from '../Pages/Timeline'
import Videos from '../Pages/Videos'
import Navbar from './Navbar'
import RightSideBar from '../Layout/RightSideBar'
const MainContent = () => {
  return (

    <div className='MainContent'>
      <Navbar/>
      <MainLeft />
       <Routes>          
          <Route path='/mainleft' element={<MainLeft />} />          
          <Route path="/friends" element={<Friends />} />          
          <Route path="events" element={<Events />} />          
          <Route path="groups" element={<Groups />} />          
          <Route path="photos" element={<Photos />} />          
          <Route path="timelines" element={<Timeline />} />          
          <Route path="videos" element={<Videos />} />          
        </Routes>
            
      <div className="rightbar">
        <RightSideBar />
        {/* <Rightbar/> */}
      </div>
    </div>
  )
}

export default MainContent