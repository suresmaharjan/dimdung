import { useEffect, useState } from "react"
import axios from "axios";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [datas, setData] = useState(null);
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [url])

    return { loading, datas, error  }
}