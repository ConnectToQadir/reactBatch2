import { useState, useEffect } from 'react'

const UseEffect = () => {

    const [num, setNum] = useState(0)
    const [loadAgain, setLoadAgain] = useState(false)

    const fetchData = async () => {
        var data = await fetch('https://edifygroup.herokuapp.com/api/blogs')
        var jsonData = await data.json()
        console.log(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [loadAgain])



    return (
        <div>
            <h1>UseEffect</h1>
            <button onClick={() => setNum(num - 1)} >-</button>
            <span>{num}</span>
            <button onClick={() => setNum(num + 1)} >+</button>
            <br /><br />
            <button onClick={() => setLoadAgain(!loadAgain)} >Change Load Value</button>

        </div>
    )
}

export default UseEffect