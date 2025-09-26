import { useContext } from "react";
import { TestContext } from "../App";

export default function Child() {
    const { demo, setDemo } = useContext(TestContext)
    function setUser() {
        setDemo("logged in")
        console.log(demo)
        setInterval(() => {
            localStorage.setItem("user", demo)
        }, 1000)
    }


    return (
        <div className="box">
            <h1>Child : {demo}</h1>
            <form>
                <p>Email :</p>
                <input type="text" />
                <p>Password :</p>
                <input type="password" />
            </form>
            <button onClick={setUser}>Button</button>
        </div>
    )
}