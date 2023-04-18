import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import UseEffect from "../components/UseEffect"
import UseState from "../components/UseState"
import UseReducer from "../components/UseReducer"

const Home = () => {

  

  return (
    <div>

      <NavBar />

      <h1>Home Page</h1>


      {/* Hooks */}
      <hr />
      <h2>Hooks</h2>
      <p>These hooks are used in functional components</p>
      <p>Hook name should be start with word "use"</p>
      <p>These all hooks are used at top level any component</p>
      <ol>
        <li>useState = used to track changes in state</li>
        <li>useEffect = sideEffect generate</li>
        <li>useContext = global state management</li>
        <li>useReducer = shorcut of multiple useState </li>
        <li>useRef = used to target direct DOM elements</li>
      </ol>


      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <UseReducer />

      <hr />

      <Footer />


    </div>
  )
}

export default Home