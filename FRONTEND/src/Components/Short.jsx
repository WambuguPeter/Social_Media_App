import "../styles/Short.scss"
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'

function Short(){
   return(      
      <div className="design">
         <div className="side-profile">
            <img src={design1} alt="nopic" />
            <div className="side-profile-text">
            <h5>Website Design</h5>          
            </div>
         </div>
         <div className="side-profile">        
            <img src={design2} alt="nopic" />
            <div className="side-profile-text">
               <h5>Mobile Design</h5>          
            </div>
         </div>
         <div className="side-profile">        
            <img src={design3} alt="nopic" />
            <div className="side-profile-text">
               <h5>Product Design</h5>          
            </div>
         </div> 
      </div> 
   )
}
export default Short;
{/* <div className="shortcut">               
   <div className="react">
      <img src={first} alt="noppic"  />
      <h5>Website Design</h5>
   </div>

   <div className="react">
      <img src={third} alt="nopic"  />
      <h5>Mobile Design</h5>
   </div>
   
   <div className="react">
      <img src={second} alt="nopic"  />
      <h5>Product Design</h5>
   </div>
</div> */}