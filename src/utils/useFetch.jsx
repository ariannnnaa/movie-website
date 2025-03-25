import { useEffect, useState } from "react";

const key = import.meta.env.VITE_API_KEY;
const api = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const useFetch = (urlParams,page = 0) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': key,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            const result = await response.json();
             setData(result);
            setError({show: false, msg: ''});
        } catch (err) {
          setError({show: true, msg: err.message || 'Произошла ошибка'});
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData(`${api}${urlParams}&page=${page + 1}`);
    }, [urlParams, page]);

    return { isLoading, error, data }
}

export default useFetch;
