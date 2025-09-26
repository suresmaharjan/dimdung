import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react"



function reducerFunc(state, action) {
    switch (action.type) {
        case "color":
            // return { ...state, color: [e.target.value] }
            return { ...state, color: "red" }
        // case "size":

        default:
            console.log("I am default")

    }
}

export const Test = () => {
    const [text, setText] = useState({ color: "blue", size: 16 });
    const [state, dispatch] = useReducer(reducerFunc, { color: "blue", size: 16 });

    return (
        <div className="container">
            <div>This is a test case</div>
            <div>
                <LeftSection />
                <RightSection text={state} dispatch={dispatch} />
            </div>

        </div>
    )
}


function LeftSection({ setText, text }) {
    return (
        <div style={{ float: "left" }}>
            <input type="text"  /> <br />

        </div>
    )
}


function RightSection({ text, dispatch }) {
    return (
        <div style={{ color: text.color }} onClick={() => dispatch({ type: "color" })} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Optio tempora saepe recusandae facilis nesciunt, quaerat fugiat corporis vero hic illum odio officia quia nobis facere fuga velit impedit excepturi! Alias ?
        </div >
    )
}