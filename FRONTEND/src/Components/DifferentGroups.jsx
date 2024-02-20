import '../styles/DifferentGroups.scss'
import UD from '../assets/UO.png'
import ui from '../assets/ui.png'
import phone from '../assets/phone.png'
import users from '../assets/users.png'
import laptop from '../assets/laptopCode.png'


const DifferentGroups = () => {
  return (
    <div className="GroupItems">
        <div className="Groups">
            <div className="Group1">
                <div className="header">
                    <img src={UD} alt="NOPIC" />
                    <div className="details">
                        <h2>UI/U Designer</h2>
                        <p>Bandung . 7 posts a day</p>
                    </div>
                    {/* icon */}
                </div>
                <img src={phone} alt="" />
                <div className="join">
                    <h4>join Group</h4>
                    <img src={users} alt="nopic" />
                </div>
            </div>
        </div>

        <div className="Groups">
            <div className="Group2">
                <div className="header">
                    <img src={ui} alt="NOPIC" />
                    <div className="details">
                        <h2>User Interface</h2>
                        <p>Jakarta . 7 posts a day</p>
                    </div>
                    {/* icon */}
                </div>
                <img src={laptop} alt="" />
                <div className="join">
                    <h4>join Group</h4>
                    <img src={users} alt="nopic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DifferentGroups