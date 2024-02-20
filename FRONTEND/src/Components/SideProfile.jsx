import '../styles/SideProfile.scss'
import { useNavigate} from 'react-router-dom'
import Avatar1 from '../assets/Avatar1.jpg'

const SideProfile = () => {
  const navigate = useNavigate();

  const home =() =>{
    navigate("/major")
  }
  return (
    <div>
        <div className="side-profile">
         <img className="avat" onClick={home} src={Avatar1} alt="nopic" />
        <div className="side-profile-text">
           <h3 onClick={home} >Jonathan</h3>
           <p onClick={home} >@tweet</p>
           
         </div>
       </div>
    </div>
  )
}

export default SideProfile