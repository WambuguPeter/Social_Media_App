import '../styles/RecentActivities.scss'

import design from '../assets/Design-search.png'
import note from '../assets/Shortnote.png'
import DE from '../assets/DE2.png'

const RecentActivities = () => {
  return (
    <div>
         <div className="activities">
              <div className="Useractivity">
                <img className='Avat' src={DE} alt="nopic" />
                <div className="Userdetails">
                  <p>Design Enthusiast</p>
                  <span>Jonathan . 56 mins ago</span>
                </div>                
              </div>
              <div className="activdescript">
                <span>Here are some Activity works that I made on the weekend
                   with some of my friends, happy for that!</span>
              </div>
              <div className="photos">
                <img src={design} alt="nopic" />
                <img src={note} alt="nopic" />
                
              </div>
                          
            </div>
    </div>
  )
}

export default RecentActivities