import './NavBar.css'
import {Link} from 'react-router-dom'


function NavBar(){
    return(
        <div style={{border:"1px solid red"}} >
            NavBar
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar