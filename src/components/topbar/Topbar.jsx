import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">            
            <div className="wrapper">
                <div className="left">
                        <a href="#intro" className = "home" >Home</a> 

                        
                     
                        <div className="itemContainer">
                            <Person className="icon"/>
                           <span>9808928400</span>
                            </div> 

                        <div className="itemContainer">
                            <Mail className="icon"/>
                            <span>tej.bijay@gmail.com</span>
                            
                            </div>                 
                </div>
                        <div className="right">
                        </div>

            </div>
         
        </div>
    )
}
