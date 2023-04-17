import {useState} from 'react'


const UseState = () => {

    const [num,setNum] = useState(0)



  return (
    <div>
        <h1>useState Hook</h1>

        <button onClick={()=>setNum(num-1)} >-</button>
        <span>{num}</span>
        <button onClick={()=>setNum(num+1)} >+</button>

    </div>
  )
}

export default UseState