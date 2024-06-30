import { useEffect, useState } from "react"
import movieService, { Movie, PaginatedResponse } from "../services/movie-service"
import { CanceledError } from "../services/api-client"

const usePhotos = () => {
    const [movies, setMovies] = useState<PaginatedResponse<Movie>>({
        data: [],
        path: '',
        per_page: 0,
        next_cursor: '',
        next_page_url: '',
        prev_cursor: null,
        prev_page_url: null,
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingMovies, setLoadingMovies] = useState(false)

    // Fetch the next set of movies.
    const nextMovies = (cursor: string) => {
        setLoadingMovies(true)
        const request  = movieService.loadNext(cursor)

        request
            .then(response => {
                const nextMovies = response.data
                setMovies(prevMovies => {
                    return {
                        ...nextMovies,
                        data: [
                            ...(prevMovies?.data || []),
                            ...nextMovies.data
                        ]
                    }
                })
                setLoadingMovies(false)
            })
            .catch(error => {
                if (error instanceof CanceledError) return
                console.log(error)

            })
    }

    useEffect(() => {
        setLoading(true)
        const {request, cancel} = movieService.getAll<PaginatedResponse<Movie>>()
        request
            .then(response => {
                setMovies(response.data)
                setLoading(false)
            })
            .catch(error => {
                if (error instanceof CanceledError) return
                setError(error.message)
                setLoading(false)
            })

            return () => cancel()
    }, [])

    return { movies, error, loading, setLoading, setError, setMovies, nextMovies, loadingMovies, setLoadingMovies }

}

export default usePhotos
