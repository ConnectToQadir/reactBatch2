import './NavBar.css'
import {Link} from 'react-router-dom'
import { GlobalData } from '../../App'
import { useContext } from 'react'


function NavBar(){

    var data = useContext(GlobalData)


    return(
        <div style={{border:"1px solid red"}} >
            NavBar
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>



            <h2
            style={{
            backgroundColor: data.them === "light" ? "white" : "black",
            color: data.them === "light" ? "black" : "white"}}
            >{data.user}</h2>

            <button onClick={()=>data.setUser("Muhib")} >UpdateUser</button>

            <button onClick={()=>data.setTheme("dark")} >DarkMode</button>
        </div>
    )
}

export default NavBar