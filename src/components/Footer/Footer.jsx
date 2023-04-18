import './Footer.css'
import { GlobalData } from '../../App'
import { useContext } from 'react'

const Footer = () => {

  var data = useContext(GlobalData)

  return (
    <div>
      Footer
      <h2
        style={{
          backgroundColor: data.them === "light" ? "white" : "black",
          color: data.them === "light" ? "black" : "white"
        }}
      >{data.user}</h2>
    </div>
  )
}

export default Footer