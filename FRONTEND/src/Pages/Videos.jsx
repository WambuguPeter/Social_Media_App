import '../styles/PageStlyles/Videos.scss'
import DifferentVideos from '../Components/DifferentVideos'
import RecentVideo from '../Components/RecentVideo'
import Search  from '../assets/search.png'


const Videos = () => {
  return (
    <div className='VideosPage' >
    
      <div className="navbar">
        <h2>Video</h2>
        <div className="rightSide">
          <img src={Search} alt="nopic" />
          
        </div>
      </div>
      <div className="Categories">
        <div>
        <h4>Categories to explore.</h4>      
        </div>      
        <button className='seeAll'>See All</button>
      </div>
      <div className="VideosItems">
        <DifferentVideos/>
      </div>    
      <div className="Activity">
        
      <RecentVideo />
      </div>

    </div>
   
  )
}

export default Videos