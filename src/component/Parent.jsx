import { useEffect, useRef, useState } from "react"
import Child from "./Child";

export const Parent = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log(buttonRef.current)
    //     }
    // )
    return (
        <div className="box">
            {/* <button onClick={() => setCount(count => count + 1)}>{prop.demo}</button> */}
            <h1>Parent</h1>
            <Child />
        </div>
    )
}