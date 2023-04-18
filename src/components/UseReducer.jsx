import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {

    var [state,dispatch] = useReducer((state,action)=>{

        if(action.type === "1"){
            return <button>Sign in</button>
        }

        if(action.type === "2"){
            return <button>Signed in</button>
        }

        if(action.type === "3"){
            return <button>Log Out</button>
        }

        return state


    },<button>Sign Up</button>)

    return (
        <div>
            <hr />
            <h2>UseReducer</h2>

            {state}

            <br /><br />
            <input onChange={(e)=> dispatch({type:e.target.value})    } type="text" />

        </div>
    )
}

export default UseReducer