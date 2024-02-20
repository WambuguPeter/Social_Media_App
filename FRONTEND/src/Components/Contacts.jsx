import '../styles/Contacts.scss'
import Avatar5 from '../assets/Avatar5.png'
import Avatar6 from '../assets/Avatar6.png'
import Avatar7 from '../assets/Avatar7.png'


const Contacts = () => {
  return (
    <div>
        <div className="contacts">
      <div className="headers">
        <h4>CONTACT</h4>
        <button className='seeAll'>
        <p>See all</p>
        </button>
        </div>
        <div className="members">
          <div className="side-profile">        
          <img src={Avatar7} alt="nopic" />
          <div className="side-profile-text">
            <h5>James Njau</h5>          
          </div>
        </div> 

        <div className="side-profile">        
          <img src={Avatar6} alt="nopic" />
          <div className="side-profile-text">
            <h5>Brian Kerio</h5>          
          </div>
        </div> 

        <div className="side-profile">        
          <img src={Avatar5} alt="nopic" />
          <div className="side-profile-text">
            <h5>Penny wachira</h5>          
          </div>
        </div>
        <div className="side-profile">        
          <img src={Avatar5} alt="nopic" />
          <div className="side-profile-text">
            <h5>Penny wachira</h5>          
          </div>
        </div>
          </div>     
      
      </div>
    </div>
  )
}

export default Contacts