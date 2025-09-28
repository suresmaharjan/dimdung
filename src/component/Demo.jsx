import useFetch from "../hook/useFetch"

export default function Demo() {
    const { loading, datas , error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return  <h1>Loader Again....</h1>
    if (error) console.log(error)
    
        console.log(datas)
    //   const test = 5 > 4 ? "isGreaater" :  "isLess"
    return (
        <div>
          {datas?.map((item)=>(
            <>
            <h1>{item.name}</h1>
            </>
          ))}
        </div>
    )
}