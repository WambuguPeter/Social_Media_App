import '../styles/PageStlyles/Groups.scss'
import DifferentGroups from '../Components/DifferentGroups'
import RecentActivities from '../Components/RecentActivities'
import Search  from '../assets/search.png'

const Groups = () => {
  return (
    <div className='GroupsPage' >
    <div className="navbar">
      <h2>Groups</h2>
      <div className="rightSide">
        <img src={Search} alt="nopic" />
        <button>+ Create New Group</button>
      </div>
    </div>
    <div className="suggested">
      <div>
      <h3>Suggested for you..</h3>
      <p>Groups you might be interested in.</p>
      </div>
      
      <button className='seeAll'>See All</button>
    </div>
    <div className="GroupsItems">
      <DifferentGroups/>
    </div>    
    <div className="Activity">
      
    <RecentActivities />
    </div>

    </div>
  )
}

export default Groups