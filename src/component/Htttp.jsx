import { useEffect, useState } from "react";
// import axios from "axios";
import {
    useQuery
} from '@tanstack/react-query'


export const Http = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
                res.json(),
            ),
    })


    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    console.log(data)

    return (
        <>
            {
              data.map((item, idx) => (
                    <div>
                        <h1>Name : {item.name}</h1>
                        <h2>Email :{item.email}</h2>
                        <p>City : {item.address.city}</p>
                    </div>

                ))
            }

        </>
    )
}