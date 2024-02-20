import '../styles/Designs.scss'
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'


const Designs = () => {
  return (
    <div>
        <div className="Designs">
        
        <div className="design">
        <div className="side-profile1">        
        <img src={design1} alt="nopic" />
        <div className="side-profile-text">
          <h5>Web Design</h5>          
        </div>
      </div>
      <div className="side-profile1">        
        <img src={design2} alt="nopic" />
        <div className="side-profile-text">
          <h5>Mobile Design</h5>          
        </div>
      </div>
      <div className="side-profile1">        
        <img src={design3} alt="nopic" />
        <div className="side-profile-text">
          <h5>Product Design</h5>          
        </div>
      </div>
      <div className="side-profile1">        
        <img src={design1} alt="nopic" />
        <div className="side-profile-text">
          <h5>App Design</h5>          
        </div>
      </div>  
          </div>  

        
        
      </div>
    </div>
  )
}

export default Designs