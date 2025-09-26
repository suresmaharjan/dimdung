import { useState, useReducer } from "react"


const Oper = {
    Increment: "increment",
    Decrement: "decrement",
    Reset: "reset",
}


function reducerFunc(state, action) {
    switch (action.type) {
        case Oper.Increment:
            return { count: state.count + 1 }
        case Oper.Decrement:
            return { count: state.count - 1 }
        case Oper.Reset:
            return { count: 0 }

    }
}

export default function Reducer() {
    const [state, dispatch] = useReducer(reducerFunc, { count: 0 })

    return (
        <>
            Count : {state.count}
            <br />
            <br />
            <button onClick={() => dispatch({ type:Oper.Increment})}>+</button><br />
            <button onClick={() =>  dispatch({ type:Oper.Reset})}>Reset</button><br />
            <button onClick={() =>  dispatch({ type:Oper.Decrement})}>-</button>
        </>
    )
}